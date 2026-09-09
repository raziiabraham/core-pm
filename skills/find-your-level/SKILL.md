---
name: find-your-level
description: >
  Judgment placement for CORE / PM. Seven scenarios, one per phase, scored on
  reasoning rather than recall, mapped to an entry point and a per-phase
  Skip/Review/Do status. Usually run by start-learning, but can be run alone.
  Trigger phrases: "find my level", "placement quiz", "where should I start",
  "test my product judgment", "am I ready for this course".
license: MIT
metadata:
  version: 1.0.0
  tags: [placement, assessment, product-management, diagnostic]
---

# Find Your Level — CORE / PM

You are administering the CORE / PM placement. It measures **judgment**, not
vocabulary. A PM who can define opportunity cost but funds the loudest request
should place into Product Judgment, not out of it.

Seven scenarios, one per phase. All seven use the shared Noted case, so no
knowledge of the learner's own product is required.

## Answer-isolation contract

This contract is not optional. Violating it destroys the placement's value.

- Load `references/placement.md` to get the scenarios. It also contains the
  strongest answer and the rationale for each one.
- **Never reveal the strongest answer, the rationale, or the score band before
  the learner has answered that scenario.**
- Never hint at the answer distribution ("it's usually C", "not the obvious
  one").
- In reply-format instructions, use neutral placeholders only. Write
  `Reply with one letter: <A|B|C|D>.` Never substitute a real option letter into
  that example.
- Ask one scenario at a time. Do not show scenario N+1 until scenario N is
  answered.
- Do not give the verdict after each answer. Hold all seven verdicts until the
  end, so that early feedback does not teach them the pattern for later
  scenarios.

## The Noted case in one paragraph

Give this once, before scenario 1, and do not repeat it:

> Noted is an AI-assisted document product. Four signals are live at once:
> activation fell 11% in six weeks; three enterprise customers requested
> automated meeting summaries; P95 response time rose 34% for large workspaces;
> and a platform dependency loses support in 10 weeks. The evidence is
> intentionally incomplete. Every question below sits inside this situation.

## Delivery

1. Say what this is: seven scenarios, about 10 minutes, no preparation, and
   there is no penalty for a low score — it only changes where they start.
2. Ask the seven scenarios in order, PF through LD, one at a time.
3. If the environment has a structured question/option tool, use it. Otherwise
   present lettered options as plain text and wait.
4. Accept a letter, or a written answer that clearly matches one option. If the
   answer is genuinely ambiguous, ask them to pick a letter — do not guess for
   them.
5. If they explain their reasoning alongside the letter, keep the explanation.
   It is more diagnostic than the letter, and Step 5 uses it.

## Scoring

One point per scenario, no partial credit. Total is out of 7.

Per-phase status comes from that phase's own scenario, not from the total:

| That phase's scenario | Status for that phase |
|---|---|
| Correct, with reasoning that named the right trade-off | `Review` |
| Correct, letter only or thin reasoning | `Do` |
| Incorrect | `Do` |

Problem Framing is special. **PF is never `Skip`.** A correct PF scenario makes
it `Review`; anything else makes it `Do`. Its six lessons are the shared
vocabulary that every later phase uses, and skipping them breaks later lessons.

Entry point is the **first** phase in canonical order (PF, PJ, EV, ST, TJ, DS,
LD) whose status is `Do`. If every phase is `Review`, the entry point is PF and
the route is a fast pass — say so plainly.

Total score bands, for the summary line only:

| Score | Read it as |
|---|---|
| 0–2 | The rituals are familiar, the reasoning underneath is not. Full foundation. |
| 3–4 | Solid instincts with gaps that show up under pressure. Foundation with some fast passes. |
| 5–6 | Strong judgment, uneven across domains. Target the `Do` phases. |
| 7 | Either genuinely senior, or lucky. Suggest `check-understanding` on any phase to confirm. |

Never present the band as a verdict on them as a PM. It is a routing decision.

## Step 5 — Report

Give the learner, in this order:

1. Their score as `N/7`.
2. A short table: phase, their answer, correct or not, resulting status.
3. For each scenario they missed, the strongest answer and the one-line
   rationale from `references/placement.md`. This is the only point at which
   answers become visible.
4. Their entry point and one sentence on why.

## Handing back

If `start-learning` invoked this skill, return the per-phase statuses, the
entry point, and the score. Do not write `PM-LEARNING.md` yourself — that file
belongs to `start-learning`.

If the learner ran this skill directly and no `PM-LEARNING.md` exists, close by
offering `start-learning` to turn the result into a plan, rendered with the
host's invocation syntax:

- Claude Code: `/start-learning`
- Codex: `start-learning`
- Other hosts: `Use start-learning to build my plan.`
