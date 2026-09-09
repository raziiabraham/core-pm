---
artifact: Product bet portfolio
lesson: ST-04
filename: artifacts/ST-04-product-bet-portfolio.md
---

# Artifact template · Product bet portfolio

The tutor fills this in with the learner, using the learner's judgment and the
learner's capacity numbers. Never invent an estimate, a cost, or a revenue
figure. If the learner does not know their capacity split, write `<unknown>` and
record it as a gap — an allocation built on invented numbers will be quoted in
planning and will not survive contact with the team.

Delete the guidance in parentheses in the finished artifact.

```markdown
# Product bet portfolio · <cycle or period>

- **Date:** <YYYY-MM-DD>
- **Cycle:** <start and end>
- **Constraint this portfolio serves:** <one line from ST-01>
- **Audience committed to:** <one line from ST-03>
- **Owner:** <who can approve a change to this allocation>

## Capacity

- **Total capacity:** <people, weeks, or points — state the unit>
- **Removed before allocation:** <dated obligations and fixed commitments that
  are constraints rather than bets>
- **Capacity available to allocate:** <what remains>
- **Specialized capacity:** <which capability sits with which specific people,
  and therefore cannot be reallocated freely>

## The bets

| Bet | Type | What it buys | Share of capacity | Evidence held | Evidence missing | What it displaces |
|---|---|---|---|---|---|---|
| <name> | <feature / growth / scale / risk / enabling> | <in terms of the constraint> | <%> | <source> | <what you would want> | <the thing pushed out> |
| <name> | <type> | <buys> | <%> | <source> | <missing> | <displaced> |

**Funded at zero this cycle:** <which candidates get nothing, and why. If
nothing is at zero, you have not allocated — you have listed.>

## Risk bet sizing

- **Exposure:** <what could stop you>
- **Date it becomes live:** <date>
- **Cost if it lands:** <immediate breakage vs slow accumulation>
- **Smallest action that removes the exposure:** <scope>
- **What the larger version buys beyond that:** <benefit, or "nothing named">

## Read-back test

<State the constraint a stranger would infer from these shares alone. If it does
not match the constraint at the top of this document, say which of the two you
are changing.>

## Uncertainty

- **Least defensible allocation:** <which share you are least sure of, and why>
- **Pressure risk:** <which bet is most likely to be raided mid-cycle, and by
  whom>
- **What would make this portfolio wrong:** <in one sentence>

## Mid-cycle rule

<How a new request is handled without reopening the strategy: what it must
displace, who decides, and above what size it escalates.>

## Revision trigger

<The observation and threshold that would force a reallocation before the cycle
ends, and who would see it first.>

## Gaps

<Everything marked `<unknown>`, as open questions with who could close them.>
```

## Quality bar

Before saving, check all six exposures are present. Name any that are missing
rather than filling them in yourself:

| Exposure | Present when |
|---|---|
| Choice | Capacity is allocated as shares, and at least one candidate is funded at zero |
| Evidence | Each bet names the evidence held and the evidence missing |
| Uncertainty | The least defensible share is named, and the risk bet is sized with a date |
| Alternatives | Each funded bet names what it displaced |
| Owner | The person who can approve a reallocation is named, and specialized capacity is attributed |
| Revision trigger | An observable and a threshold that would force reallocation mid-cycle |

Tell the learner they can stress-test this with `review-artifact`.
