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
2. **Why?** Open-ended. One line, in their own words.

The reason is what carries the point. A learner who cannot say why their answer
is right has not shown the thing being placed, however good the letter is.

**If they would rather not write**, the same scenario has five ready-made
reasons they can pick from instead. Offer that the moment they hesitate. It is
a slightly weaker signal than their own sentence, and it scores the same.

That structure is what makes the placement hard to guess. A letter on its own
is guessable — four options, and most scenarios credit two of them. Guessing
the letter *and* landing the reason is not. A learner guessing both tiers
scores about 1 or 2 out of 14, and a right letter with the wrong reason scores
nothing, which is the most common way a guess dies here.

Two things you must do, or the second tier stops working:

- **Shuffle both lists whenever you show them.** Re-letter the options A to D
  and re-number the fallback reasons i to v after shuffling, and write the
  mapping down for yourself first so you can score it. Never use the order
  printed in `references/placement.md`, and do not repeat an order between
  scenarios or between learners.
- **Ask for their own reason before offering the list.** A learner who sees
  five reasons can work backwards from the one that sounds best to the letter
  it fits, which is the thing being tested. Their own sentence first, the list
  only if they pass.

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

1. Say what this is: 14 scenarios, about 20 minutes, nothing to prepare. Each
   one asks what you would do, then why. Say that the reason is what is
   actually scored, and that one line is enough. A low score costs them
   nothing — it only changes where they start.
2. Ask all 14 in phase order, PF through LD, one at a time. Inside a phase, ask
   the first scenario before the second.
3. For each scenario: give the situation, show the four options in a shuffled
   order, and take a letter.
4. **Then ask why, open-ended.** "One line — why that one?" Take whatever they
   write, in their own words. This is the preferred path and you should
   encourage it, because their own sentence tells you far more than a selection
   does.
5. **If they would rather not write**, or reply with nothing, or say "just give
   me the options" — show the five reasons in a shuffled order and let them
   pick a number. Offer this without friction. The point of the placement is
   the reasoning, and a chosen reason still shows some of it.
6. Never show the reason list before their own answer has had a chance. Once
   the list is on screen, do not let them change the letter.
7. If the environment has a structured question/option tool, use it for the
   letter and for the fallback list. The open "why" is always free text.
8. Accept a letter, or wording that clearly matches exactly one option. If it
   is genuinely ambiguous between two, ask them to pick. Do not guess for them.
9. Do not comment on either answer before moving on. "Noted." is enough.

If someone declines both the writing and the list, that scenario scores zero
and you note it. Tell them once, early, that this makes the final score a floor
rather than a measure — then let them proceed however they like. Do not nag.

## Scoring

One point per scenario, no partial credit. The total is out of 14.

A point needs a **credited letter** from `references/placement.md`, together
with a reason that justifies **that** letter. The reason arrives one of two
ways, and both score the same:

- **They wrote it themselves.** Judge their line against the credited reason
  for the letter they picked. It does not have to match the wording, only the
  content: does their sentence carry what that reason carries? Judge on
  substance, never on fluency. A learner writing in short, blunt words who
  names the trade-off has earned it. A learner writing at length who only
  restates the option they chose has not.
- **They picked from the list.** Award the point only for the credited pair —
  that letter with its own reason. A reason that justifies the *other* credited
  letter earns nothing.

Three outcomes:

- Credited letter, reason clears it → **1 point**.
- Credited letter, reason does not → **0**, recorded as `right move, wrong
  reason`. This matters below.
- Wrong letter → **0**, whatever the reason says.

Record for each scenario whether the reason was **written or picked**. It does
not change the score, and it is the most useful thing in the report: producing
the reason unprompted is a stronger signal than recognising it in a list.

Per-phase status comes from that phase's own two scenarios, never from the
total:

| That phase's two scenarios | Status for that phase |
|---|---|
| Both points earned, at least one reason written in their own words | `Skip` — except PF, which becomes `Review` |
| Both points earned, both reasons picked from the list | `Review` |
| One point, and the miss was `right move, wrong reason` | `Review` |
| One point, and the miss was a wrong letter | `Do` |
| No points, but both misses were `right move, wrong reason` | `Review` |
| Otherwise | `Do` |

`Skip` is reachable, and it should be. Two points in a phase means the learner
made the move and could say why, twice, on scenarios they had not seen. Skipping
six lessons asks for slightly more than recognition, which is why at least one
of the two reasons has to be theirs. Two picked reasons is a fast pass, not a
skip.

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

Guessing the letter and the reason together scores about 1 or 2 out of 14, so
treat a high score as real — particularly one built on reasons they wrote. Never present the band as a verdict on them as a PM. It is a routing
decision.

## Step 5 — Report

Give the learner, in this order:

1. Their score as `N/14`.
2. One row per phase: the phase, both scenarios, whether each earned the point,
   whether the reason was written or picked, and the resulting status. Mark any
   `right move, wrong reason` as exactly that — it is the most useful line in
   the table.
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
