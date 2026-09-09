---
artifact: Decision brief
lesson: PF-01
filename: artifacts/PF-01-decision-brief.md
---

# Artifact template · Decision brief

The tutor fills this in with the learner, using the learner's judgment and the
learner's evidence. Never invent a number, a quote, or a source. Where something
is unknown, write `<unknown>` and carry it into the Gaps section — a named gap
is a finding, and a fabricated one is a liability.

Delete the guidance in parentheses in the finished artifact.

```markdown
# Decision brief · <short decision name>

- **Date:** <YYYY-MM-DD>
- **Product:** <product>
- **Owner of the consequence:** <person or role>
- **Specialist authority:** <who holds expertise this decision depends on>

## Observation

<What was measured or heard. No cause, no interpretation, no adjectives that
imply a mechanism. If you cannot state it without a cause, you have not
separated the layers yet.>

## The decision

<The specific choice this evidence could change, stated as a choice.>

**Alternatives on the table:**

1. <option>
2. <option>
3. <option — including "no product change yet" where that is real>

## Boundary

- **Population:** <which users, defined by behaviour and context, not demographics>
- **Horizon:** <over what period this decision holds>
- **Consequence if wrong:** <what it costs, and whether it is recoverable>
- **Reversibility:** <reversible | costly to reverse | one-way>

## Competing interpretations

| # | Proposed mechanism | What would support it | What would rule it out |
|---|---|---|---|
| 1 | <mechanism> | <observation> | <observation> |
| 2 | <a mechanism that does NOT share the first one's assumption> | <observation> | <observation> |

## Discriminating findings

<Two plausible findings that would lead to different actions. If both findings
lead to the same action, this decision does not need evidence — it needs a
choice.>

- If we find <A>, we will <action>.
- If we find <B>, we will <different action>.

## Evidence held today

| Claim | Source | Population | Window | What it cannot establish |
|---|---|---|---|---|
| <claim> | <source> | <who> | <when> | <limit> |

## Uncertainty

- **Current position:** <your recommendation in one sentence>
- **Confidence:** <low | moderate | high> — <why, in one line>
- **Strongest reason this is wrong:** <the best argument against your own position>

## Not deciding yet

<What this brief deliberately leaves uncommitted, so that a reader does not
infer more commitment than you intend.>

## Revision trigger

<The observation and threshold that would make you revisit this. "We will
monitor and iterate" is not a trigger. Name the observable and the number.>

## Gaps

<Everything marked `<unknown>` above, listed as open questions with who could
close them.>
```

## Quality bar

Before saving, check all six exposures are present. Name any that are missing
rather than filling them in yourself:

| Exposure | Present when |
|---|---|
| Choice | One decision is stated as a decision, with live alternatives |
| Evidence | Each load-bearing claim has a source, population, window, and limit |
| Uncertainty | Confidence is stated and matched to the evidence held |
| Alternatives | The displaced option is named, and it is not a strawman |
| Owner | Consequence owner and specialist authority are distinguished |
| Revision trigger | An observable and a threshold, not an intention |

Tell the learner they can stress-test this with `review-artifact`.
