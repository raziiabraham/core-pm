---
artifact: System change record
lesson: DS-06
filename: artifacts/DS-06-system-change-record.md
---

# Artifact template · System change record

The tutor fills this in with the learner, using the learner's judgment and the
learner's evidence. Never invent a cost, a threshold, an owner, or a removal
date the learner did not choose. Where something is unknown, write `<unknown>`
and carry it into the Gaps section. A change whose cost is unknown is a change
the learner has not finished designing — do not complete it for them.

This record holds **one** change. If the learner has several, write several
records rather than one document with a list, because each change has its own
owner, cost, and removal date.

Delete the guidance in parentheses in the finished artifact.

```markdown
# System change record · <short change name>

- **Date:** <YYYY-MM-DD>
- **Prompted by:** <the incident, signal, or launch this came out of>
- **Change owner:** <person>
- **Form:** <operating rule | interface | threshold | capability>

## System fact

<What is true about the system, stated without a proposed fix and without blame.
Separate it from the incident. "An inherited metric with no owner is directing
product attention" is a system fact. "The activation number dropped" is not.>

## Contradicted expectation

<Which written claim from an earlier artifact this contradicts — the commitment
brief's value or effort claim, the sequence's claim about what a slice would
teach, the system map's claim about who would decide, the launch plan's claim
about what the stop rule could detect. If no earlier artifact made a claim this
could contradict, write that; the absence is the finding.>

## The change

<One sentence, in the form chosen above. A rule states a constraint. An interface
states a contract between two named owners. A threshold states a number and the
action it triggers. A capability states what the team can now do.>

## Why the other three forms are wrong here

| Form | Why not this one |
|---|---|
| Operating rule | <reason, or "chosen"> |
| Interface | <reason, or "chosen"> |
| Threshold | <reason, or "chosen"> |
| Capability | <reason, or "chosen"> |

<If the real gap is that nobody can perform the work the rule would mandate, the
answer is capability. Say so here rather than adopting a rule nobody can comply
with.>

## Cost and displacement

- **What this costs:** <time, speed, autonomy, a step that used to be optional>
- **What it displaces:** <what stops or slows so this can exist>
- **Who is constrained by it:** <the people who will be told no because of this>

## Verification

- **How you will know it happened:** <observable by someone other than the
  author>
- **First thing it should block or fire on:** <a specific expected instance>
- **By when:** <date — if it has blocked or fired on nothing by then, it is not
  operating>

## Boundary tests

| Test | Answer | Reasoning |
|---|---|---|
| Would this have prevented the problem? | <yes / no> | <mechanism, not story> |
| Will the condition recur? | <yes / no> | <why> |

<If either answer is no, the correct outcome is to record the incident and change
nothing. Write that outcome here rather than weakening the change until it
passes.>

## Removal review

- **Review date:** <YYYY-MM-DD>
- **Reviewer:** <person>
- **Evidence that would retire this change:** <what would show it is no longer
  needed>

## Deliberately not a system change

<One thing from this situation that is true and worth saying but is not a system
change — a piece of sentiment, praise, or narrative. Name where it goes instead,
so it is not lost and not mistaken for an action.>

## Gaps

<Everything marked `<unknown>` above, listed as open questions with who could
close them and by when.>
```

## Quality bar

Before saving, check all six exposures are present. Name any that are missing
rather than filling them in yourself:

| Exposure | Present when |
|---|---|
| Choice | Exactly one form is chosen, and the other three are ruled out with reasons |
| Evidence | The change is tied to a contradicted written expectation, or the absence of one is named |
| Uncertainty | Both boundary tests are answered honestly, including an outcome of changing nothing |
| Alternatives | Cost and displacement are stated, and the sentiment item is routed rather than converted into an action |
| Owner | A change owner, a removal reviewer, and the people who will be constrained are all named |
| Revision trigger | Verification names a first expected block or firing with a date, and the removal review has a date and retiring evidence |

Tell the learner they can stress-test this with `review-artifact`.
