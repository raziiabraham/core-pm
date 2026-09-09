---
artifact: Analysis review sheet
lesson: EV-05
filename: artifacts/EV-05-analysis-review-sheet.md
---

# Artifact template · Analysis review sheet

**What this is.** A record of what you refuse to conclude until named checks come back. It is not a query audit and not a corrected query — auditing SQL line by line is a separate skill, and owning the query stays with the analyst.

The tutor fills this in with the learner, using the learner's analysis and the
learner's judgment. Never invent a row count, a reconciliation figure, or a
result. Never write a corrected query on the analyst's behalf. Where something
is unknown, write `<unknown>` and carry it into the Open checks section — an
unrun check is the point of this artifact, not a defect in it.

Delete the guidance in parentheses in the finished artifact.

```markdown
# Analysis review sheet · <analysis name>

- **Date:** <YYYY-MM-DD>
- **Product:** <product>
- **Question this answers:** <one sentence>
- **Analyst:** <person or role>
- **Reviewer:** <you>
- **Decision it would inform:** <one sentence>

## Specification handed over

(From your EV-03 metric definition. If the analysis started without these, say
so — that is the first finding.)

| Slot | Specified as |
|---|---|
| Population | <definition> |
| Event | <definition> |
| Window | <anchor and duration> |
| Aggregation | <formula> |
| Unit | <user / workspace / account> |

## What one row is

- **One row of the result table is:** <in words>
- **The denominator row set is:** <in words>
- **These two were written before reviewing the query:** <yes / no>

## Denominator review

| Check | Answer | Status |
|---|---|---|
| Is the denominator filtered by anything downstream of the outcome? | <answer> | <clear / defect / `<unknown>`> |
| Does it include entities with zero of the numerator event? | <answer> | <status> |
| Does it reconcile to an independently known total? | <number vs number> | <status> |

## Join review

| Join | Key | One row after this join is | Fan-out risk | Rows dropped |
|---|---|---|---|---|
| <table> | <key> | <in words> | <yes / no — which entities> | <which population> |

## Edge review

| Edge | Finding | Direction of distortion | Concentrated in |
|---|---|---|---|
| NULLs in <column> | <finding> | <raises / lowers the number> | <which population> |
| Window completeness | <finding> | <direction> | <which period> |
| Boundary conditions | <finding> | <direction> | <where> |

## Defects found

| # | Defect | Type (denominator / join grain / edge) | Direction | Distorts most for |
|---|---|---|---|---|
| 1 | <defect> | <type> | <up / down> | <segment> |

**Defect that could manufacture the trend on its own:** <which one, and the
mechanism in two sentences, or "none found">

## Checks requested

(Each must be a number comparable to something already known.)

| Check | Compare against | Requested from | Returned |
|---|---|---|---|
| <check> | <known figure> | <analyst> | <result or pending> |

## Escalation sent

> <The message you sent. It names the checks and withholds the conclusion. It
> does not assert that the query is wrong and does not hand over a rewrite.>

## Position

- **What you now believe from this analysis:** <one sentence, or "nothing yet">
- **What you are refusing to conclude until the checks return:** <state it>
- **Confidence:** <low | moderate | high> — <why, in one line>
- **Strongest reason your review is wrong:** <the best argument that the query is fine>

## Revision trigger

<What would make you reopen this review — a check returning outside its expected
range, a schema change, a result that lands exactly on the expected story. Name
the observable and the threshold.>

## Open checks

<Everything marked `<unknown>` or pending, with who owes it and by when.>
```

## Quality bar

Before saving, check all six exposures are present. Name any that are missing
rather than filling them in yourself:

| Exposure | Present when |
|---|---|
| Choice | The decision this analysis informs is named, and the result is accepted or refused |
| Evidence | Denominator, joins, and edges each have a written finding or a pending check |
| Uncertainty | Each defect has a direction and a concentration, not just a label |
| Alternatives | An alternative reading of the result is stated, including "no real effect" |
| Owner | Correctness stays with the analyst; the review record stays with you |
| Revision trigger | A check result or threshold that would reopen the review |

Tell the learner they can stress-test this with `review-artifact`.
