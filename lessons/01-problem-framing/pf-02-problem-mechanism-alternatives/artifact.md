---
artifact: Problem mechanism map
lesson: PF-02
filename: artifacts/PF-02-problem-mechanism-map.md
---

# Artifact template · Problem mechanism map

The tutor fills this in with the learner, using the learner's judgment and the
learner's evidence. Never invent a number, a log line, a quote, or a technical
detail about the learner's system. Where something is unknown, write `<unknown>`
and carry it into Gaps. A mechanism written in convincing technical vocabulary is
still a guess, and it will be quoted back as a fact.

Delete the guidance in parentheses in the finished artifact.

```markdown
# Problem mechanism map · <short problem name>

- **Date:** <YYYY-MM-DD>
- **Product:** <product>
- **Linked decision:** <the decision from PF-01 this map serves>
- **Author:** <you>

## Problem

<What is happening, to whom, and why it matters. No "because". If the sentence
contains a cause, split it and move the cause into the mechanism table.>

- **Measured / heard:** <the raw observation>
- **Affected population:** <who, defined by behaviour and context>
- **Why it matters:** <the consequence, not the inconvenience>

## Candidate mechanisms

(At least three. One must locate the cause outside the code you own — in the
data, the measurement, or the mix of people arriving. One must be a mechanism
you would find inconvenient. If two rows share the assumption that matters,
they are one mechanism; replace one of them.)

| # | Mechanism (actors and steps) | Population it would affect | Side prediction to check | What would rule it out | Cost to check |
|---|---|---|---|---|---|
| 1 | <chain of events> | <who> | <something else that must be true> | <observation> | <hours / days> |
| 2 | <chain of events> | <who> | <observation> | <observation> | <hours / days> |
| 3 | <the inconvenient one> | <who> | <observation> | <observation> | <hours / days> |

## Shared assumption check

- **Assumption mechanisms 1 and 2 share:** <name it>
- **Does any mechanism survive if that assumption is false?** <yes: which | no —
  then the set does not compete and needs another entry>

## Evidence already in hand

| Fact | What it favours | What it damages | Limit |
|---|---|---|---|
| <fact, including absences such as a silent support queue> | <mechanism #> | <mechanism #> | <what it cannot establish> |

## Interventions, held separately

(Written here so nobody mistakes them for the problem. Do not commit to one yet.)

| Mechanism # | Intervention that would break the chain | Reversible? | Rough cost |
|---|---|---|---|
| <#> | <change> | <yes / costly / one-way> | <estimate> |

## Position

- **Mechanism I would investigate first:** <#>
- **Why this one first:** <expected information per unit of cost — not
  familiarity, and not whose team owns it>
- **What would make me abandon it:** <the specific observation>
- **Confidence:** <low | moderate | high> — <one line, matched to evidence held>

## Cheap-action check

<Is there an action that is cheap, fast, reversible, and helpful under every
mechanism above? If yes, name it and say whether you are taking it now. If you
take it, state plainly that it confirms no mechanism.>

## Gaps

<Everything marked `<unknown>` above, as open questions, with who could close
each one and roughly how long it would take.>
```

## Quality bar

Before saving, check all six exposures are present. Name any that are missing
rather than filling them in yourself:

| Exposure | Present when |
|---|---|
| Choice | The linked decision is named, and interventions are kept separate from the problem |
| Evidence | Every fact row has a limit, and absences are treated as evidence too |
| Uncertainty | Confidence is stated, and the abandon condition is an observation, not a feeling |
| Alternatives | Three mechanisms that do not share the assumption that matters, one of them inconvenient |
| Owner | The author is named, and any mechanism requiring specialist judgment says whose |
| Revision trigger | Each mechanism carries a side prediction and a ruling-out observation |

Tell the learner they can stress-test this with `review-artifact`.
