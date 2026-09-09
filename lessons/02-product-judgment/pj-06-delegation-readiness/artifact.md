---
artifact: Delegation contract
lesson: PJ-06
filename: artifacts/PJ-06-delegation-contract.md
---

# Artifact template · Delegation contract

The tutor fills this in with the learner, using the learner's judgment and the
learner's evidence. Never invent a number, a quote, or a source. Where something
is unknown, write `<unknown>` and carry it into the Gaps section. A named gap is
a finding. A fabricated one is a liability.

This artifact has a second reader: the delegate. Before finishing, read the
document back to the learner as if you had just joined the company and had been
in none of their meetings. Every question you have to ask is a gap in the
contract, not a gap in the delegate.

Delete the guidance in parentheses in the finished artifact.

```markdown
# Delegation contract · <short name of the work>

- **Date:** <YYYY-MM-DD>
- **Product:** <product>
- **Delegated to:** <name or role>
- **Delegated by:** <name or role>
- **Level:** <execute | recommend | decide>
- **Owner of the consequence:** <name or role — this does not change by delegating>
- **Due:** <date>

## Intent

**The decision this work changes:**

<One sentence, stated as a choice. "Find out why activation dropped" is a topic
and fails this test.>

**Live alternatives:**

1. <option>
2. <option>

**Why this decision matters now:** <one or two sentences, including what happens if it is not made>

## Level, and why

<Execute, recommend, or decide — and the reason, argued from consequence and
reversibility. If the frame is being left deliberately open so the delegate can
form it, say so here explicitly, so the ambiguity reads as the assignment rather
than an oversight.>

## Evidence standard

- **What a sufficient answer contains:** <the specific claims that must be supported>
- **Population it must cover:** <a behaviour-and-context boundary>
- **What would be more work than this decision justifies:** <name the over-build you are ruling out>
- **What counts as too thin:** <name the under-build you will send back>

## Constraints

| Constraint | Detail |
|---|---|
| **Time box** | <how long, and what happens at the end of it> |
| **What must not change** | <the floors — including anything downstream that depends on this> |
| **Definitions in scope to challenge** | <which inherited definitions they may question, and which are fixed> |
| **Budget or resource** | <what they may spend, in money or in other people's time> |

## Interfaces

| They may | Detail |
|---|---|
| **Talk to** | <named people, and for what> |
| **Request** | <queries, data access, design time — from whom> |
| **Commit** | <what they can agree to on your behalf> |
| **Not commit** | <what they must not agree to, including anything customer-facing> |

## Escalation conditions

Observations, not feelings. Each must be visible to the delegate with the access
listed above.

| # | Observation | What they should do | Who they come to |
|---|---|---|---|
| 1 | <observable> | <pause / flag / bring options> | <name or role> |
| 2 | <observable> | <…> | <…> |
| 3 | <observable> | <…> | <…> |

## Readiness test

Answered as if you had just joined the company and read only this document:

1. **What decision does this work change?** <one sentence>
2. **How would I know I had done enough?** <one sentence>
3. **When must I come back early?** <one sentence>

<If any of the three cannot be answered from the document alone, fix the
document before sending it.>

## Gaps

<Everything marked `<unknown>` above, listed as open questions with who could
close them. Most of these are yours to close, not the delegate's.>
```

## Quality bar

Before saving, check all six exposures are present. Name any that are missing
rather than filling them in yourself:

| Exposure | Present when |
|---|---|
| Choice | Intent is a decision with live alternatives, and the level is stated rather than inferred |
| Evidence | The evidence standard names what is sufficient, what is over-built, and what is too thin |
| Uncertainty | It is stated which definitions and assumptions are open to challenge and which are fixed |
| Alternatives | The live alternatives are written, so the delegate can argue for one you did not expect |
| Owner | The consequence owner is named, and it is stated that delegating does not move it |
| Revision trigger | Three escalation conditions, each an observation the delegate can actually see |

Tell the learner they can stress-test this with `review-artifact`.
