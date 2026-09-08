# CORE / PM Curriculum

CORE / PM is a self-paced, repository-shaped curriculum for practicing product managers. The website is a reader for the curriculum; this repository is the source of truth.

## Scope

- 43 atomic lessons
- 7 phases
- 4 learning paths
- approximately 23 hours for the complete foundation
- one reusable artifact per lesson
- one cumulative Product Decision Case
- browser-local progress; no account required

The curriculum was synthesized from 563 PDFs across nine Reforge programs: Mastering Product Management, Finding Product-Market Fit, User Insights, Data for Product Managers, Experimentation + Testing, Product Strategy, Technical Strategy, Scaling Product Delivery, and Product Leadership.

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

The full lesson manifest, prerequisites, descriptions, durations, artifacts, and learning paths live in [`lib/curriculum.ts`](lib/curriculum.ts). The richer original twelve-lesson field path remains available under the four `session-*` routes.

## Learning paths

- **Complete foundation** — all 43 lessons in dependency order.
- **Decision field path** — 12 applied lessons and one cumulative case.
- **Technical + AI judgment** — 13 lessons for PMs working closely with engineering and AI systems.
- **Product leadership** — 15 lessons for leaders scaling judgment through others.

## Lesson invariant

Every new lesson must have a stable ID, prerequisites, a concise premise, a practical case, a real-product transfer, a shipped artifact, and a check for understanding. Use [`LESSON_TEMPLATE.md`](LESSON_TEMPLATE.md).
