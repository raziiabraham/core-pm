---
artifact: System boundary sketch
lesson: TJ-01
filename: artifacts/TJ-01-system-boundary-sketch.md
---

# Artifact template · System boundary sketch

The tutor fills this in with the learner, using the learner's judgment. Never
invent a component, a latency number, a service name, or an owner. If the
learner does not know how a part of the system works, write `<unknown>` and
carry it into Gaps. A sketch with honest gaps can be corrected by an engineer.
A sketch with invented components will be dismissed, and the learner will lose
the conversation that makes this artifact useful.

Delete the guidance in parentheses in the finished artifact.

```markdown
# System boundary sketch · <feature or path>

- **Date:** <YYYY-MM-DD>
- **Product:** <product>
- **Path under study:** <user action → response, in one line>
- **Drawn by:** <you, from outside the code>
- **Corrected by:** <engineer name and date, or `<unconfirmed>`>

## The path

<Ordered steps from the user's action to the completed response. Include
measurement steps — if an event is recorded, that is a step. Number them.>

1. <step>
2. <step>
3. <step>

## Boundaries

<A boundary is any point where work leaves one owner's control. Mark
confidence honestly.>

| # | Boundary (from → to) | What crosses it | Owner on each side | Confirmed? |
|---|---|---|---|---|
| 1 | <component → component> | <request, data, event> | <owner / owner> | <yes / no / `<unknown>`> |

## Failure modes

<For each boundary you care about, three cases. Only list what a user could
actually notice, or state plainly that the failure is invisible to users.>

| Boundary | Slow | Fails | Succeeds but wrong |
|---|---|---|---|
| <#> | <what the user sees> | <what the user sees> | <what the user sees> |

**Who detects each one:** <name the role that finds out first, per failure. If
the answer is "nobody until a user complains," write that.>

## Measurement failures

<The instrumentation is part of the system. State what is missing, and what
that does to the claims you can make from the numbers.>

- **Known gap:** <what is not captured, and at what rate>
- **Effect on claims:** <which specific claim this weakens or blocks>

## Constraints

| Constraint | Fixed or chosen | Who can change it | Cost to change |
|---|---|---|---|
| <limit> | <fixed / chosen / `<unknown>`> | <role> | <cost or `<unknown>`> |

<Most constraints will start as `<unknown>`. That is the correct starting
state. Do not guess a classification to fill the cell.>

## Who pays

| Consequence | Currency | Who holds it |
|---|---|---|
| <what goes wrong> | <waiting, rework, on-call, support load, money> | <person or role> |

## Authority split

| Open question | Yours (consequence) | Specialist's (mechanism) |
|---|---|---|
| <question> | <yes / no> | <yes / no> |

## Questions for engineering

<Consequence questions only. If a question names a solution, it is an
instruction — rewrite it before it goes on this list.>

1. <question>
2. <question>

## Corrections received

<Fill this in after the review. Leave the original wrong version visible.>

| What I drew | What is actually true | What that changes about my product reasoning |
|---|---|---|
| <claim> | <correction> | <consequence> |

## Position

- **Boundary most likely involved in the problem:** <one boundary>
- **Confidence:** <low | moderate | high> — <why, in one line>
- **Strongest reason this is wrong:** <the best argument against your own sketch>

## Revision trigger

<The observation that would make you redraw this. Name the observable and the
threshold. "When we learn more" is not a trigger.>

## Gaps

<Everything marked `<unknown>` above, as open questions, each with the person
who could close it.>
```

## Quality bar

Before saving, check all six exposures are present. Name any that are missing
rather than filling them in yourself:

| Exposure | Present when |
|---|---|
| Choice | One boundary is named as the likely site of the problem, and it is a claim someone could disagree with |
| Evidence | Each confirmed boundary says who confirmed it and when; unconfirmed ones say so |
| Uncertainty | `<unknown>` appears where knowledge is absent, and confidence is matched to what was actually confirmed |
| Alternatives | At least one other boundary is named as a rival explanation, not as a strawman |
| Owner | Consequence holders are named as roles, and mechanism questions are handed to a specialist by name |
| Revision trigger | An observable and a threshold that would force a redraw |

Tell the learner they can stress-test this with `review-artifact`.
