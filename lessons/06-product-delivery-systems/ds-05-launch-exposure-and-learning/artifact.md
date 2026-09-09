---
artifact: Staged launch plan
lesson: DS-05
filename: artifacts/DS-05-staged-launch-plan.md
---

# Artifact template · Staged launch plan

**What this is.** A record of four separate decisions and the condition that reverses each one. It is not a release path — branches, checks, flags, and pipelines are delivery engineering.

The tutor fills this in with the learner, using the learner's judgment and the
learner's evidence. Never invent a threshold, an alert, a sample rate, or a
control the learner has not confirmed exists. Where something is unknown, write
`<unknown>` and carry it into the Gaps section. A threshold invented here will
be read on the day of an incident as though someone had chosen it.

If the learner's exposure control cannot be changed without an engineering
release, record that at the top. Every stage in this plan depends on it.

Delete the guidance in parentheses in the finished artifact.

```markdown
# Staged launch plan · <feature name>

- **Date:** <YYYY-MM-DD>
- **Commitment this delivers:** <link or name of the DS-01 brief>
- **Plan owner:** <person>
- **Exposure control moves without a release:** <yes | no — if no, this is the
  first gap to close, and say what it forces you to give up>

## The four decisions

| Decision | Control | Owner | Reversal condition | Who or what triggers the reversal |
|---|---|---|---|---|
| Deployment | <pipeline, dark deploy> | <person> | <when you roll back or forward> | <person or automated gate> |
| Exposure | <flag, allowlist, cohort, entitlement> | <person> | <the observation that closes the dial> | <person or alert> |
| Operational readiness | <runbook, alerts, on-call, kill switch> | <person> | <the stop rule> | <the alert, not a meeting> |
| Impact learning | <measure, comparison, window, readout> | <person> | <what changes when the claim fails> | <person> |

<No single person should hold all four. If one does, say so and name the
consequence rather than distributing them on paper.>

## Exposure ladder

| Stage | Who | How much | What depth | How visible | Entry gate | Exit gate (an observation, not a duration) |
|---|---|---|---|---|---|---|
| 1 | <population> | <share> | <which capability> | <silent / in-product / announced> | <what must be true to start> | <what must be observed to move on> |
| 2 | <...> | <...> | <...> | <...> | <...> | <...> |
| 3 | <...> | <...> | <...> | <...> | <...> | <...> |

**Irreversible step:** <the stage after which you cannot un-tell a customer the
capability exists, and what extra readiness that stage requires>

**Cannot be staged:** <any exposure that is genuinely all-or-nothing — a pricing
change, a legal notice, a published contract. Say so rather than designing a
ladder that does not exist.>

## Operational readiness checklist

<Must pass before stage 1 exposure. Not required before deployment.>

| Item | Status | Owner | Required before |
|---|---|---|---|
| Runbook for the known failure modes | <status> | <person> | Stage 1 exposure |
| Alerts and thresholds | <status> | <person> | Stage 1 exposure |
| Kill switch | <status> | <person> | Stage 1 exposure |
| Support scripts and escalation path | <status> | <person> | Stage 1 exposure |
| Capacity and cost limits | <status> | <person> | <stage> |

- **Who may pull the kill switch:** <names, including people outside engineering>
- **What happens to in-flight work when it is pulled:** <the honest answer,
  including data already written and outputs users have already acted on>

## AI evaluation boundary

<Complete this section for any feature whose output is probabilistic. Carry the
model from TJ-05.>

- **Evaluated before each stage:** <what is tested, on whose inputs>
- **Why the previous stage's evaluation does not transfer:** <the new input
  distribution this stage introduces>
- **Human review sample rate:** <starting rate, and the evidence that lowers it>
- **Why an error rate is insufficient:** <one sentence naming the failure that
  returns a successful response>
- **Human authority over the output:** <can the user see it was generated,
  correct it, and does the correction persist>
- **Degraded fallback mode:** <the lower-capability mode that is still useful,
  and whether it has been built>
- **Known blindness:** <what your evaluation structurally cannot segment or
  detect, given the data you actually capture>

## Impact learning plan

- **Claim being tested:** <the outcome claim from the commitment brief>
- **Measure definition:** <population, event, window, aggregation>
- **Exposed group:** <who> · **Unexposed comparison:** <who, and why they are
  comparable>
- **Stable window:** <start and end dates during which exposure does not change>
- **Readout date:** <YYYY-MM-DD, set before the window opens>
- **Reader obliged to act on it:** <person>
- **What this measurement cannot establish:** <the honest limits of your
  instrumentation and identity coverage>

## Stop-the-ladder condition

- **Observation:** <the specific thing that stops the rollout>
- **Threshold:** <the number, or `<unknown>` if you do not have one yet>
- **Who may call it:** <person>
- **What it re-opens:** <the commitment brief, the sequence, or the plan>

## Gaps

<Everything marked `<unknown>` above, listed as open questions with who could
close them and by when. A missing stop-rule threshold belongs here, visibly.>
```

## Quality bar

Before saving, check all six exposures are present. Name any that are missing
rather than filling them in yourself:

| Exposure | Present when |
|---|---|
| Choice | Deployment, exposure, readiness, and impact learning are four rows with four controls, not one launch date |
| Evidence | The impact plan names an exposed group, a comparison, a stable window, and what the measurement cannot establish |
| Uncertainty | The AI evaluation boundary names the known blindness, and unset thresholds are written as `<unknown>` |
| Alternatives | A degraded fallback mode is distinguished from rollback, and unstageable exposure is admitted rather than laddered |
| Owner | Each decision has a different owner, and the kill switch names who may pull it, including outside engineering |
| Revision trigger | Exit gates are observations rather than durations, and the stop-the-ladder condition names what it re-opens |

Tell the learner they can stress-test this with `review-artifact`.
