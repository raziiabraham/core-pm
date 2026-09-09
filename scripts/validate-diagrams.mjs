// Parses every ```mermaid block in every lesson through the real mermaid
// parser, so a diagram that would only fail once a learner opened the page is
// caught here instead.
//
//   npm run validate:diagrams
//
// mermaid needs a DOM, hence jsdom. This checks that a diagram PARSES; it
// cannot tell you whether the diagram is worth having.
import { readFileSync } from "node:fs";
import { JSDOM } from "jsdom";

const manifest = JSON.parse(readFileSync("lessons/manifest.json", "utf8"));

const dom = new JSDOM("<!doctype html><body></body>", { pretendToBeVisual: true });
globalThis.window = dom.window;
globalThis.document = dom.window.document;
Object.defineProperty(globalThis, "navigator", { value: dom.window.navigator, configurable: true });
globalThis.DOMPurify = { sanitize: (value) => value, addHook: () => {} };

const { default: mermaid } = await import("mermaid");
mermaid.initialize({ startOnLoad: false, securityLevel: "loose" });

const sources = [
  ...manifest.phases.flatMap((phase) => phase.lessons.map((l) => [l.id, `${l.path}/lesson.md`])),
  ["NOTED", "lessons/noted/case.md"],
];

let total = 0;
const failures = [];

for (const [id, path] of sources) {
  const body = readFileSync(path, "utf8");
  const blocks = [...body.matchAll(/```mermaid\n([\s\S]*?)```/g)].map((m) => m[1]);

  for (const [index, block] of blocks.entries()) {
    total += 1;
    try {
      await mermaid.parse(block);
    } catch (error) {
      failures.push(`${id} diagram ${index + 1}: ${String(error.message ?? error).split("\n")[0]}`);
    }
  }
}

if (failures.length > 0) {
  console.error(`${failures.length} of ${total} diagrams failed to parse:\n`);
  for (const failure of failures) console.error(`  ✖ ${failure}`);
  process.exit(1);
}

console.log(`✔ all ${total} Mermaid diagrams parse`);
