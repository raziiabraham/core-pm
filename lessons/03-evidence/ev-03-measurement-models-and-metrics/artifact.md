---
artifact: Metric definition
lesson: EV-03
filename: artifacts/EV-03-metric-definition.md
---

# Artifact template · Metric definition

The tutor fills this in with the learner, using the learner's product and the
learner's judgment. Never invent a value, a baseline, a target, or a field name
that the learner has not confirmed exists. Where something is unknown, write
`<unknown>` and carry it into the Gaps section. An unverified slot is where the
next surprise comes from.

Delete the guidance in parentheses in the finished artifact.

```markdown
# Metric definition · <metric name>

- **Date:** <YYYY-MM-DD>
- **Product:** <product>
- **Decision this serves:** <one sentence>
- **Status:** <new definition | replacement for an inherited definition>

## Value this stands in for

- **User outcome:** <the thing that is actually good for the user, in one sentence>
- **Why this metric stands in for it:** <the link, stated so it could be wrong>
- **How the link could break:** <the condition under which the metric rises and the outcome does not>

## The five slots

| Slot | Definition | How it is computed today | Verified? |
|---|---|---|---|
| **Population** | <which entities, with inclusions and exclusions> | <source table or event> | <yes / no / `<unknown>`> |
| **Event** | <the exact recorded action that counts> | <event name and properties> | <yes / no / `<unknown>`> |
| **Window** | <anchor moment, and duration> | <how the anchor is derived> | <yes / no / `<unknown>`> |
| **Aggregation** | <cohort share, rolling rate, per-entity count, median> | <formula> | <yes / no / `<unknown>`> |
| **Unit** | <user | workspace | account | session> | <why this unit, not the other> | <yes / no> |

**Excluded on purpose:** <bots, internal accounts, API-created objects, test
workspaces, re-activated users — list them, because silence here is a decision
too.>

## Unit choice

- **Chosen unit:** <unit>
- **Defence against the alternative:** <why the other unit answers a different question>
- **What the other unit would show:** <if known, or `<unknown>`>

## Gaming surface

- **Cheapest way to move this number without producing the value:** <the path>
- **Could the team plausibly ship that path?** <yes / no>
- **Counter-metric:** <the number that degrades if the cheap path is taken>
- **Where the counter-metric lives:** <same dashboard, or it does not exist yet>

## Drift surface

(Ways the number moves with no change in user behaviour.)

| Cause of drift | How it would show up | Detectable how |
|---|---|---|
| <acquisition mix shift> | <direction and shape> | <segment or check> |
| <event schema change> | <direction and shape> | <check> |

## History

- **Comparable to the previous series?** <yes | no | partially>
- **If no, why:** <missing fields, missing history, changed anchor>
- **What happens to the old series:** <retired | run in parallel until <date>>
- **Comparisons you are refusing:** <state them, so nobody makes them by accident>

## Position

- **Current reading of the number:** <one sentence>
- **Confidence:** <low | moderate | high> — <why, in one line>
- **Strongest reason this definition is wrong:** <the best argument against it>

## Revision trigger

<The observation that would make you redefine or retire this metric — the value
link breaking, the drift surface firing, the counter-metric diverging. Name the
observable and the threshold.>

## Gaps

<Every slot marked `<unknown>` or unverified, listed as open questions with who
could close them. Carry this list into EV-04.>
```

## Quality bar

Before saving, check all six exposures are present. Name any that are missing
rather than filling them in yourself:

| Exposure | Present when |
|---|---|
| Choice | The decision this metric informs is named, and the unit is chosen deliberately |
| Evidence | All five slots are filled and each is marked verified or unverified |
| Uncertainty | The drift surface is listed, and history comparability is stated honestly |
| Alternatives | The rejected unit and the rejected definition are named with reasons |
| Owner | Someone owns the number and someone owns the instrumentation behind it |
| Revision trigger | A condition that would retire or redefine the metric, with a threshold |

Tell the learner they can stress-test this with `review-artifact`.
