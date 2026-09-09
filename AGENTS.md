# AGENTS.md

Operating manual for contributors and AI agents working on this repository. Read
it before opening a pull request.

CORE / PM is a curriculum, not an application. The lessons are the product. The
website is a reader. The rules below exist to keep 43 lessons coherent as they
change.

---

## What this repo is

A product-management curriculum designed to be **taught by a coding agent in a
terminal**. A learner runs `npx skills add raziiabraham/core-pm --global`, then
`/start-learning`, and the agent becomes their tutor: placement, a personalized
route, interactive lessons, and a decision artifact written to disk after each
one.

The learner does not need to clone this repo or run the website. Every skill
falls back to fetching content over `raw.githubusercontent.com`.

## Layout

```text
skills/                     # the six agent skills — SOURCE OF TRUTH
  <skill-name>/SKILL.md
  <skill-name>/references/  # optional, copied on install
.claude/skills/             # GENERATED mirror — never edit by hand
lessons/
  manifest.json             # GENERATED index every skill reads
  AUTHORING.md              # the lesson contract
  noted/case.md             # the shared product case
  <NN-phase-slug>/
    <lesson-slug>/
      lesson.md             # six fixed sections
      checks.json           # 5 reasoning questions
      artifact.md           # the artifact template
lib/
  curriculum.ts             # 43 lessons, prerequisites, routes — canonical metadata
  lesson-content.ts         # renders lessons/**/lesson.md for the website
app/                        # the web reader (Next.js App Router via vinext)
tests/rendered-html.test.mjs
scripts/
  build-lesson-manifest.mjs
  sync-claude-skills.mjs
  validate-lessons.mjs
```

Lesson prose is authored once. The `learn` skill reads `lesson.md` directly, and
the website renders the same file through `lib/lesson-content.ts`, so the two
surfaces can never drift.

## Generated files — never edit by hand

| File | Regenerate with |
|---|---|
| `lessons/manifest.json` | `npm run build:manifest` |
| `.claude/skills/**` | `npm run sync:skills` |

Both are committed so that consumers who clone the repo get a working state
without running anything. If you change `lib/curriculum.ts` or anything under
`skills/`, regenerate and commit the result in the same change.

## Hard rules

1. **Lesson IDs are permanent.** `PF-01` is a public identifier. It appears in
   learners' `PM-LEARNING.md` files, in their artifact filenames, and in the
   routes. Never renumber, never reuse a retired ID.
2. **Prerequisites must stay acyclic.** A lesson may only depend on lessons that
   precede it in canonical phase order (PF, PJ, EV, ST, TJ, DS, LD).
3. **A lesson changed is a lesson re-checked.** If you change `lesson.md`, verify
   `checks.json` still tests what the lesson now teaches.
4. **Every model needs a boundary.** A `## Concept` section without a
   `### Boundary` subsection that states where the model stops being true is
   incomplete, not concise.
5. **Never invent evidence about Noted.** If a lesson needs a fact the case does
   not contain, either add it to `lessons/noted/case.md` deliberately, or work
   without it. Contradicting the case across lessons breaks the comparison the
   case exists to enable.
   `lessons/noted/case.md` is what the skills read; `app/noted/page.tsx` is the
   designed web version of the same case. They are two hand-maintained copies,
   so a change to one needs the matching change to the other. If the numbers
   ever disagree, `case.md` wins.
6. **Never cite external training programs or proprietary course material.**
   This curriculum carries its own material and stands on its own reasoning.
   The single exception is the author's own book, *PM Is Now Another Member of
   Technical Staff*, which may be named **only as a boundary marker** — where a
   lesson's judgment question becomes a technical skill this course does not
   teach. Once per lesson, in the `### Boundary` subsection, never as a
   dependency. The division of labour is fixed: **the book teaches you to
   operate the machine; the course teaches what you may conclude and what you
   must refuse.** A lesson that needs the book to be completable is a broken
   lesson.
7. **One lesson per commit.** A pull request touching six lessons has six
   commits. Commit subjects: `feat(PF-02): <short description>`.
8. **Mermaid only** for diagrams. No ASCII or Unicode box drawing — the
   validator rejects it. Diagrams live in ` ```mermaid ` fences inside
   `lesson.md`; the website renders them client-side and the agent tutor reads
   the source and can walk a learner through it node by node.
9. **Every lesson carries at least three visuals**: a mechanism diagram, a
   `<div class="compare">` worked example, and a structural table. See the
   Visuals section of `lessons/AUTHORING.md`. A visual the prose never points
   at is decoration; cut it.
10. **Every fenced code block gets a language tag** — `text`, `json`, `bash`,
    `markdown`, `mermaid`, `typescript`.

## Writing lessons

Read [`lessons/AUTHORING.md`](lessons/AUTHORING.md). It is the contract, and its
structural rules are enforced:

```bash
npm run validate:lessons
```

That runs as part of `npm test`. It checks frontmatter, the six-section order,
the presence of a `### Boundary`, that Carry forward names the next lesson, that
the lesson carries a Mermaid diagram, a comparison, and a table, and that
`checks.json` has five four-option questions whose answers do not cluster on one
or two positions. It cannot check whether the prose is any good, or whether a
diagram earns its place — that is still review.

The reference implementation is
`lessons/01-problem-framing/pf-01-decision-before-method/`. Match its structure
and its depth. A lesson that is structurally correct but thin is not done.

The check questions are where most contributions are weakest. A question that
can be answered by matching a definition to its label has failed. Every
distractor must be something a competent PM would actually choose.

## Writing skills

Skills are prompts, and they are read by several different agents. Constraints:

- Frontmatter carries `name` and `description` only, plus optional `license` and
  `metadata`. `version` and `tags` belong under `metadata` — they are not
  top-level spec fields, and hosts vary in what they tolerate.
- `name`: lowercase, hyphens, 64 characters maximum.
- `description`: one logical line, 1024 characters maximum. State what the skill
  does **and** when to use it, and include realistic trigger phrases.
- Every skill that suggests a next command must carry the **host invocation
  contract** — Claude Code uses `/skill-name`, Codex uses the bare name, other
  hosts use natural language. Never present a slash command as universal.
- Any skill that holds answers must carry an **answer-isolation contract**.
  Placement and check answers must never appear before the learner responds,
  including inside reply-format examples.

## House style

Plain, direct English. Short sentences, one idea each. Second person for the
learner. No idioms, no filler, no motivational language. Tables for enumerable
facts, prose for reasoning.

The tone is a demanding colleague, not a cheerleader and not a textbook.

## Before opening a pull request

```bash
npm run build:manifest
npm run sync:skills
npm test
```

When changing a lesson, preserve its stable ID, prerequisites, artifact
contract, and its role in every route that includes it.
