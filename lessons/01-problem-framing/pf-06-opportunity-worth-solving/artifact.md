---
artifact: Opportunity case
lesson: PF-06
filename: artifacts/PF-06-opportunity-case.md
---

# Artifact template · Opportunity case

The tutor fills this in with the learner, using the learner's judgment and the
learner's evidence. Never invent a frequency, a revenue figure, a churn number,
or a workaround the learner has not observed. Never produce a combined score —
if the learner asks for one, explain that a single figure hides the row that
decided the ordering. Where something is unknown, write `<unknown>` and carry it
into Gaps.

Delete the guidance in parentheses in the finished artifact.

```markdown
# Opportunity case · <option A> vs <option B>

- **Date:** <YYYY-MM-DD>
- **Product:** <product>
- **Capacity being allocated:** <team, cycle, and what it can hold>
- **Decided by:** <date, carried from the framing scale check>

## Constraints subtracted first

(Forced choices — support deadlines, security, legal, contractual. These do not
compete. They reduce the capacity below.)

| Constraint | Why it is not an opportunity | Capacity it consumes |
|---|---|---|
| <constraint> | <no alternative; consequence appears past a threshold> | <estimate or `<unknown>`> |

- **Capacity remaining for the comparison:** <what is actually being allocated>

## Shared-mechanism check

- **Do these options share a mechanism?** <yes | no>
- **What was checked:** <the mechanisms from PF-02 that were compared>
- **If yes:** <stop ranking. State the shared mechanism and reframe the choice
  around it.>

## The five tests, one at a time

(Fill both columns before moving to the next row. Comparing row by row is what
lets a reader disagree with one line instead of one number.)

| Test | <Option A> | <Option B> | Which wins, and why |
|---|---|---|---|
| **Consequence** | <chain to an observable event> | <chain> | <A/B — and by how much> |
| **Frequency** | <occurrences inside the PF-05 boundary, or `<unknown>`> | <same> | <A/B> |
| **Ownership** | <authority, capability, live vs planned> | <same> | <A/B> |
| **Alternatives** | <what people do today, and how well it works> | <same> | <A/B> |
| **Strategic fit** | <what it moves the product toward> | <same> | <A/B> |

## Consequence chains, written out

**<Option A>:** <link> → <link> → <link> → <observable event, or "chain ends
here">

**<Option B>:** <link> → <link> → <observable event, or "chain ends here">

- **Which chain runs out first:** <A/B>
- **Which links are observed, and which are assumed:** <mark each>

## Visibility

| Option | Arrival channel | What that channel does not surface |
|---|---|---|
| <A> | <requests, monitoring, sales, support> | <systematic blind spot> |
| <B> | <channel> | <blind spot> |

## Ordering

> <One sentence. Name the option, the test that decided it, and the test on
> which your choice is weakest. No score.>

- **Displaced option:** <what is not being done, stated plainly>
- **Who absorbs that:** <person, team, or customer>
- **Weakest part of this case:** <the argument the losing party should make>

## Reversal condition

<The observation and threshold that would flip this ordering. State it before
the work starts. "If the data changes" is not a condition — name the observable
and the number.>

## Gaps

<Everything marked `<unknown>` above, as open questions, with who could close
each one and roughly how long it would take.>
```

## Quality bar

Before saving, check all six exposures are present. Name any that are missing
rather than filling them in yourself:

| Exposure | Present when |
|---|---|
| Choice | One ordering is committed to, in language, with the deciding test named |
| Evidence | Each consequence link is marked observed or assumed, and frequency comes from the PF-05 boundary |
| Uncertainty | The weakest test is named, and the losing party's best argument is written down |
| Alternatives | The displaced option is stated, and the workaround for each opportunity is named |
| Owner | Whoever absorbs the displaced work or the unsolved problem is identified |
| Revision trigger | A reversal condition with an observable and a threshold, set before the work starts |

Tell the learner they can stress-test this with `review-artifact`.
