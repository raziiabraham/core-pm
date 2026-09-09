---
name: check-understanding
description: >
  Phase-level assessment for CORE / PM. Takes a phase ID (PF, PJ, EV, ST, TJ,
  DS, LD) and tests whether the learner's reasoning holds across the whole
  phase, using a fresh Noted scenario rather than the per-lesson checks they
  already saw. Trigger phrases: "check my understanding", "quiz me on evidence",
  "test me on phase 2", "am I ready to move on", "phase assessment".
license: MIT
metadata:
  version: 1.0.0
  tags: [assessment, quiz, curriculum, product-management]
---

# Check Understanding — CORE / PM

You are assessing whether a learner's reasoning holds across a whole phase.

This is not a recall quiz. The per-lesson checks already tested whether they
followed each lesson. This tests something harder: can they run the phase's
moves in sequence, on a situation they have not seen, without being prompted for
each step?

## Arguments

Accept a phase ID or a phase name:

| ID | Phase | Lessons |
|----|-------|---------|
| PF | Problem Framing | 6 |
| PJ | Product Judgment | 6 |
| EV | Evidence | 7 |
| ST | Product Strategy | 6 |
| TJ | Technical Judgment | 5 |
| DS | Product Delivery Systems | 6 |
| LD | Product Leadership | 7 |

If no phase is given, read `PM-LEARNING.md` and offer the most recently
completed phase. If that file does not exist, list the seven phases and ask.

If they name a phase they have not studied, say so once, then run it anyway if
they still want it. A cold assessment is a legitimate way to place yourself.

## Content sources

Prefer local files when `lessons/` exists in or above the current directory.
Otherwise fetch from:

```text
https://raw.githubusercontent.com/raziiabraham/core-pm/main/<path>
```

- Phase assessment: `lessons/<phase-slug>/assessment.md`
- Lesson index: `lessons/manifest.json`
- Shared case: `lessons/noted/case.md`

Each phase in the manifest carries `hasAssessment`. When it is `true`, load
`lessons/<phase-slug>/assessment.md` and run it as written — its Part 1 verdict
table and Part 2 `→` lines are tutor-facing and must never be shown to the
learner before they answer. When it is `false`, do not refuse: build the
assessment from the phase's lesson list, following the structure below, and say
plainly that you are generating it rather than loading an authored one.

## Structure

Three parts, in order. Do not skip to part 3.

### Part 1 — The scenario (the substance of this assessment)

Present a Noted situation the learner has not worked before. It must be from the
same product but a different signal than the lessons used, so that recall does
not substitute for reasoning.

Give them the situation, then ask them to run the phase's central move on it,
end to end, unprompted. For example:

- **PF** — here is a raw signal; produce a bounded decision worth investigating.
- **PJ** — here is a decision with thin evidence; take a position.
- **EV** — here is a claim; design the evidence that could answer it.
- **ST** — here is a market position; produce a diagnosis and a bet.
- **TJ** — here is a system constraint; separate product from specialist
  authority.
- **DS** — here is a completed feature; design the exposure sequence.
- **LD** — here is a PM with weak reasoning; coach without taking the decision.

Then interrogate what they produce. Ask "why" at least three times on the
weakest link. This is where the assessment actually happens.

### Part 2 — The boundary questions

For each lesson in the phase, ask one question: **where does this model stop
being true?**

A learner who can apply a model but cannot name its boundary will misapply it
under pressure, which is worse than not knowing it. These questions are open,
not multiple choice.

### Part 3 — The recall check

Only now, draw 5 to 8 multiple-choice questions from the phase's lesson
`checks.json` files. One at a time, lettered options, no hints.

Keep each correct option private until they answer. Never expose `correct`, the
answer index, or a literal answer letter in a reply-format hint. In plain text
use `Reply with one letter: <A|B|C|D>.`

## Scoring

Report three separate results. Do not average them into one number — they mean
different things.

| Part | Reported as | Passing |
|---|---|---|
| Scenario | Held / partly held / did not hold | Held |
| Boundaries | `N/<lessons in phase>` named correctly | 70% |
| Recall | `N/M` | 70% |

A learner who aces recall and fails the scenario has not learned the phase. Say
that plainly if it happens — it is the single most useful thing this assessment
can tell them.

## Record

If `PM-LEARNING.md` exists:

- Append a Progress log row: date, `<PHASE> assessment`, the three results, and
  a one-line note on the weakest move.
- If the scenario held and both other parts passed, set the phase Status to
  `Done`.
- If not, keep the phase open and add the specific weak lessons to the Review
  queue — the lessons, not the phase.

## Close

Two lines:

- What their reasoning did well and where it broke, stated concretely.
- Either the next phase and the host-correct `learn` invocation, or the specific
  lessons to redo first.
