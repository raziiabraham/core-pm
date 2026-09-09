---
artifact: Technical portfolio
lesson: TJ-03
filename: artifacts/TJ-03-technical-portfolio.md
---

# Artifact template · Technical portfolio

The tutor fills this in with the learner, using the learner's judgment. Never
invent an estimate, a risk probability, a compliance requirement, or a capacity
number. Estimates belong to the people who will do the work; record whose
estimate it is and the range they gave. Where a consequence has not been
established, write `<unknown>` and carry it into Gaps rather than inventing a
severity.

Delete the guidance in parentheses in the finished artifact.

```markdown
# Technical portfolio · <cycle or period>

- **Date:** <YYYY-MM-DD>
- **Product:** <product>
- **Period covered:** <dates>
- **Owner of the consequence:** <person or role>
- **Specialist authority:** <who supplied estimates and technical facts>

## The constraint

<Name the one constraint the company actually faces right now: value, reach,
scale, risk, or ability to change. One paragraph on why you believe it, and
what evidence would show you were wrong.>

## Portfolio

| Item | Category | Consequence if unfunded | Curve or cliff | Funded this cycle | Owner |
|---|---|---|---|---|---|
| <item> | <feature / growth / scale / risk / enabling> | <what happens, and roughly when> | <curve / cliff> | <yes / no / partial> | <role> |

<Every item needs a consequence. An item whose consequence is a description of
quality rather than an outcome will lose every prioritisation argument, and
should be marked `<unknown>` until someone can state the outcome.>

## Thresholds

<One row per curve item you are funding conditionally. All four parts
required. If any cell is empty, this is not a threshold.>

| Item | Observable | Level | Date checked | Action when crossed | Who checks |
|---|---|---|---|---|---|
| <item> | <what a person or system can see> | <the value that changes the answer> | <when> | <what happens automatically> | <name or role> |

## Cliffs

<Items where the first observable event would be the loss itself. Each needs a
date commitment and a justification for why it cannot be thresholded.>

| Item | Why it is a cliff, not a curve | Committed date | Work displaced | Eligible for reprioritisation |
|---|---|---|---|---|
| <item> | <argument from the facts, not from the word "security"> | <date> | <what does not happen> | no |

## Estimate and buffer

<Record the estimate as given, and the decision you made about buffer. Do not
re-estimate.>

| Item | Estimate | Whose estimate | Stated uncertainty | Time available | Buffer at top of range | What buys the buffer |
|---|---|---|---|---|---|---|
| <item> | <range> | <role> | <how wide, in their words> | <weeks> | <weeks> | <what is displaced> |

**If the estimate is wrong beyond its stated range:** <what you do, decided
now>

## Failure modes of the shortlisted approaches

<Where a scheduling choice exists, the options fail differently. State each
failure, not which one is "safer".>

| Approach | How it fails | What you would see first |
|---|---|---|

## Not funded this cycle

| Item | Why not | What would have to be true for this to be a mistake |
|---|---|---|

## Position

- **Recommendation:** <one sentence>
- **Confidence:** <low | moderate | high> — <why>
- **Strongest reason this is wrong:** <the best argument against your own portfolio>

## Revision trigger

<The observable and threshold that would force the whole portfolio to be
rebuilt, not just one item adjusted.>

## Gaps

<Everything marked `<unknown>` above, as open questions, each with the person
who could close it.>
```

## Quality bar

Before saving, check all six exposures are present. Name any that are missing
rather than filling them in yourself:

| Exposure | Present when |
|---|---|
| Choice | One constraint is named, and the portfolio visibly funds the work that relieves it |
| Evidence | Each estimate names whose it is and its stated range; consequences cite a source or are marked unknown |
| Uncertainty | Buffer is stated in weeks, and the plan for being wrong beyond the range is written down |
| Alternatives | The unfunded items are listed with what would make leaving them unfunded a mistake |
| Owner | Every item and every threshold check has a named role |
| Revision trigger | Each funded curve item has an observable, a level, a date, and an action |

Tell the learner they can stress-test this with `review-artifact`.
