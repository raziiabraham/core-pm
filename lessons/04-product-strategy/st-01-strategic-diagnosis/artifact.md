---
artifact: Strategic diagnosis
lesson: ST-01
filename: artifacts/ST-01-strategic-diagnosis.md
---

# Artifact template · Strategic diagnosis

The tutor fills this in with the learner, using the learner's judgment and the
learner's evidence. Never invent a number, a quote, or a source. Where something
is unknown, write `<unknown>` and carry it into the Gaps section. A diagnosis
built on a fabricated mechanism is worse than no diagnosis, because it will be
quoted later.

Delete the guidance in parentheses in the finished artifact.

```markdown
# Strategic diagnosis · <product or product area>

- **Date:** <YYYY-MM-DD>
- **Status:** <provisional | firm>
- **Author:** <name or role>
- **Decision owner:** <who owns the consequence of acting on this>

## The dynamic

<What is actually happening, stated as a mechanism a reader could disagree with.
Not a metric movement. If a reasonable colleague could not argue against this
sentence, it is an aspiration, not a diagnosis.>

## Candidate constraints considered

| # | Candidate constraint | Population it comes from | If solved tomorrow at no cost, what changes | Verdict |
|---|---|---|---|---|
| 1 | <candidate> | <largest by count> | <effect on the outcome you care about> | <binding / real but not binding> |
| 2 | <candidate> | <loudest / most requested> | <effect> | <verdict> |
| 3 | <candidate> | <where value is captured today> | <effect> | <verdict> |

## The binding constraint

<One sentence. The thing that, if it changed, would change the outcome.>

**Why the rejected candidates are not it:**

- <Candidate #x>: <why it is a real problem that does not decide the outcome>
- <Candidate #y>: <same>

## Consequence of ignoring it

<What continues to happen over the next two quarters if you fund everything
else instead. Be specific about who bears it.>

## Evidence held

| Claim in this diagnosis | Source | Population | Window | What it cannot establish |
|---|---|---|---|---|
| <claim> | <source> | <who> | <when> | <limit> |

## Control

- **Inside our control:** <what this team can act on>
- **Outside our control:** <what belongs to another function, and to whom>
- **If the true constraint is outside our control:** <state it plainly here
  rather than substituting a smaller one>

## Uncertainty

- **Confidence:** <low | moderate | high> — <why, in one line>
- **Strongest argument against this diagnosis:** <the best case for a rejected
  candidate>
- **Population risk:** <which claim rests on an aggregate that has not been
  segmented>

## What this demotes

<Name at least one currently funded activity this diagnosis says to stop, slow,
or cap. A diagnosis that demotes nothing has not chosen anything.>

## Revision trigger

<The observation and threshold that would overturn this diagnosis, and who
could produce it. "We will keep watching" is not a trigger.>

## Gaps

<Everything marked `<unknown>` above, as open questions with who could close
them and what it would take.>
```

## Quality bar

Before saving, check all six exposures are present. Name any that are missing
rather than filling them in yourself:

| Exposure | Present when |
|---|---|
| Choice | One constraint is named as binding, and rejected candidates are named |
| Evidence | Each load-bearing claim has a source, population, window, and limit |
| Uncertainty | Status is provisional or firm, and confidence matches the evidence |
| Alternatives | The rejected candidates are real contenders, not weak options |
| Owner | The decision owner is named, and constraints outside your control are attributed |
| Revision trigger | An observable and a threshold, with a person who could produce it |

Tell the learner they can stress-test this with `review-artifact`.
