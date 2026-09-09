---
artifact: Commitment brief
lesson: DS-01
filename: artifacts/DS-01-commitment-brief.md
---

# Artifact template · Commitment brief

The tutor fills this in with the learner, using the learner's judgment and the
learner's evidence. Never invent a number, a quote, an estimate, or a source.
Where something is unknown, write `<unknown>` and carry it into the Gaps
section. An estimate that sounds like knowledge is the most expensive thing that
can enter this document.

Delete the guidance in parentheses in the finished artifact.

```markdown
# Commitment brief · <short commitment name>

- **Date:** <YYYY-MM-DD>
- **Product:** <product>
- **Commitment owner:** <person who carries the consequence>
- **Specialist authority:** <who holds the technical judgment this depends on>
- **Horizon:** <the period this commitment covers>

## What is being committed to

<A change to a named population's job, stated as an outcome, not a feature name.
"Automated summaries" is a feature. Say what changes, for whom, and in what
situation.>

## Value conviction

- **Position:** <low | moderate | high>
- **Claim:** <the change you believe this produces, and the mechanism>

| Evidence held | Source | Population | Window | What it cannot establish |
|---|---|---|---|---|
| <claim> | <source> | <who> | <when> | <limit> |

**Strongest reason the value claim is wrong:** <the best argument against your
own position, stated as someone who believes it would state it>

## Effort conviction

- **Position:** <low | moderate | high>
- **What is known:** <the parts of the work whose shape you understand>
- **What is not known:** <the parts whose shape you do not understand — kind of
  unknown, not just duration>

| Dependency | Type (sequence / capability / knowledge) | Owned by | Status | Risk if it slips |
|---|---|---|---|---|
| <dependency> | <type> | <team or person> | <live / in design / planned / unknown> | <consequence> |

## Position in the conviction table

<Value strong or weak, effort strong or weak, and therefore which move this is:
commit, retire the effort unknown, buy value evidence, or do not commit. State
the square before you state the action.>

## What this displaces

| Displaced work | Treatment (deferred / reduced to minimum guard / dropped) | Who is told | Consequence of the displacement |
|---|---|---|---|
| <work> | <treatment> | <person or team> | <what accumulates or is lost> |

**Capacity withdrawn:** <who can no longer say yes, and to what>

**Options withdrawn:** <what becomes expensive to change once this starts>

## Forced-work check

<If this work is not a bet — a dependency, a legal requirement, a security
exposure — say so here and replace the value claim with consequence exposure
over time: what accumulates if you do not act, and how fast. Do not invent a
user story for forced work.>

## Exit condition

<The observation and threshold that would make you stop, shrink, or re-open this
commitment. Name the observable and the number. "If it is not working we will
reassess" is not an exit condition.>

- **Who may invoke it:** <person>
- **Earliest date you could learn you were wrong:** <date, and how>

## Not committed

<What this brief deliberately leaves open, so that no one infers more commitment
than you intend — scope beyond the first horizon, populations not covered,
capabilities assumed but not promised.>

## Gaps

<Everything marked `<unknown>` above, listed as open questions with who could
close them and by when.>
```

## Quality bar

Before saving, check all six exposures are present. Name any that are missing
rather than filling them in yourself:

| Exposure | Present when |
|---|---|
| Choice | The commitment is stated as an outcome for a population, and the conviction square is named before the action |
| Evidence | Value and effort conviction each carry sources, limits, and at least one named unknown |
| Uncertainty | Both convictions have a stated level, and the strongest counter-argument is written |
| Alternatives | Displaced work is named item by item, with its treatment and who was told |
| Owner | Commitment owner, specialist authority, and the person who may invoke the exit are distinguished |
| Revision trigger | The exit condition names an observable and a threshold, and the earliest date of disconfirmation |

Tell the learner they can stress-test this with `review-artifact`.
