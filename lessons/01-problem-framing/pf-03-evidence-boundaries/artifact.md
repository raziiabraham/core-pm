---
artifact: Evidence boundary note
lesson: PF-03
filename: artifacts/PF-03-evidence-boundary-note.md
---

# Artifact template · Evidence boundary note

The tutor fills this in with the learner, using the learner's judgment and the
learner's evidence. Never invent a count, a date, a source, or a quote. Never
estimate a population the learner cannot verify. Where a field is unavailable,
write `<unknown>` and carry it into Gaps. An estimated number written without a
marker becomes a fact in the next document.

Delete the guidance in parentheses in the finished artifact.

```markdown
# Evidence boundary note · <short claim name>

- **Date:** <YYYY-MM-DD>
- **Product:** <product>
- **Linked decision:** <the decision from PF-01 this claim serves>
- **Linked mechanism:** <the mechanism from PF-02 this claim supports>

## The compressed claim

> <The claim exactly as it currently appears in a roadmap, deck, or ticket.
> Quote it. Do not improve it here.>

## Assertions hiding inside it

(One row per separate assertion. Most compressed claims contain four or more:
who, how often, how strongly, and what follows.)

| # | Assertion | Supported | Not contradicted | Cannot be addressed |
|---|---|---|---|---|
| 1 | <assertion> | <yes/no> | <yes/no> | <yes/no> |
| 2 | <assertion> | <yes/no> | <yes/no> | <yes/no> |

## Boundary of the evidence

| Field | Value |
|---|---|
| **Population** | <exactly who, and how many — named cases, not a category> |
| **Window** | <observed when, over how long, and whether it is still true> |
| **Source** | <who observed it, through what channel> |
| **Channel bias** | <what this route systematically over-surfaces and under-surfaces> |
| **Limit** | <what this cannot establish even if entirely accurate> |

## Strength ladder

| Rung | Claim | Do you have it? | What it would take to reach |
|---|---|---|---|
| 1 | They said they want it | <yes/no/`<unknown>`> | — |
| 2 | They would pay for it | <yes/no/`<unknown>`> | <evidence type, rough cost> |
| 3 | They would change how they work to use it | <yes/no/`<unknown>`> | <evidence type, rough cost> |

- **Highest rung the evidence reaches today:** <rung>
- **Rung the current document implies:** <rung>
- **Gap between them:** <state it plainly>

## Prevalence

- **What is counted:** <requests, tickets, events — the thing you actually have>
- **What is not counted:** <how often the underlying behaviour occurs>
- **Can prevalence be established with what exists?** <yes — how | no — why not>

## Commercial weight, held separately

<Any revenue, contract, or account-size figure attached to this claim. State
explicitly that it sizes the consequence, not the evidence. If it is being used
to argue the problem is real, say so and mark it as a substitution.>

## Rewritten claim

> <The claim rewritten so a reader three documents downstream still sees the
> population, the channel, and the limit. Honest, not merely hedged — vague
> language is not a boundary.>

## Gaps

| Gap | Why it matters | Who could close it | Rough cost |
|---|---|---|---|
| <`<unknown>` field> | <what decision it affects> | <person or role> | <time> |
```

## Quality bar

Before saving, check all six exposures are present. Name any that are missing
rather than filling them in yourself:

| Exposure | Present when |
|---|---|
| Choice | The linked decision is named, and the claim is one the decision rests on |
| Evidence | Population, window, source, channel bias, and limit are all filled or marked `<unknown>` |
| Uncertainty | The gap between the rung reached and the rung implied is stated plainly |
| Alternatives | Assertions the evidence merely fails to contradict are kept separate from ones it supports |
| Owner | Each gap names who could close it |
| Revision trigger | The note says what evidence would move the claim up one rung, and what it would cost |

Tell the learner they can stress-test this with `review-artifact`.
