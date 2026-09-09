---
name: find-your-level
description: >
  Judgment placement for CORE / PM. 14 scenarios, two per phase, scored on
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

There are 14 scenarios: two for each of the seven phases.

**Every scenario has two questions, and a point needs both.**

1. **What do you do?** Four options, A to D.
2. **Why?** Five reasons, i to v.

The learner picks a letter, then picks a reason. A point is earned only when the
reason is the one that actually justifies the letter they chose. No writing is
required at any point.

This is what makes the placement hard to guess. A letter on its own is
guessable — four options, and most scenarios credit two of them. The pair is
not. A learner guessing both tiers scores about 1 or 2 out of 14. A learner who
picks the right letter for the wrong reason scores zero on that scenario, and
that is the most common way a guess dies here.

Two things you must do, or the second tier stops working:

- **Shuffle both lists every time you ask a scenario.** Re-letter the options A
  to D and re-number the reasons i to v after shuffling, and write the mapping
  down for yourself before you show anything, so you can score it. Never use the
  order printed in `references/placement.md`, and do not repeat an order between
  scenarios or between learners.
- **Show the reasons only after the letter is in.** If the learner sees both
  lists together, they can work backwards from the reason that sounds best to
  the letter it fits, which is the thing being tested.

Every scenario uses the shared Noted case. The learner needs no knowledge of
their own product to answer.

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
- Do not give a verdict after each answer. Hold all 14 verdicts until the end.
  Early feedback teaches them the pattern for later scenarios.
- The two scenarios in a phase are related. Never say how the first one went
  before they answer the second.
- Never show the reason list before the letter is in, and never let them change
  the letter after seeing the reasons.
- Never reveal that the lists were shuffled, or what the printed order was.
- Never say that a scenario has more than one credited pair, and never say that
  one reason justifies nothing. Both facts are for you.
- Never hint that a reason belongs to a particular letter.

## The Noted case in one paragraph

Give this once, before scenario 1. Do not repeat it:

> Noted is an AI-assisted document product. Four signals are live at once:
> activation fell 11% in six weeks; three enterprise customers asked for
> automatic meeting summaries; P95 response time for large workspaces rose from
> 1.9s to 2.5s; and a platform dependency loses support in 10 weeks. P95 is the
> response time that 95% of requests come in under. The evidence is
> intentionally incomplete. Every question below sits inside this situation.

## Delivery

1. Say what this is: 14 scenarios, about 20 minutes, nothing to prepare and
   nothing to write. Each one asks what you would do, then why. Say that both
   answers count, because the reason is where the judgment shows. A low score
   costs them nothing — it only changes where they start.
2. Ask all 14 in phase order, PF through LD, one at a time. Inside a phase, ask
   the first scenario before the second.
3. For each scenario: give the situation, show the four options in a shuffled
   order, and take a letter. Then, and only then, show the five reasons in a
   shuffled order and take a number.
4. If the environment has a structured question/option tool, use it for both
   steps. Otherwise present the lists as plain text and wait between them.
5. Accept a letter, or wording that clearly matches exactly one option. If it is
   genuinely ambiguous between two, ask them to pick. Do not guess for them.
6. If they volunteer their own reasoning as well, keep it. It does not change
   the score, and it is the most useful thing in the final report.
7. Do not comment on either answer before moving on. "Noted." is enough.

## Scoring

One point per scenario, no partial credit. The total is out of 14.

A point needs a **credited pair** from `references/placement.md`: one of that
scenario's credited letters, together with the reason that justifies that
letter. Three outcomes:

- Credited letter, matching reason → **1 point**.
- Credited letter, wrong reason → **0**, recorded as `right move, wrong
  reason`. This distinction matters in the report and in the routing below.
- Wrong letter → **0**, whatever reason they chose.

Do not award anything for a reason that justifies the *other* credited letter.
If they pick letter A and the reason that belongs to letter C, they have not
shown the judgment either answer requires.

Per-phase status comes from that phase's own two scenarios, never from the
total:

| That phase's two scenarios | Status for that phase |
|---|---|
| Both points earned | `Skip` — except PF, which becomes `Review` |
| One point, and the miss was `right move, wrong reason` | `Review` |
| One point, and the miss was a wrong letter | `Do` |
| No points, but both misses were `right move, wrong reason` | `Review` |
| Otherwise | `Do` |

`Skip` is reachable, and it should be. Two credited pairs in a phase means the
learner made the move and could say why, twice, on scenarios they had not seen.
That is the evidence the phase is asking for.

`right move, wrong reason` is the interesting middle. It means they have the
instinct and not yet the account of it, which is exactly what a `Review` pass
is for.

Problem Framing is special. **PF is never `Skip`.** Its six lessons are the
shared vocabulary every later phase uses, so skipping them breaks later
lessons. A perfect PF result makes it `Review`, which is a fast pass.

The entry point is the **first** phase in order (PF, PJ, EV, ST, TJ, DS, LD)
whose status is `Do`. If no phase is `Do`, the entry point is PF and the route
is a fast pass through whatever is not `Skip`. Say that plainly.

Total score bands, used only for the summary line:

| Score | Read it as |
|---|---|
| 0–4 | The rituals are familiar. The reasoning underneath is not. Full foundation. |
| 5–8 | Good instincts, with gaps that show up under pressure. Foundation, with fast passes. |
| 9–12 | Strong judgment, uneven across domains. Target the `Do` phases. |
| 13–14 | Genuinely senior. Expect a short route, and use `check-understanding` to confirm a phase before skipping it. |

Guessing both tiers scores about 1 or 2 out of 14, so treat a high score as
real. Never present the band as a verdict on them as a PM. It is a routing
decision.

## Step 5 — Report

Give the learner, in this order:

1. Their score as `N/14`.
2. One row per phase: the phase, both scenarios, whether each earned the point,
   and the resulting status. Mark any `right move, wrong reason` as exactly
   that — it is the most useful line in the table.
3. For each scenario that earned no point: the credited pair, and the one-line
   note on why the other options fail, from `references/placement.md`. This is
   the only moment when answers become visible.
4. Where a scenario had two credited pairs, say so now. It shows them the test
   was not hunting for one memorised move.
5. Their entry point, and one sentence on why.

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
