---
artifact: Product-market hypothesis map
lesson: ST-02
filename: artifacts/ST-02-product-market-hypothesis-map.md
---

# Artifact template · Product-market hypothesis map

The tutor fills this in with the learner, using the learner's judgment and the
learner's evidence. Never invent a number, a quote, or a source. Where a
hypothesis has no evidence behind it, write `<unknown>` in the evidence column
and set confidence to low. An untested hypothesis recorded as untested is the
point of this artifact.

Delete the guidance in parentheses in the finished artifact.

```markdown
# Product-market hypothesis map · <position or audience name>

- **Date:** <YYYY-MM-DD>
- **Diagnosis this serves:** <one line from ST-01, or the binding constraint>
- **Owner:** <who owns this position>
- **Test unit:** <user | workspace | team | account — and why that unit>

## The chain

| # | Hypothesis | Stated so it can be false | Evidence held | Evidence type needed | Confidence | If false, what collapses |
|---|---|---|---|---|---|---|
| 1 | Audience | <population defined by observable behaviour> | <source or `<unknown>`> | <what would test it> | <low / moderate / high> | <consequence> |
| 2 | Problem | <the costly, recurring problem, with a recurrence claim> | <source> | <type> | <level> | <consequence> |
| 3 | Value | <better than the specific alternative they use now> | <source> | <type> | <level> | <consequence> |
| 4 | Acquisition | <reachable repeatably, at a sustainable cost> | <source> | <type> | <level> | <consequence> |
| 5 | Retention | <the job recurs, and they return for it> | <source> | <type> | <level> | <consequence> |
| 6 | Economics | <captured value exceeds cost to serve at the test unit> | <source> | <type> | <level> | <consequence> |

## The current alternative

<What the audience does today instead. Include "does it manually" and "tolerates
it" as real alternatives. The value hypothesis is a comparison, and it is empty
without this.>

## Weakest high-consequence link

- **Hypothesis:** <number and name>
- **Why confidence is low:** <what you do not have>
- **Why consequence is high:** <what else in the chain depends on it>
- **Next test:** <what would be run, by whom, and what result counts as failure>

## Coupled hypotheses

<Which hypotheses cannot be tested separately in this product, and the unit at
which the pair must be tested. Write "none identified" only if you have checked.>

## Population and evidence limits

| Claim | Source | Population | Window | What it cannot establish |
|---|---|---|---|---|
| <claim> | <source> | <who> | <when> | <limit — for example, prevalence> |

## Relation to the diagnosis

<Does this chain support or contradict the ST-01 diagnosis? If it contradicts
it, say which of the two you now believe less, and why. Do not keep both.>

## Revision triggers

| Hypothesis | Observation that would mark it false | Threshold | Who would see it first |
|---|---|---|---|
| <number> | <observable> | <number> | <person or role> |

## Gaps

<Everything marked `<unknown>`, as open questions with who could close them.>
```

## Quality bar

Before saving, check all six exposures are present. Name any that are missing
rather than filling them in yourself:

| Exposure | Present when |
|---|---|
| Choice | The position is stated as one chain for one audience, not a general claim |
| Evidence | Each hypothesis names its evidence, its type, and what that evidence cannot establish |
| Uncertainty | Confidence is per hypothesis, and at least one is honestly low |
| Alternatives | The audience's current alternative is named, including doing nothing |
| Owner | The position owner and the person who would see each failure first are named |
| Revision trigger | Each high-consequence hypothesis has an observable and a threshold |

Tell the learner they can stress-test this with `review-artifact`.
