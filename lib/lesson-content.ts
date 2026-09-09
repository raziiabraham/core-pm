// Reads authored lesson bodies from lessons/**/lesson.md so the website and the
// agent tutor teach exactly the same material.
//
// The website keeps its own designed layout. Only the section CONTENT comes from
// markdown — the six `## ` headings in lesson.md map onto the six numbered
// sections of the lesson page. A lesson without a lesson.md falls back to the
// phase-level frame, which is why `depth` exists in lessons/manifest.json.

import { marked } from "marked";

import { allLessons } from "./curriculum";

import notedRaw from "../lessons/noted/case.md?raw";

const raw = import.meta.glob("../lessons/**/lesson.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const rawArtifacts = import.meta.glob("../lessons/**/artifact.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const rawChecks = import.meta.glob("../lessons/**/checks.json", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export type LessonCheck = {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
};

export type LessonSection = {
  /** The full `## ` heading text, e.g. "Problem — the survey nobody acts on". */
  heading: string;
  /**
   * The part after the em dash, when the author supplied one. This is the
   * lesson's own angle on that section, and it is what the website shows as the
   * section heading. Without it, every lesson would display the same generic
   * heading, which is what the hardcoded fallback used to do.
   */
  subtitle?: string;
  /** Rendered HTML for everything under that heading. */
  html: string;
  /** The section's source markdown, for "copy this as .md" affordances. */
  markdown: string;
};

export type LessonArtifact = {
  name: string;
  filename: string;
  /** The fill-in template, as markdown ready to paste into a file. */
  template: string;
  /** The six-exposure quality bar, rendered. */
  qualityBarHtml: string;
};

export type LessonContent = {
  id: string;
  premise: string;
  sections: LessonSection[];
  /** Section lookup by normalized key: problem, concept, build, use, ship, carry. */
  byKey: Record<string, LessonSection | undefined>;
};

marked.setOptions({ gfm: true, breaks: false });

// Mermaid blocks are emitted as <pre class="mermaid"> so the MermaidDiagrams
// client component can render them in place. Every other fence keeps marked's
// default <pre><code> output.
marked.use({
  renderer: {
    code({ text, lang }) {
      if (lang !== "mermaid") return false;
      const escaped = text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      return `<pre class="mermaid">${escaped}</pre>`;
    },
  },
});

function stripFrontmatter(source: string) {
  const match = source.match(/^---\n[\s\S]*?\n---\n/);
  return match ? source.slice(match[0].length) : source;
}

/**
 * Splits "Problem — the survey nobody acts on" into its key and its subtitle.
 * Only Problem and Concept carry an authored subtitle to the page; Build, Use
 * and Ship already have their own headings in the layout.
 */
function sectionSubtitle(heading: string, key: string) {
  if (key !== "problem" && key !== "concept") return undefined;
  const dash = heading.indexOf("—");
  if (dash === -1) return undefined;
  return heading.slice(dash + 1).trim() || undefined;
}

/** Maps a heading like "Build — on Noted" to the key "build". */
function sectionKey(heading: string) {
  const value = heading.toLowerCase();
  if (value.startsWith("problem")) return "problem";
  if (value.startsWith("concept")) return "concept";
  if (value.startsWith("build")) return "build";
  if (value.startsWith("use")) return "use";
  if (value.startsWith("ship")) return "ship";
  if (value.startsWith("carry")) return "carry";
  return value.replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

/**
 * Repository paths are the right reference for the agent tutor, which reads
 * files. On the website they are dead text, so turn the ones that have a page
 * behind them into links. `currentId` is the lesson being rendered, and is what
 * separates a lesson naming its own output file from a reference back to an
 * artifact an earlier lesson produced.
 */
function linkifyPaths(html: string, currentId?: string) {
  return html
    .replace(
      /<code>lessons\/noted\/case\.md<\/code>/g,
      '<a class="lesson-inline-link" href="/noted">the Noted case</a>',
    )
    .replace(/<code>lessons\/[^<]*?\/([a-z0-9-]+)\/lesson\.md<\/code>/g, (match, slug: string) => {
      const lesson = allLessons.find((item) => item.slug === slug);
      if (!lesson) return match;
      return `<a class="lesson-inline-link" href="/learn/${slug}">${lesson.id} · ${lesson.title}</a>`;
    })
    // "the template in artifact.md" is a repo path; on the web the template is
    // rendered right there in the Ship section.
    .replace(/the template in\s+<code>artifact\.md<\/code>/g, '<a class="lesson-inline-link" href="#ship">the template below</a>')
    .replace(/<code>artifact\.md<\/code>/g, '<a class="lesson-inline-link" href="#ship">the template below</a>')
    // An artifact path from an EARLIER lesson is a dead reference on the web —
    // the reader has no such file. Point it at the lesson that produces it.
    // A lesson naming its OWN output file is left as a filename, because that
    // is exactly what the agent will write to disk.
    .replace(/<code>artifacts\/([A-Z]{2}-\d{2})-[^<]*?\.md<\/code>/g, (match, id: string) => {
      if (id === currentId) return match;
      const lesson = allLessons.find((item) => item.id === id);
      if (!lesson) return match;
      return `<a class="lesson-inline-link" href="/learn/${lesson.slug}#ship">${lesson.id} ${lesson.artifact.toLowerCase()}</a>`;
    });
}

/**
 * On the web, the Build section's self-check is collapsed so the reader commits
 * to a position before seeing what a strong one holds. The tutor does the same
 * thing conversationally.
 */
function collapseSelfCheck(html: string) {
  const marker = "<h3>What a strong answer holds</h3>";
  const at = html.indexOf(marker);
  if (at === -1) return html;
  return (
    html.slice(0, at) +
    '<details class="lesson-reveal"><summary>Committed to a position? Check it against what a strong answer holds</summary>' +
    html.slice(at + marker.length) +
    "</details>"
  );
}

function parse(source: string, currentId?: string): Omit<LessonContent, "id"> {
  const body = stripFrontmatter(source);

  // The premise is the blockquote directly under the H1.
  const quote = body.match(/^>\s?(.+(?:\n>\s?.+)*)/m);
  const premise = quote ? quote[1].replace(/\n>\s?/g, " ").trim() : "";

  const sections: LessonSection[] = [];
  const pattern = /^## (.+)$/gm;
  const matches = [...body.matchAll(pattern)];

  for (const [index, match] of matches.entries()) {
    const start = match.index + match[0].length;
    const end = index + 1 < matches.length ? matches[index + 1].index : body.length;
    const heading = match[1].trim();
    const chunk = body.slice(start, end).trim();
    const key = sectionKey(heading);
    let html = linkifyPaths(marked.parse(chunk) as string, currentId);
    if (key === "build") html = collapseSelfCheck(html);
    sections.push({ heading, subtitle: sectionSubtitle(heading, key), html, markdown: chunk });
  }

  const byKey: Record<string, LessonSection | undefined> = {};
  for (const section of sections) byKey[sectionKey(section.heading)] = section;

  return { premise, sections, byKey };
}

const cache = new Map<string, LessonContent>();

/**
 * Returns authored content for a lesson slug, or undefined when the lesson has
 * no lesson.md yet. Callers must handle undefined — not every lesson is
 * authored, and the manifest records which are.
 */
export function lessonContent(slug: string): LessonContent | undefined {
  if (cache.has(slug)) return cache.get(slug);

  const path = Object.keys(raw).find((key) => key.includes(`/${slug}/lesson.md`));
  if (!path) return undefined;

  const parsed = parse(raw[path], allLessons.find((item) => item.slug === slug)?.id);
  if (parsed.sections.length === 0) return undefined;

  const content: LessonContent = { id: slug, ...parsed };
  cache.set(slug, content);
  return content;
}

/**
 * Returns the authored check questions for a lesson slug, or an empty array
 * when the lesson has none yet.
 */
export function lessonChecks(slug: string): LessonCheck[] {
  const path = Object.keys(rawChecks).find((key) => key.includes(`/${slug}/checks.json`));
  if (!path) return [];

  try {
    const parsed = JSON.parse(rawChecks[path]);
    return Array.isArray(parsed.questions) ? parsed.questions : [];
  } catch {
    return [];
  }
}

/**
 * The shared Noted case, rendered from the same lessons/noted/case.md the
 * learning skills read. There is deliberately no second copy of this text.
 */
export function notedCase(): { intro: string; sections: LessonSection[] } {
  const body = stripFrontmatter(notedRaw);

  // Everything above the first `## ` heading is the standing introduction.
  const first = body.search(/^## /m);
  const head = (first === -1 ? body : body.slice(0, first)).replace(/^#\s.+\n/, "").trim();

  const sections: LessonSection[] = [];
  const matches = [...body.matchAll(/^## (.+)$/gm)];

  for (const [index, match] of matches.entries()) {
    const start = match.index + match[0].length;
    const end = index + 1 < matches.length ? matches[index + 1].index : body.length;
    const chunk = body.slice(start, end).trim();
    sections.push({
      heading: match[1].trim(),
      html: linkifyPaths(marked.parse(chunk) as string),
      markdown: chunk,
    });
  }

  return { intro: linkifyPaths(marked.parse(head) as string), sections };
}

/**
 * The artifact template for a lesson: the fenced markdown block from
 * artifact.md, plus the quality bar. The tutor-facing instructions at the top
 * of that file are deliberately not returned — they are for the agent.
 */
export function lessonArtifact(slug: string): LessonArtifact | undefined {
  const path = Object.keys(rawArtifacts).find((key) => key.includes(`/${slug}/artifact.md`));
  if (!path) return undefined;

  const source = rawArtifacts[path];
  const front = source.match(/^---\n([\s\S]*?)\n---\n/)?.[1] ?? "";
  const name = front.match(/^artifact:\s*(.+)$/m)?.[1].trim() ?? "Artifact";
  const filename = front.match(/^filename:\s*(.+)$/m)?.[1].trim() ?? "";

  const template = source.match(/\x60\x60\x60markdown\n([\s\S]*?)\n\x60\x60\x60/)?.[1] ?? "";
  if (!template) return undefined;

  const qualityStart = source.indexOf("## Quality bar");
  const qualityChunk = qualityStart === -1 ? "" : source.slice(qualityStart + "## Quality bar".length).trim();
  // Drop the closing "stress-test it with review-artifact" line — it is a
  // terminal instruction, not something the web reader can act on here.
  const qualityBody = qualityChunk.split(/\n\n(?=Tell the learner)/)[0];

  return {
    name,
    filename,
    template,
    qualityBarHtml: qualityBody ? (marked.parse(qualityBody) as string) : "",
  };
}

/** Slugs that have an authored lesson body. Used for coverage reporting. */
export function authoredLessonSlugs(): string[] {
  return Object.keys(raw)
    .map((key) => key.match(/\/([^/]+)\/lesson\.md$/)?.[1])
    .filter((value): value is string => Boolean(value))
    .sort();
}
