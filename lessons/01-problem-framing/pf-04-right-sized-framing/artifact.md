---
artifact: Framing scale check
lesson: PF-04
filename: artifacts/PF-04-framing-scale-check.md
---

# Artifact template · Framing scale check

The tutor fills this in with the learner, using the learner's judgment and the
learner's evidence. Never invent an estimate, a deadline, or a cost. Never
supply the date the choice must be made — that comes from the learner's risk
window, and a tutor-supplied date is the most dangerous kind of fabrication,
because schedules get believed. Where something is unknown, write `<unknown>`
and carry it into Gaps.

Delete the guidance in parentheses in the finished artifact.

```markdown
# Framing scale check · <short decision name>

- **Date:** <YYYY-MM-DD>
- **Product:** <product>
- **Linked decision:** <the decision from PF-01 this frame serves>

## The next consequential choice

> <One sentence. A choice someone can make, not a topic someone can study. If it
> has no verb a person could perform this month, rewrite it.>

- **Alternatives:** <at least two, both live>
- **Must be decided by:** <date>
- **Where that date comes from:** <the risk window and the work estimate — not a
  sprint boundary, not a planning cadence>

## Sizing

| Axis | Reading | Why |
|---|---|---|
| **Consequence** | <low / high> | <what being wrong costs, and to whom> |
| **Reversibility** | <reversible / costly / one-way> | <what undoing it would take> |

- **Grid cell:** <low+reversible | low+costly | high+reversible | high+one-way>
- **Frame size this implies:** <decide now | frame lightly | frame narrowly and
  watch | frame properly>

(If your chosen frame does not match the cell, say so here and defend the
mismatch. An undefended mismatch is the failure this artifact exists to catch.)

## Where the consequence lands

- **If the answer is wrong, the cost appears here:** <system, team, customer,
  budget line>
- **Is that inside the frame?** <yes | no — then widen until it is>

## Rejected sizings

| Sizing | The version of the frame | Why rejected |
|---|---|---|
| **One size broader** | <a genuinely tempting broad frame — not a strawman> | <what it delays, and which choice it does not change> |
| **One size narrower** | <a genuinely tempting narrow frame> | <what consequence it pushes outside the frame> |

## Removal test

- **Broadest section of my frame:** <section>
- **Can the choice still be made without it?** <yes — deleted | no — why it is
  load-bearing>

## Disagreement in the room

<Where people disagree, classify it: disagreement about facts, about risk
tolerance, or about who absorbs the disruption. These need different responses.
Name what evidence or whose authority would settle it. Do not record a split as
a tie to be broken by seniority.>

## Out of frame, on purpose

<Important questions this frame deliberately excludes, with one line each on why
they cannot be answered before the date above. Naming them here stops them
re-entering as scope later.>

## Widening trigger

<The observation that would make you re-size this frame. State it now, before
the answer is known. If it arrives after an answer you disliked, this line is
what tells you whether the re-framing is honest.>

## Gaps

<Everything marked `<unknown>` above, as open questions, with who could close
each one.>
```

## Quality bar

Before saving, check all six exposures are present. Name any that are missing
rather than filling them in yourself:

| Exposure | Present when |
|---|---|
| Choice | One dated choice with live alternatives, phrased as a choice not a topic |
| Evidence | The date is derived from a stated risk window and estimate, not a cadence |
| Uncertainty | Wide estimates are shown as ranges, and their effect on the date is stated |
| Alternatives | Both a broader and a narrower framing are written and are genuinely tempting |
| Owner | The person who absorbs the consequence is named, and disagreement is classified rather than escalated |
| Revision trigger | A widening condition is committed to before the answer is known |

Tell the learner they can stress-test this with `review-artifact`.
