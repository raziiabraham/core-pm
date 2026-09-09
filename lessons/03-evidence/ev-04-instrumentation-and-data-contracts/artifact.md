---
artifact: Tracking contract
lesson: EV-04
filename: artifacts/EV-04-tracking-contract.md
---

# Artifact template · Tracking contract

**What this is.** A record of what the product must observe for a decision to be answerable, and what it currently cannot. It is not an implementable tracking spec — event naming, payload design, and pipeline work belong to engineering and analytics.

The tutor fills this in with the learner, using the learner's product and the
learner's judgment. Never invent an event name, a property, a missing rate, or a
pipeline detail the learner has not confirmed. Where something is unknown, write
`<unknown>` and carry it into the Gaps section. An unknown missing rate is more
dangerous than a known bad one, so mark it as urgent rather than smoothing it
over.

Delete the guidance in parentheses in the finished artifact.

```markdown
# Tracking contract · <capability or metric name>

- **Date:** <YYYY-MM-DD>
- **Product:** <product>
- **Metric this supports:** <from your EV-03 metric definition>
- **Contract owner:** <who is accountable for noticing when this breaks>
- **Implementer:** <engineer or team>

## Events

| Event name | Means exactly | Fires when | Does not fire when | Owner |
|---|---|---|---|---|
| <event> | <one sentence, unambiguous> | <trigger> | <the near-miss case> | <role> |

## Identity

- **Actor identifier:** <field, and where it comes from>
- **Workspace identifier:** <field>
- **Account identifier:** <field>
- **Rule for anonymous actors:** <what is recorded, and how it is later resolved>
- **Rule for system and AI-generated actions:** <how they are marked, so they can be excluded>
- **Stitching rule:** <how an anonymous identifier becomes a user identifier, and what happens to events recorded before that moment>

## Time

- **Timestamp source:** <client | server>
- **Ordering guarantee:** <what is guaranteed, and what is not>
- **Late and replayed events:** <how they are handled, and which day they land on>
- **Timezone basis for windows:** <UTC | account-local>

## Missingness

| Field | Missing rate today | Known reasons | Population it over-represents | Direction of bias |
|---|---|---|---|---|
| <field> | <%> or `<unknown>` | <listable reasons> | <who> | <which way the metric moves> |

**Decision for each gap:** <exclude explicitly | model it | refuse to compute
the affected metric>. State the bias your choice leaves in place.

## Concepts the product does not yet represent

(Fields that cannot be added until the product models the thing. This is a
product decision, not a tracking ticket.)

| Question that needs it | Concept missing from the product | Product change required first |
|---|---|---|
| <question> | <concept> | <change> |

## Availability

- **Recording starts:** <date>
- **Window the metric needs:** <duration>
- **Earliest defensible reading:** <date>
- **What the decision being asked for now will be based on instead:** <other evidence, or an explicit deferral with a date>

## Cost and obligation

- **Privacy and consent implications:** <what is collected about whom, and under what basis>
- **Questions you are deliberately not instrumenting:** <and why — some questions should be closed to instrumentation rather than left as an open ticket>
- **Maintenance burden:** <who inherits this when the code path changes>

## Monitoring

| Check | Threshold | Alert goes to |
|---|---|---|
| <missing rate for field> | <threshold> | <person or channel> |
| <event volume change> | <threshold> | <person or channel> |

## Position

- **Which gap you fix first:** <gap> — <why>
- **What you are willing to leave broken this quarter:** <state it plainly>
- **Strongest reason this ordering is wrong:** <the best argument against it>

## Revision trigger

<The observation that would make you reopen this contract — a missing rate
crossing its threshold, an event changing meaning, a new question the schema
cannot serve. Name the observable and the number.>

## Gaps

<Everything marked `<unknown>` above, listed as open questions with who could
close them.>
```

## Quality bar

Before saving, check all six exposures are present. Name any that are missing
rather than filling them in yourself:

| Exposure | Present when |
|---|---|
| Choice | Which gap is fixed first, and what is left broken, are both stated |
| Evidence | Every dependent field has a missing rate and a listed reason, or is marked unknown |
| Uncertainty | The direction of bias is named for each gap, and unbounded gaps are flagged |
| Alternatives | For each gap, exclude / model / refuse was considered and one was chosen |
| Owner | A contract owner accountable for noticing breakage, separate from the implementer |
| Revision trigger | A monitored threshold with an alert destination, not an intention to check |

Tell the learner they can stress-test this with `review-artifact`.
