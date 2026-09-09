import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/", init = {}) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const headers = new Headers(init.headers);
  if (!headers.has("accept")) headers.set("accept", "text/html");

  return worker.fetch(
    new Request(`http://localhost${path}`, { ...init, headers }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}
test("server-renders the self-paced course landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Re-own the[\s\S]{0,80}PM core/);
  // Hero: the differentiator, then the proof row that replaced the eyebrow.
  assert.match(html, /asks for your position before it offers one/);
  assert.match(html, /class="course-hero-proof"/);
  assert.match(html, /sign-ups/);

  // The hero plate: a rotating exhibit of the course's own reasoning
  // structures. Only the active figure is in the markup; the other two are
  // reachable through the three dots.
  assert.match(html, /class="hero-plate"/);
  assert.match(html, /Name the choice, or no finding can change anything/);
  assert.match(html, /aria-label="Previous figure"/);
  assert.match(html, /aria-label="Next figure"/);
  assert.equal((html.match(/aria-label="Figure 0\d:/g) ?? []).length, 3, "expected three figure dots");

  // Resume affordance survives, without the old card.
  assert.match(html, /class="course-resume"/);
  assert.doesNotMatch(html, /Open curriculum · Self-paced · No sign-up/, "eyebrow duplicated the proof row");
  assert.match(html, /Seven phases\. Forty-three lessons/);
  assert.match(html, /Complete foundation/);
  assert.match(html, /Technical \+ AI judgment/);
  assert.match(html, /Every lesson ends in evidence you can keep/);
  assert.match(html, /Read/);
  assert.match(html, /Decide/);
  assert.match(html, /Apply/);
  assert.match(html, /Keep/);
  assert.match(html, /Practice on Noted/);
  assert.match(html, /decision artifacts/);
  assert.match(html, /Progress stays on your device/);
  assert.match(html, /The course rebuilds the core\. The book extends the role/);
  assert.match(html, /The course stands alone/);
  assert.match(html, /PM Is Now Another Member of Technical Staff/);
  assert.match(html, /https:\/\/book\.raziiabraham\.com/);
  assert.match(html, /Explore the book/);
  assert.doesNotMatch(html, /guided live cohort|Demo Day|price range|linkedin\.com/i);
  assert.match(html, /href="\/learn\/pf-01-decision-before-method"/);
  assert.match(html, /The website is the reader\. The curriculum is the source/);
});

test("server-renders atomic full-curriculum lessons", async () => {
  const response = await render("/learn/pf-01-decision-before-method");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Decision before method/);
  assert.match(html, /The problem/);
  assert.match(html, /The concept/);
  assert.match(html, /Build it/);
  assert.match(html, /Use it/);
  assert.match(html, /Ship it/);
  assert.match(html, /Check understanding/);
  assert.match(html, /Decision brief/);

  // Authored markdown, not the phase-level fallback. The heading comes from
  // this lesson's own `## Problem — …` line.
  assert.match(html, /the research nobody can act on/);
  assert.match(html, /class="lesson-prose"/);

  // Visuals: a diagram for the client renderer, and a worked comparison.
  assert.match(html, /<pre class="mermaid">/);
  assert.match(html, /class="compare"/);

  // Repo paths are for the agent tutor. On the web they must become links.
  assert.doesNotMatch(html, /<code>lessons\//, "repo paths should be linkified");
  assert.match(html, /href="\/noted"[^>]*>the Noted case</);
});

test("every lesson page renders its authored body, diagrams, and checks", async () => {
  const manifest = JSON.parse(await readFile(new URL("../lessons/manifest.json", import.meta.url), "utf8"));
  const lessons = manifest.phases.flatMap((phase) => phase.lessons);

  for (const lesson of lessons) {
    const response = await render(`/learn/${lesson.slug}`);
    assert.equal(response.status, 200, `${lesson.id} should render`);
    const html = await response.text();

    assert.match(html, /class="lesson-prose"/, `${lesson.id}: no authored body`);
    assert.match(html, /<pre class="mermaid">/, `${lesson.id}: no diagram`);
    assert.match(html, /class="compare"/, `${lesson.id}: no worked comparison`);
    assert.match(html, /class="lesson-quiz"/, `${lesson.id}: no check questions`);

    // A web reader must be able to check their Build answer, copy the transfer
    // questions as a worksheet, and copy the artifact template as a file.
    assert.match(html, /<details class="lesson-reveal">/, `${lesson.id}: Build self-check not collapsed on the page`);
    assert.match(html, /class="lesson-worksheet"/, `${lesson.id}: Use section not rendered as a worksheet`);
    assert.match(html, /class="lesson-template"/, `${lesson.id}: artifact template not rendered`);
    assert.match(html, /class="lesson-quality"/, `${lesson.id}: quality bar not rendered`);

    // Generic fallback headings mean the lesson never got its own.
    assert.doesNotMatch(html, /Why this judgment gets lost/, `${lesson.id}: generic Problem heading`);
    assert.doesNotMatch(html, /A durable model, not a ritual/, `${lesson.id}: generic Concept heading`);
    assert.doesNotMatch(html, /<code>lessons\//, `${lesson.id}: unlinkified repo path`);
  }
});

test("every course surface is open, and the cohort surfaces are gone", async () => {
  for (const path of ["/", "/noted", "/learn/pf-01-decision-before-method"]) {
    const response = await render(path);
    assert.equal(response.status, 200, `${path} should be open`);
  }

  // The shared-password gate, and the live-cohort material it protected.
  const removed = [
    "../middleware.ts",
    "../lib/student-auth.ts",
    "../app/student-access",
    "../app/api",
    "../app/deck",
    "../app/session-1",
    "../app/session-2",
    "../app/session-3",
    "../app/session-4",
    "../app/components/session-hub.tsx",
    "../app/components/advanced-reading.tsx",
  ];
  for (const relative of removed) {
    assert.equal(existsSync(new URL(relative, import.meta.url)), false, `${relative} should no longer exist`);
  }
});

test("renders the Noted case from the same markdown the skills read", async () => {
  const response = await render("/noted");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /Meet Noted/);
  assert.match(html, /The four signals/);

  // The four signals must survive verbatim — lessons and skills quote these numbers.
  assert.match(html, /11%/);
  assert.match(html, /34%/);
  assert.match(html, /10 weeks/);
  assert.match(html, /three enterprise customers/i);

  // The evidence boundary is the part learners most need and most often skip.
  assert.match(html, /Evidence boundaries/);
  assert.match(html, /18% of events/);
  assert.match(html, /Realism is not validity/);

  // Rendered from markdown, not a hand-maintained second copy.
  const source = await readFile(new URL("../lessons/noted/case.md", import.meta.url), "utf8");
  for (const fragment of ["11% over six weeks", "P95 response time rose 34%", "loses support in 10 weeks"]) {
    assert.ok(source.includes(fragment), `case.md should still contain "${fragment}"`);
  }
});

test("ships six installable agent skills with spec-valid frontmatter", async () => {
  const expected = [
    "check-understanding",
    "course-guide",
    "find-your-level",
    "learn",
    "review-artifact",
    "start-learning",
  ];

  const skillsDir = new URL("../skills/", import.meta.url);
  const present = (await readdir(skillsDir, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
  assert.deepEqual(present, expected);

  for (const name of expected) {
    const source = await readFile(new URL(`${name}/SKILL.md`, skillsDir), "utf8");
    const frontmatter = source.match(/^---\n([\s\S]*?)\n---\n/);
    assert.ok(frontmatter, `${name}: SKILL.md needs YAML frontmatter`);

    const declared = frontmatter[1].match(/^name:\s*(.+)$/m)?.[1].trim();
    assert.equal(declared, name, `${name}: frontmatter name must match its directory`);
    assert.match(declared, /^[a-z0-9-]{1,64}$/, `${name}: name must be lowercase, hyphens, <= 64 chars`);

    // `version` and `tags` are not spec fields — they belong under `metadata`.
    assert.doesNotMatch(frontmatter[1], /^version:/m, `${name}: move version under metadata`);
    assert.doesNotMatch(frontmatter[1], /^tags:/m, `${name}: move tags under metadata`);

    const description = frontmatter[1].match(/^description: >\n([\s\S]*?)(?=\n[a-z]+:)/m)?.[1] ?? "";
    const flattened = description.replace(/\s+/g, " ").trim();
    assert.ok(flattened.length > 0, `${name}: description is required`);
    assert.ok(flattened.length <= 1024, `${name}: description must be <= 1024 chars`);

    // Anything suggesting a next command must not present slash syntax as universal.
    if (/Claude Code:/.test(source)) {
      assert.match(source, /Codex:/, `${name}: host invocation contract must cover Codex`);
    }
  }

  // The mirror Claude Code reads when the repo is cloned must match the source.
  for (const name of expected) {
    const [source, mirror] = await Promise.all([
      readFile(new URL(`${name}/SKILL.md`, skillsDir), "utf8"),
      readFile(new URL(`../.claude/skills/${name}/SKILL.md`, import.meta.url), "utf8"),
    ]);
    assert.equal(mirror, source, `${name}: .claude/skills is stale — run npm run sync:skills`);
  }
});

test("keeps the lesson manifest in sync with the curriculum", async () => {
  const manifest = JSON.parse(await readFile(new URL("../lessons/manifest.json", import.meta.url), "utf8"));

  assert.equal(manifest.totals.phases, 7);
  assert.equal(manifest.totals.lessons, 43);
  assert.equal(manifest.routes.length, 4);
  assert.equal(manifest.stateFile, "PM-LEARNING.md");
  assert.match(manifest.rawBase, /^https:\/\/raw\.githubusercontent\.com\/raziiabraham\/core-pm\/main\/$/);

  const ids = manifest.phases.flatMap((phase) => phase.lessons.map((lesson) => lesson.id));
  assert.equal(new Set(ids).size, 43, "lesson IDs must be unique");

  // Prerequisites may only point backwards, or the routes cannot be walked.
  const seen = new Set();
  for (const id of ids) {
    const lesson = manifest.phases.flatMap((phase) => phase.lessons).find((item) => item.id === id);
    for (const prerequisite of lesson.prerequisites) {
      assert.ok(seen.has(prerequisite), `${id} depends on ${prerequisite}, which comes later`);
    }
    seen.add(id);
  }

  // Every route must reference real lessons.
  for (const route of manifest.routes) {
    for (const id of route.lessons) {
      assert.ok(ids.includes(id), `route "${route.id}" references unknown lesson ${id}`);
    }
  }
});

test("README artwork is self-contained and its counts match the curriculum", async () => {
  const [readme, hero, figure] = await Promise.all([
    readFile(new URL("../README.md", import.meta.url), "utf8"),
    readFile(new URL("../assets/hero.svg", import.meta.url), "utf8"),
    readFile(new URL("../assets/figure-decision-chain.svg", import.meta.url), "utf8"),
  ]);

  assert.match(readme, /!\[[^\]]*\]\(assets\/hero\.svg\)/);
  assert.match(readme, /!\[[^\]]*\]\(assets\/figure-decision-chain\.svg\)/);

  // GitHub proxies README images, so anything external silently fails to load.
  for (const [name, svg] of [["hero", hero], ["figure", figure]]) {
    const external = [...svg.matchAll(/https?:\/\/[^"'\s]+/g)]
      .map((match) => match[0])
      .filter((url) => !url.startsWith("http://www.w3.org/"));
    assert.deepEqual(external, [], `${name}.svg must not reference anything external`);
    assert.doesNotMatch(svg, /<script|@import|<foreignObject/i, `${name}.svg must be static SVG`);
  }

  // Counts stated in prose, checked against the real thing.
  const manifest = JSON.parse(await readFile(new URL("../lessons/manifest.json", import.meta.url), "utf8"));
  const lessons = manifest.phases.flatMap((phase) => phase.lessons);

  let diagrams = 0;
  let comparisons = 0;
  let questions = 0;

  for (const lesson of lessons) {
    const body = await readFile(new URL(`../${lesson.path}/lesson.md`, import.meta.url), "utf8");
    diagrams += (body.match(/```mermaid/g) ?? []).length;
    comparisons += (body.match(/<div class="compare">/g) ?? []).length;
    const checks = JSON.parse(await readFile(new URL(`../${lesson.path}/checks.json`, import.meta.url), "utf8"));
    questions += checks.questions.length;
  }

  const caseFile = await readFile(new URL("../lessons/noted/case.md", import.meta.url), "utf8");
  diagrams += (caseFile.match(/```mermaid/g) ?? []).length;

  assert.match(readme, new RegExp(`\\*\\*${diagrams}\\*\\*`), `README should state ${diagrams} diagrams`);
  assert.match(readme, new RegExp(`\\*\\*${comparisons}\\*\\*`), `README should state ${comparisons} comparisons`);
  assert.match(readme, new RegExp(`\\*\\*${questions}\\*\\*`), `README should state ${questions} check questions`);
  assert.match(readme, new RegExp(`parses all ${diagrams} diagrams`), "README build description should match");
});

test("the course stands alone and keeps the book at arm's length", async () => {
  const manifest = JSON.parse(await readFile(new URL("../lessons/manifest.json", import.meta.url), "utf8"));
  const lessons = manifest.phases.flatMap((phase) => phase.lessons);

  // The shared case must never suggest there is a real system to go and inspect.
  // The book investigates the author's real Noted; this one is constructed, and
  // conflating them is the failure this guards.
  const caseFile = await readFile(new URL("../lessons/noted/case.md", import.meta.url), "utf8");
  assert.match(caseFile, /Everything in this case is constructed/);
  assert.doesNotMatch(caseFile, /product is real enough/, "case.md must not invite inspection of a real product");

  for (const lesson of lessons) {
    const body = await readFile(new URL(`../${lesson.path}/lesson.md`, import.meta.url), "utf8");

    // Every lesson quotes constructed figures, so every lesson points at the
    // file that says they are constructed.
    assert.match(body, /lessons\/noted\/case\.md/, `${lesson.id}: no pointer to the shared case`);

    // The book is a boundary marker, not a dependency: at most once per lesson,
    // and only inside the Concept section's Boundary subsection.
    const mentions = (body.match(/Member of Technical Staff/g) ?? []).length;
    assert.ok(mentions <= 1, `${lesson.id}: names the book ${mentions} times, max is 1`);

    if (mentions === 1) {
      const boundary = body.slice(body.indexOf("### Boundary"), body.indexOf("## Build"));
      assert.match(boundary, /Member of Technical Staff/, `${lesson.id}: book reference must sit in ### Boundary`);
      assert.match(
        boundary,
        /do not need|not need|without it|does not teach/i,
        `${lesson.id}: a book reference must state the lesson works without it`,
      );
    }
  }
});

test("every phase ships an assessment the check-understanding skill can run", async () => {
  const manifest = JSON.parse(await readFile(new URL("../lessons/manifest.json", import.meta.url), "utf8"));

  for (const phase of manifest.phases) {
    assert.equal(phase.hasAssessment, true, `${phase.id}: no assessment.md`);

    const body = await readFile(new URL(`../${phase.path}/assessment.md`, import.meta.url), "utf8");

    // The three-part structure the skill drives.
    assert.match(body, /^## Part 1 — Scenario$/m, `${phase.id}: no scenario`);
    assert.match(body, /^## Part 2 — Boundary questions$/m, `${phase.id}: no boundary questions`);
    assert.match(body, /^## Part 3 — Recall$/m, `${phase.id}: no recall section`);

    // Answers must never leak to the learner before they respond.
    assert.match(body, /Tutor-facing file/, `${phase.id}: missing tutor-facing warning`);

    // One boundary question per lesson in the phase, each with its expected answer.
    const arrows = (body.match(/^→/gm) ?? []).length;
    assert.equal(arrows, phase.lessonCount, `${phase.id}: ${arrows} boundary answers for ${phase.lessonCount} lessons`);

    // Recall reuses the authored checks rather than inventing new questions.
    assert.match(body, /checks\.json/, `${phase.id}: recall should draw from checks.json`);
  }
});
