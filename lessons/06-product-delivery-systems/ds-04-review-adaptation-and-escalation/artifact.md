---
artifact: Review and escalation protocol
lesson: DS-04
filename: artifacts/DS-04-review-and-escalation-protocol.md
---

# Artifact template · Review and escalation protocol

The tutor fills this in with the learner, using the learner's judgment and the
learner's evidence. Never invent a decider, a date, a threshold, or an authority
the learner did not name. Where something is unknown, write `<unknown>` and
carry it into the Gaps section. A protocol with an invented decider is worse
than no protocol, because people will send real decisions to it.

Delete the guidance in parentheses in the finished artifact.

```markdown
# Review and escalation protocol · <team or build name>

- **Date:** <YYYY-MM-DD>
- **Commitment this protects:** <link or name of the DS-01 brief>
- **Protocol owner:** <person>

## Review passes

| Pass | Run by | Run when | Produces | Ownership rule |
|---|---|---|---|---|
| Improve the work | <person or role> | <trigger> | <named weaknesses and options> | Reviewer names the problem; owner chooses the fix |
| Expose risk | <person or role> | <trigger> | <the risk, its trigger, its consequence> | Raised to the owner first, not around them |
| Verify readiness | <person or role> | <gate> | <pass or fail against criteria written in advance> | <who may fail it, and what happens then> |

**Gate criteria, written before the work:**

- <criterion>
- <criterion>

<If a reviewer must choose the fix because the consequence or the expertise is
theirs, name that here as an owned decision rather than as feedback.>

## Adaptation tiers

| Tier | What changes | Who decides | What is recorded | Example from this build |
|---|---|---|---|---|
| Inside the slice | <implementation, approach, local scope> | Owner, immediately | Nothing formal | <example> |
| Inside the commitment | <sequence, scope, dates within the committed outcome> | Owner, in writing | Amendment to the delivery sequence | <example> |
| The commitment itself | <outcome, population, displacement> | Escalate; commitment brief re-opened | New or amended commitment brief | <example> |

## Escalation format

<Every escalation from this team uses these five parts, in this order. An
escalation missing any one of them is returned, not answered.>

1. **Decision needed.** <The choice, with its alternatives — at least two, both
   live. Not a description of a situation.>
2. **Decider, and why this is above the owner.** <Name> — <consequence outside
   the owner's scope | hard to reverse | specialist authority>
3. **Date and default.** Decide by <YYYY-MM-DD>. If there is no decision by
   then, <the default that executes>.
4. **Evidence held, and its limits.** <What you know> — <what this cannot
   establish, including what an absent signal does and does not mean>
5. **Recommendation.** <What you would do, and your confidence.>

## The three-reason test

<Before escalating, record which reason applies. If none applies, the decision
is yours; decide it in writing instead.>

| Escalation | Consequence outside scope? | Hard to reverse? | Specialist authority? | Verdict |
|---|---|---|---|---|
| <decision> | <yes/no> | <yes/no> | <yes/no> | <escalate / decide it yourself> |

## Notifications

<Known, accepted risks that need visibility without a decision. These go through
a different channel so that escalations keep their force.>

| Notification | Sent to | Cadence | Accepted by | Condition that would convert it into an escalation |
|---|---|---|---|---|
| <item> | <person> | <cadence> | <who accepted the risk, and when> | <observable and threshold> |

## Ownership gaps

<Decisions with no owner anywhere. An escalation cannot create an owner. Name
these separately and say who could assign one.>

## Gaps

<Everything marked `<unknown>` above, listed as open questions with who could
close them and by when.>
```

## Quality bar

Before saving, check all six exposures are present. Name any that are missing
rather than filling them in yourself:

| Exposure | Present when |
|---|---|
| Choice | Every escalation states a choice with at least two live alternatives, not a status |
| Evidence | The evidence section names its limits, including what an absent signal can and cannot establish |
| Uncertainty | The recommendation carries a stated confidence, and readiness gates were written before the work |
| Alternatives | Each escalation names a default that executes if the date passes |
| Owner | The three-reason test is recorded, review passes name who may fail a gate, and ownership gaps are listed separately |
| Revision trigger | Notifications carry an observable and a threshold that would convert them into escalations |

Tell the learner they can stress-test this with `review-artifact`.
