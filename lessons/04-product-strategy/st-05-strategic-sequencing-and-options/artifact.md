---
artifact: Strategic sequence
lesson: ST-05
filename: artifacts/ST-05-strategic-sequence.md
---

# Artifact template · Strategic sequence

The tutor fills this in with the learner, using the learner's judgment, dates,
and estimates. Never invent a duration or a deadline. If an estimate does not
exist, write `<unknown>` and treat the latest-start arithmetic as unresolved —
a sequence built on an invented estimate will fail exactly where it matters.

Delete the guidance in parentheses in the finished artifact.

```markdown
# Strategic sequence · <cycle or period>

- **Date:** <YYYY-MM-DD>
- **Portfolio this sequences:** <reference to the ST-04 artifact>
- **Owner:** <who can change the order>
- **Delivery lead applying it:** <who holds the order day to day>

## Decision-relevant uncertainties

| Uncertainty | If it resolves one way | If it resolves the other way | Decision-relevant? |
|---|---|---|---|
| <uncertainty> | <action> | <different action> | <yes / no — no means both actions are the same> |

<Keep only the ones marked yes. Rank them by how much of the strategy depends on
the answer, not by how unsure you feel.>

## Reversibility of each step

| Step | Reversible / costly to reverse / one-way | What it forecloses |
|---|---|---|
| <step> | <class> | <what becomes unavailable afterwards> |

## Dated exposures

| Exposure | Hard date | Pessimistic estimate | Reaction time | Latest start | Status |
|---|---|---|---|---|---|
| <exposure> | <date> | <duration> | <duration> | <date> | <ahead / behind> |

<If any latest start is already behind you, say so here and state what gets cut.
Do not carry a plan that the arithmetic has already ruled out.>

## The sequence

| # | Step | Why here | What you will know at the end | Which later step that could change | Observation lag |
|---|---|---|---|---|---|
| 1 | <step> | <retires uncertainty X / dated exposure / dependency> | <what becomes known> | <step number> | <when the result is visible> |
| 2 | <step> | <reason> | <knowledge> | <step> | <lag> |

<If a step's observation lag lands after the next commitment starts, either move
it or remove the learning claim from it.>

## Options held open

| Option | Carrying cost per week | Condition that would make you exercise it | Expiry |
|---|---|---|---|
| <option> | <cost — abstraction, delay, split focus> | <specific condition> | <when the option stops existing> |

## What can move and what cannot

- **Can move without damage:** <steps>
- **Cannot move:** <steps, and the reason — dependency, dated exposure, or
  foreclosure risk>

## Uncertainty

- **Weakest part of this sequence:** <where you are least confident>
- **What a bad outcome would tell you:** <whether it would indicate a bad bet or
  a bad order>

## Revision trigger

<The observation and threshold that would force a re-sequence mid-cycle, and who
would see it first.>

## Gaps

<Everything marked `<unknown>`, as open questions with who could close them.>
```

## Quality bar

Before saving, check all six exposures are present. Name any that are missing
rather than filling them in yourself:

| Exposure | Present when |
|---|---|
| Choice | The order is stated as a decision, with a reason per step |
| Evidence | Estimates and dates are sourced, and unknown ones are marked unknown |
| Uncertainty | Uncertainties are filtered by decision relevance, not by size |
| Alternatives | Foreclosed paths and held-open options are both named, with costs |
| Owner | The person who can change the order and the person holding it are distinguished |
| Revision trigger | An observable and a threshold that would force a re-sequence |

Tell the learner they can stress-test this with `review-artifact`.
