---
artifact: Repository orientation note
lesson: TJ-04
filename: artifacts/TJ-04-repository-orientation-note.md
---

# Artifact template · Repository orientation note

**What this is.** A record of what the repository lets you conclude about the cost of change, and what it cannot answer. It is not an estimate and not an architecture review.

The tutor fills this in with the learner, using what the learner actually
observed. Never invent a folder name, a test count, a deploy frequency, a
dashboard, or an owner. Record the command or the file that produced each fact.
Where nothing was observed, write `<unobserved>`; where the fact needs a person
to supply it, write `<unknown>` and put the question on the question list. This
artifact is only useful if an engineer reading it recognises their own system.

Delete the guidance in parentheses in the finished artifact.

```markdown
# Repository orientation note · <area or change under study>

- **Date:** <YYYY-MM-DD>
- **Product:** <product>
- **Repository:** <name, or `<no access>`>
- **Question this note serves:** <the decision you are trying to price>
- **Read by:** <you> · **Reviewed by:** <engineer and date, or `<unreviewed>`>

## What I could read, and what I could not

| Surface | Read directly | Supplied by a person | Not established |
|---|---|---|---|
| Structure | | | |
| Tests | | | |
| Release path | | | |
| Observability | | | |
| Ownership | | | |

## The five surfaces

| Surface | What I found | How I found it (command, file, or person) | Confidence | What it implies about cost of change |
|---|---|---|---|---|
| Structure | <folders touched, files per typical change> | <command or path> | <low / moderate / high> | <implication> |
| Tests | <tests present near this code, what their names promise> | | | |
| Release path | <steps from written to seen, frequency, exposure control> | | | |
| Observability | <what is instrumented, what is not> | | | |
| Ownership | <reviewers, recent authors, on-call> | | | |

## Change history for this area

| Change | Date shipped | Exposed to whom | Independently reversible | Instrumented separately |
|---|---|---|---|---|
| <change> | <date or `<unknown>`> | <all users / subset / `<unknown>`> | <yes / no / `<unknown>`> | <yes / no / `<unknown>`> |

## Attribution verdict

<Written before asking anyone, then updated. If changes were exposed together
and events do not separate them, say so plainly and stop treating attribution
as a research task.>

- **Can the outcome be attributed to a specific change from existing data?**
  <yes / no / partly>
- **Why:** <one paragraph>
- **What would have to have been true instead:** <the exposure or instrumentation
  that would have made attribution possible>

## Measurement gaps

| Gap | Rate or scope | What it blocks |
|---|---|---|
| <gap> | <how much> | <which specific claim or comparison> |

## Reversal path

| Change | How it is turned off | Time to take effect | Requires a deploy | Can be reversed independently of the other changes |
|---|---|---|---|---|

## Cost of change

<A range, with the reasons that set each end. Label it as your inference from
the surfaces above. It is not an estimate, and it does not replace one.>

- **Cheap because:** <observations>
- **Expensive because:** <observations>
- **Inferred range and what would narrow it:** <range> — <what you would need>

## Questions for engineering

<Each question carries the decision its answer would change. Delete any
question whose answer changes nothing.>

| # | Question | Decision the answer changes | Asked of | Answer |
|---|---|---|---|---|
| 1 | | | | |

## Corrections received

| What I recorded | What is actually true | What that changes about my plan |
|---|---|---|

## Revision trigger

<What would make this note stale enough to redo — a reorganisation, a change
of release process, a new owner, or a date.>

## Gaps

<Everything marked `<unknown>` or `<unobserved>` above, as open questions, each
with the person who could close it.>
```

## Quality bar

Before saving, check all six exposures are present. Name any that are missing
rather than filling them in yourself:

| Exposure | Present when |
|---|---|
| Choice | The note answers one stated decision, and reaches an attribution verdict rather than deferring it |
| Evidence | Every fact names the command, file, or person that produced it |
| Uncertainty | Unobserved and unknown cells are marked as such, and the cost range is labelled an inference, not an estimate |
| Alternatives | Reversal paths are compared, including doing nothing |
| Owner | Reviewers, recent authors, and the person who could close each gap are named |
| Revision trigger | A condition or date that makes this note stale |

Tell the learner they can stress-test this with `review-artifact`.
