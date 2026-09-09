# CORE / PM Curriculum

CORE / PM is a self-paced, repository-shaped curriculum for practicing product managers. It is designed to be taught by a coding agent in your terminal. The website is a reader for the same curriculum; this repository is the source of truth.

Everything is open. There is no gate, no password, and no account.

## How to take it

```bash
npx skills add raziiabraham/core-pm --global
cd ~/my-product   # or wherever your course should live
```

`--global` installs the skills for every session. `/start-learning` then writes `PM-LEARNING.md` and `artifacts/` into whatever directory you run it in, so run it somewhere durable — your own product repo is the best choice, and never a temporary scratch workspace.

Then `/start-learning` in Claude Code, or `start-learning` in Codex, or *"Use start-learning to begin the course"* in any other agent that reads `SKILL.md`.

Six skills carry the course:

| Skill | What it does |
|---|---|
| `start-learning` | Interview, judgment placement, writes your `PM-LEARNING.md` plan |
| `learn` | Teaches one lesson interactively and ships its artifact |
| `find-your-level` | 14 scenarios, two per phase, scored on reasoning |
| `check-understanding` | Phase assessment on an unseen case |
| `review-artifact` | Stress-tests any decision document against the standard |
| `course-guide` | Routes a real problem to the lesson that addresses it |

Progress lives in `PM-LEARNING.md` in your working directory. Artifacts land in `artifacts/`. Neither is stored anywhere but your own machine.

## Scope

- 43 atomic lessons
- 7 phases
- 4 learning paths
- approximately 22 hours for the complete foundation
- one reusable artifact per lesson
- one cumulative Product Decision Case
- no account, no gate, no sign-up

The curriculum covers nine domains of product work: product craft, product-market fit, user insight, data, experimentation, strategy, technical strategy, delivery, and leadership. It reorganizes them around one cumulative act of product judgment rather than around activities.

## Use every lesson the same way

1. **Problem** — recognize the costly failure mode.
2. **Concept** — learn a durable decision model and its boundary.
3. **Build** — practice the move on the shared Noted case.
4. **Use** — transfer it to one live product decision.
5. **Ship** — keep a reusable decision artifact.
6. **Check** — test whether the reasoning survives scrutiny.

## Curriculum

| Phase | Lessons | Promise |
|---|---:|---|
| 01 · Problem Framing | PF-01–PF-06 | Turn noise, requests, and symptoms into a bounded decision worth investigating. |
| 02 · Product Judgment | PJ-01–PJ-06 | Take a position without manufacturing certainty. |
| 03 · Evidence | EV-01–EV-07 | Choose evidence that can answer the claim and update belief honestly. |
| 04 · Product Strategy | ST-01–ST-06 | Convert evidence into a coherent choice about how the product will win. |
| 05 · Technical Judgment | TJ-01–TJ-05 | Reason about systems and AI without pretending to own specialist expertise. |
| 06 · Product Delivery Systems | DS-01–DS-06 | Carry intent through commitment, delivery, exposure, and learning. |
| 07 · Product Leadership | LD-01–LD-07 | Create direction, autonomy, and accountability beyond one PM. |

The full lesson manifest, prerequisites, descriptions, durations, artifacts, and learning paths live in [`lib/curriculum.ts`](lib/curriculum.ts).

## Learning paths

- **Complete foundation** — all 43 lessons in dependency order.
- **Decision field path** — 12 applied lessons and one cumulative case.
- **Technical + AI judgment** — 13 lessons for PMs working closely with engineering and AI systems.
- **Product leadership** — 15 lessons for leaders scaling judgment through others.

## Lesson invariant

Every new lesson must have a stable ID, prerequisites, a concise premise, a practical case, a real-product transfer, a shipped artifact, and a check for understanding. Use [`LESSON_TEMPLATE.md`](LESSON_TEMPLATE.md).
