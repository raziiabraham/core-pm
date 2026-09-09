---
artifact: Decision architecture
lesson: PJ-04
filename: artifacts/PJ-04-decision-architecture.md
---

# Artifact template · Decision architecture

The tutor fills this in with the learner, using the learner's judgment and the
learner's evidence. Never invent a number, a quote, or a source. Where something
is unknown, write `<unknown>` and carry it into the Gaps section. A named gap is
a finding. A fabricated one is a liability.

This artifact is written **before** the decision is made. If the decision has
already happened, say so at the top and treat the document as a record of how it
was actually routed, not as a design.

Delete the guidance in parentheses in the finished artifact.

```markdown
# Decision architecture · <short decision name>

- **Date:** <YYYY-MM-DD>
- **Product:** <product>
- **Written before or after the decision:** <before | after>
- **The decision, as a choice:** <one sentence, with live alternatives — if you cannot write this, stop and return to the decision brief>

**Alternatives on the table:**

1. <option>
2. <option>

## The five variables

| Variable | Score | Why |
|---|---|---|
| **Impact** | <low / moderate / high> | <who is affected, and how far it spreads> |
| **Reversibility** | <reversible / costly / one-way> | <what undoing it would actually mean, including partial states> |
| **Uncertainty** | <low / moderate / high> | <what is not known about the mechanism or the estimate> |
| **Timing** | <no expiry / expires> | <what removes options as time passes> |
| **Expertise location** | <PM / specialist / split> | <where the decisive knowledge sits> |

**Which variable is driving the rigor:** <name one>

## Expiry

- **External deadline:** <date or week>
- **Duration of the work this decision authorises:** <use the pessimistic end of the estimate>
- **Decision must be made by:** <date>
- **What is lost after that date:** <which option disappears, and who then carries the extra risk>

<If the decision has no expiry, write "no expiry" and say what would create one.>

## Roles

| Role | Who | What they hold |
|---|---|---|
| **Decider** | <name or role> | Makes the call and is accountable for having made it |
| **Consequence owner** | <name or role> | Carries the outcome regardless of who decided |
| **Specialist authority** | <name or role> | Holds decisive knowledge; can veto on technical grounds |
| **Consulted** | <names or roles> | Contributes input; does not decide |
| **Informed** | <names or roles> | Needs to know the outcome |

<If decider and specialist authority are the same person, say why that is
correct here rather than an overreach or an abdication.>

## Rigor

- **What must be known before the choice is allowed:** <specific, listable>
- **What will not be investigated, and why:** <the analysis you are deliberately skipping>
- **Cost of this process:** <rough time and attention> — <and why it is smaller than the cost of being wrong>

## Review depth

- **Reviewed before commitment, or from its outcome:** <before | after>
- **Reviewer:** <name or role>
- **What the reviewer is checking:** <the reasoning, the estimate, the population, or the risk — name it>
- **When:** <date or event>

## Escalation condition

| Observation | Escalate to | The exact decision you would be asking them to make |
|---|---|---|
| <observable> | <name or role> | <a choice, not a topic> |

<Escalation does not transfer the consequence. Note who still owns the outcome
after escalation.>

## Gaps

<Everything marked `<unknown>` above, listed as open questions with who could
close them.>
```

## Quality bar

Before saving, check all six exposures are present. Name any that are missing
rather than filling them in yourself:

| Exposure | Present when |
|---|---|
| Choice | The decision is stated as a choice with live alternatives before any routing is designed |
| Evidence | Rigor names what specifically must be known, and what is deliberately not investigated |
| Uncertainty | The uncertainty score is justified, and the expiry uses the pessimistic estimate |
| Alternatives | Options that disappear after the expiry date are named, with who then carries the risk |
| Owner | Decider, consequence owner, and specialist authority are three named entries, not one |
| Revision trigger | The escalation condition names an observation and the exact decision being asked for |

Tell the learner they can stress-test this with `review-artifact`.
