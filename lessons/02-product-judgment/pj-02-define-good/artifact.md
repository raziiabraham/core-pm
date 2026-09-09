---
artifact: Definition of good
lesson: PJ-02
filename: artifacts/PJ-02-definition-of-good.md
---

# Artifact template · Definition of good

The tutor fills this in with the learner, using the learner's judgment and the
learner's evidence. Never invent a number, a quote, or a source. Where something
is unknown, write `<unknown>` and carry it into the Gaps section. A named gap is
a finding. A fabricated one is a liability.

The threshold belongs to the learner. If the learner cannot justify a number,
help them either justify it or replace it with a bar-setting moment. Do not
supply the number yourself.

Delete the guidance in parentheses in the finished artifact.

```markdown
# Definition of good · <short name of the work>

- **Date:** <YYYY-MM-DD>
- **Product:** <product>
- **Decision this supports:** <the decision or position this work serves>
- **Owner of the consequence:** <person or role>
- **Reversibility of the work:** <reversible | costly to reverse | one-way>

## The job behind the metric

<In plain words, before any metric: what does the user get to do that they could
not do before, or do reliably that they previously did by accident? If you
cannot write this without naming a metric, the metric is standing in for a job
nobody has stated.>

## Desired change

- **Behaviour or outcome that changes:** <what is different>
- **Population:** <a behaviour-and-context boundary, not a plan tier or a demographic>
- **Horizon:** <over what period this change is expected to appear>

## Quality bar

- **Threshold:** <the amount of change that is enough — a number and a horizon>
- **Why this amount:** <what makes this worth the cost, and not half of it>
- **Why the bar is not higher:** <what a higher bar would cost you>
- **Why the bar is not lower:** <what a lower bar would fail to prove>

<If you genuinely cannot set a threshold in advance, delete the four lines above
and use the block below instead. Do not do both.>

**Bar-setting moment (exploratory work only):**

- **What will be observed:** <the behaviour, not the sentiment>
- **When and with whom:** <count, population, date>
- **What converts the observation into a threshold:** <the rule you will apply>

## Floors

Things that must not get worse for the change to count.

| # | What must not get worse | Population it protects | How it will be checked |
|---|---|---|---|
| 1 | <floor> | <who> | <observable> |
| 2 | <floor — protecting a different population from the one above> | <who> | <observable> |

## Deliberately not measured

<What this definition does not cover, so a reader does not assume more coverage
than you are claiming. Naming this prevents the number being quoted later as if
it settled something it never touched.>

## What the current definition gets wrong

<If you are replacing an inherited definition, say what it counted that should
not count, and what it missed. If you are keeping it, say why it survives.>

## Revision trigger

<The observation and threshold that would make you change this definition of
good — not the work, the definition. Definitions drift silently, and a
definition that is never revisited becomes an inherited one for the next PM.>

## Gaps

<Everything marked `<unknown>` above, listed as open questions with who could
close them.>
```

## Quality bar

Before saving, check all six exposures are present. Name any that are missing
rather than filling them in yourself:

| Exposure | Present when |
|---|---|
| Choice | The threshold is a number and a horizon, not a direction |
| Evidence | The job behind the metric is stated, and the threshold's justification is visible |
| Uncertainty | Either the bar is defended against being higher and lower, or a bar-setting moment is named |
| Alternatives | What the definition deliberately does not measure is stated, and floors name what could be lost |
| Owner | The consequence owner is named, and the population is a behaviour-and-context boundary |
| Revision trigger | A condition that would change the definition itself, not just the work |

Tell the learner they can stress-test this with `review-artifact`.
