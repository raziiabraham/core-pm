---
artifact: Delivery system map
lesson: DS-03
filename: artifacts/DS-03-delivery-system-map.md
---

# Artifact template · Delivery system map

The tutor fills this in with the learner, using the learner's judgment and the
learner's evidence. Never invent an owner, a latency, or a process that the
learner did not describe. Where something is unknown or unowned, write
`<unknown>` or `<unowned>` and carry it into the Gaps section. In this artifact
an unowned flow is the finding, not an omission to be tidied away.

Delete the guidance in parentheses in the finished artifact.

```markdown
# Delivery system map · <team or build name>

- **Date:** <YYYY-MM-DD>
- **Commitment this serves:** <link or name of the DS-01 brief>
- **Team size:** <number, and whether flows are deliberately collapsed>
- **Map owner:** <person>

## The four flows

| Flow | Owner | Interface (where a request enters) | Where its state is visible | Honest status |
|---|---|---|---|---|
| Decision | <person or `<unowned>`> | <interface> | <artifact, board, list> | <working / thin / absent> |
| Work | <person> | <interface> | <where> | <status> |
| Integration | <person> | <interface> | <where> | <status> |
| Learning | <person or `<unowned>`> | <interface> | <where> | <status> |

<If the team is small enough that flows are deliberately collapsed into one or
two people, say so here. A collapsed flow that is named is a design. A collapsed
flow that is unnamed is a gap.>

## Open decisions

| Open question | Owner | Decision date | Evidence standard | Default if the date passes | Who is blocked |
|---|---|---|---|---|---|
| <question> | <person> | <YYYY-MM-DD> | <what would be enough to answer it> | <what happens automatically> | <person> |

<Every open question that could change what gets built belongs here, including
the ones currently living in a chat channel. A question with no default will be
answered by whoever is blocked by it.>

## Interfaces

| Boundary | Input required | Output returned | Latency | Failure behaviour |
|---|---|---|---|---|
| <from → to> | <what the requester must provide> | <what comes back, in what form> | <how long before nothing is coming> | <what happens automatically at that point> |

<An interface without a latency is a queue with no bottom. An interface without
a failure behaviour is a promise that converts silently into someone else making
your decision.>

## Dependencies on work that is not live

| Capability | Status (in design / planned / external) | Contract you are building against | Stubbed? | What breaks if the contract changes |
|---|---|---|---|---|
| <capability> | <status> | <the interface you assumed> | <yes / no> | <consequence> |

## Learning flow design

- **What will be evaluated:** <the specific claim from the DS-01 brief>
- **Who reads the result:** <named person, not a team>
- **Date of the readout:** <YYYY-MM-DD>
- **What could change because of it:** <scope, sequence, the commitment itself>
- **What this evaluation cannot establish:** <the honest limit, given the
  instrumentation you actually have>

## Capability gaps

| Gap | Why ownership alone will not fix it | Who could close it | Cost of leaving it open |
|---|---|---|---|
| <gap> | <reason> | <person or team> | <consequence> |

## What this map does not cover

<Boundaries you did not draw, teams whose work touches yours but was out of
scope, flows you decided not to formalize and why.>

## Gaps

<Everything marked `<unknown>` or `<unowned>` above, listed as open questions
with who could close them and by when.>
```

## Quality bar

Before saving, check all six exposures are present. Name any that are missing
rather than filling them in yourself:

| Exposure | Present when |
|---|---|
| Choice | Each flow is either owned or explicitly named as unowned, and collapsed flows are declared as a design |
| Evidence | The learning flow names what will be evaluated and what the available instrumentation cannot establish |
| Uncertainty | Dependencies on work that is not live are separated from live capabilities, with the assumed contract written down |
| Alternatives | Every open decision has a default that fires if the date passes |
| Owner | Interfaces name both sides, and no single person silently owns three flows |
| Revision trigger | Interfaces carry a latency and an automatic failure behaviour, not only an owner |

Tell the learner they can stress-test this with `review-artifact`.
