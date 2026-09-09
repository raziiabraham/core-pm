---
artifact: Delivery sequence
lesson: DS-02
filename: artifacts/DS-02-delivery-sequence.md
---

# Artifact template · Delivery sequence

The tutor fills this in with the learner, using the learner's judgment and the
learner's evidence. Never invent an estimate, a dependency owner, or a date the
learner did not give you. Where something is unknown, write `<unknown>` and
carry it into the Gaps section. An invented estimate in this document becomes
someone else's plan.

Delete the guidance in parentheses in the finished artifact.

```markdown
# Delivery sequence · <commitment name>

- **Date:** <YYYY-MM-DD>
- **Commitment this serves:** <link or name of the DS-01 brief>
- **Sequence owner:** <person>
- **Horizon:** <period>

## Most expensive late discovery

<The one thing that would hurt most if you learned it in the final week, and
what it is made of. If your estimate has a spread, say what the spread is made
of — not how wide it is.>

## Indivisible step

<The moment that cannot be sliced: a cutover, an incompatible schema change, a
switch. Name what can be sliced around it — preparation, compatibility,
verification, rehearsal, rollback readiness — and what cannot. Write "none" only
if you have looked for it.>

## The sequence

| # | Slice | Shaped for (learning / risk) | Evidence yield | Option value if stopped here | Integration safety | Dependency retired |
|---|---|---|---|---|---|---|
| 1 | <slice> | <learning or risk> | <what you will know that you do not know now> | <what you keep> | <can it merge and run without exposing users> | <which one> |
| 2 | <slice> | <learning or risk> | <...> | <...> | <...> | <...> |

<Every slice must have a non-empty answer in at least one of the evidence-yield
or option-value columns. A slice that is empty in both is a task; either reshape
it or fold it into a neighbour.>

## Dependencies

| Dependency | Kind (sequence / capability / knowledge) | Owned by | Handling | Decision date | Default if the date passes |
|---|---|---|---|---|---|
| <dependency> | <kind> | <team or person> | <order it / contract plus stub / bounded investigation> | <date or n/a> | <what happens automatically> |

<Every knowledge dependency needs a decision date and a default. A knowledge
dependency without a default becomes an open question that follows the project
to the last week.>

## Last responsible start date

- **Date:** <YYYY-MM-DD>
- **Computed from:** <the upper estimate, the hard horizon, and the buffer —
  show the arithmetic, not just the conclusion>
- **What happens on that date if nothing has started:** <the automatic
  consequence, and who is told>

## What this sequence protects

<What the order is buying you: an earlier disconfirmation, a preserved option, a
contained integration risk. One or two sentences.>

## What it does not protect

<What you accepted in exchange. Every sequence trades something. Name it, so the
person reading this in week three does not think it was an oversight.>

## Review points

| After slice | Question to answer | Who reads it | What could change as a result |
|---|---|---|---|
| <#> | <question> | <person> | <scope, order, or the commitment itself> |

## Gaps

<Everything marked `<unknown>` above, listed as open questions with who could
close them and by when.>
```

## Quality bar

Before saving, check all six exposures are present. Name any that are missing
rather than filling them in yourself:

| Exposure | Present when |
|---|---|
| Choice | The order is justified by which uncertainty is most expensive to discover late, not by architecture layers |
| Evidence | Each slice states what it will let you learn, and a named person reads the result before the next slice |
| Uncertainty | The estimate spread is decomposed, and the indivisible step is named or explicitly searched for |
| Alternatives | What the sequence does not protect is stated, so the trade is visible |
| Owner | Every dependency has an owner and a kind; knowledge dependencies have a decision date and a default |
| Revision trigger | The last responsible start date shows its arithmetic and names an automatic consequence |

Tell the learner they can stress-test this with `review-artifact`.
