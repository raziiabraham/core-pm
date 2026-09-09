// Validates authored lessons against lessons/AUTHORING.md.
//
//   npm run validate:lessons
//
// Checks structure, not prose quality. A lesson that passes can still be thin —
// but a lesson that fails is broken for the `learn` skill, which depends on the
// six-section skeleton and the checks.json shape.

import { existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(readFileSync(join(root, "lessons", "manifest.json"), "utf8"));

const REQUIRED_SECTIONS = ["Problem", "Concept", "Build", "Use", "Ship", "Carry forward"];
const REQUIRED_FRONTMATTER = ["id", "title", "phase", "minutes", "artifact", "prerequisites"];

const problems = [];
// Section subtitles, collected across all lessons so duplicates can be caught.
// Two lessons sharing a heading is the flaw this whole rule exists to prevent.
const subtitles = { Problem: new Map(), Concept: new Map() };
const lessons = manifest.phases.flatMap((phase) => phase.lessons);
const authored = lessons.filter((lesson) => lesson.depth === "full");

function fail(id, message) {
  problems.push(`${id}: ${message}`);
}

function sectionHeadings(body) {
  return [...body.matchAll(/^## (.+)$/gm)].map((match) => match[1].trim());
}

for (const [index, lesson] of lessons.entries()) {
  const dir = join(root, lesson.path);
  if (lesson.depth !== "full") continue;

  // ---- lesson.md ----
  const body = readFileSync(join(dir, "lesson.md"), "utf8");
  const frontmatter = body.match(/^---\n([\s\S]*?)\n---\n/);

  if (!frontmatter) {
    fail(lesson.id, "lesson.md has no YAML frontmatter");
  } else {
    for (const key of REQUIRED_FRONTMATTER) {
      if (!new RegExp(`^${key}:`, "m").test(frontmatter[1])) {
        fail(lesson.id, `lesson.md frontmatter is missing "${key}"`);
      }
    }
    const declaredId = frontmatter[1].match(/^id:\s*(.+)$/m)?.[1].trim();
    if (declaredId && declaredId !== lesson.id) {
      fail(lesson.id, `lesson.md declares id "${declaredId}" but lives at ${lesson.path}`);
    }
  }

  const headings = sectionHeadings(body);
  for (const [position, required] of REQUIRED_SECTIONS.entries()) {
    const found = headings[position];
    if (!found || !found.toLowerCase().startsWith(required.toLowerCase())) {
      fail(lesson.id, `section ${position + 1} should start with "${required}", found "${found ?? "nothing"}"`);
    }
  }

  if (!/^### Boundary\s*$/m.test(body)) {
    fail(lesson.id, "Concept section has no `### Boundary` subsection");
  }

  // The website renders the text after the em dash as the section heading.
  // Without it every lesson would display the same generic fallback.
  for (const section of ["Problem", "Concept"]) {
    const line = body.match(new RegExp(`^## ${section}(.*)$`, "m"))?.[1] ?? "";
    const subtitle = line.includes("—") ? line.split("—")[1].trim() : "";

    if (!subtitle) {
      fail(lesson.id, `## ${section} needs an em-dash subtitle naming this lesson's angle`);
      continue;
    }
    if (/\.$/.test(subtitle)) {
      fail(lesson.id, `## ${section} subtitle should not end in a period`);
    }
    subtitles[section].set(subtitle.toLowerCase(), [
      ...(subtitles[section].get(subtitle.toLowerCase()) ?? []),
      lesson.id,
    ]);
  }

  // A solo reader needs a way to check their Build answer; the tutor needs a
  // reference for what to push toward. One subsection serves both.
  {
    const build = body.slice(body.indexOf("## Build"), body.indexOf("## Use"));
    if (!/^### What a strong answer holds\s*$/m.test(build)) {
      fail(lesson.id, "Build has no `### What a strong answer holds` subsection");
    }
  }

  // Visuals: a mechanism diagram, a worked comparison, and a structural table.
  // Each does work prose cannot, so all three are required.
  const diagrams = (body.match(/```mermaid/g) ?? []).length;
  const comparisons = (body.match(/<div class="compare">/g) ?? []).length;
  const tables = (body.match(/^\|[^\n]*\|\s*$/gm) ?? []).length;

  if (diagrams === 0) fail(lesson.id, "no ```mermaid diagram — every lesson needs a mechanism diagram");
  if (comparisons === 0) fail(lesson.id, 'no <div class="compare"> worked example');
  if (tables < 3) fail(lesson.id, "no markdown table — structural facts belong in one");

  // Box-drawing characters only. `+` and `-` are excluded deliberately: they
  // appear in SQL, tables, and prose, and matching them produced false
  // positives that pushed authors into rewriting valid code.
  if (/[┌┐└┘├┤┬┴┼─│╔╗╚╝═║]/.test(body)) {
    fail(lesson.id, "box-drawing characters found — diagrams must be Mermaid");
  }

  const next = lessons[index + 1];
  if (next) {
    const carry = body.slice(body.lastIndexOf("## Carry forward"));
    if (!carry.includes(next.id)) {
      fail(lesson.id, `Carry forward does not name the next lesson (${next.id})`);
    }
  }

  // ---- checks.json ----
  const checksPath = join(dir, "checks.json");
  if (!existsSync(checksPath)) {
    fail(lesson.id, "checks.json is missing");
  } else {
    let checks;
    try {
      checks = JSON.parse(readFileSync(checksPath, "utf8"));
    } catch (error) {
      fail(lesson.id, `checks.json is not valid JSON — ${error.message}`);
    }

    if (checks) {
      if (checks.id !== lesson.id) fail(lesson.id, `checks.json declares id "${checks.id}"`);
      const questions = checks.questions ?? [];
      if (questions.length !== 5) fail(lesson.id, `checks.json has ${questions.length} questions, expected 5`);

      for (const [n, question] of questions.entries()) {
        const label = `checks.json question ${n + 1}`;
        if (!Array.isArray(question.options) || question.options.length !== 4) {
          fail(lesson.id, `${label} does not have exactly 4 options`);
        }
        if (!Number.isInteger(question.correct) || question.correct < 0 || question.correct > 3) {
          fail(lesson.id, `${label} has an out-of-range "correct" index (${question.correct})`);
        }
        if (!question.explanation?.trim()) fail(lesson.id, `${label} has no explanation`);
        if (!question.question?.trim()) fail(lesson.id, `${label} has no question text`);
      }

      const spread = new Set(questions.map((question) => question.correct));
      if (questions.length === 5 && spread.size < 3) {
        fail(lesson.id, `checks.json answers cluster on ${spread.size} position(s) — vary them`);
      }
    }
  }

  // ---- artifact.md ----
  const artifactPath = join(dir, "artifact.md");
  if (!existsSync(artifactPath)) {
    fail(lesson.id, "artifact.md is missing");
  } else {
    const artifact = readFileSync(artifactPath, "utf8");
    if (!/^---\n[\s\S]*?\n---\n/.test(artifact)) fail(lesson.id, "artifact.md has no frontmatter");
    if (!artifact.includes("```markdown")) fail(lesson.id, "artifact.md has no ```markdown template block");
    if (!/##\s*Quality bar/i.test(artifact)) fail(lesson.id, "artifact.md has no Quality bar section");
  }
}

for (const [section, seen] of Object.entries(subtitles)) {
  for (const [subtitle, ids] of seen) {
    if (ids.length > 1) {
      fail(ids.join(", "), `share the same ## ${section} heading — "${subtitle}"`);
    }
  }
}

const outline = lessons.length - authored.length;

if (problems.length > 0) {
  console.error(`${problems.length} problem(s) across ${authored.length} authored lessons:\n`);
  for (const problem of problems) console.error(`  ✖ ${problem}`);
  console.error("\nSee lessons/AUTHORING.md for the contract.");
  process.exit(1);
}

console.log(
  `✔ ${authored.length} authored lessons pass the authoring contract` +
    (outline > 0 ? ` (${outline} still outline-depth)` : ""),
);
