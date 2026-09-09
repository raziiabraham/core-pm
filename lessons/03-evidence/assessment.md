---
phase: EV
title: Evidence — phase assessment
lessons:
  - EV-01
  - EV-02
  - EV-03
  - EV-04
  - EV-05
  - EV-06
  - EV-07
---

> Tutor-facing file. The verdict table in Part 1 and every `→` line in Part 2 are for the tutor only. Do not show them to the learner before they have answered.

## Part 1 — Scenario

Small teams are where most paid conversion happens today. They run shared workspaces with light collaboration and growing file volume. File storage and retrieval is live. Individual knowledge workers are the largest population by count and mostly free. Analytics has known gaps: actor identity is missing for about 18% of events, and meeting type is not captured at all. The founder authored much of the research layer.

**Hypothetical development — labelled, not in the case.** Assume the founder writes this claim into a planning document: "Small teams convert to paid when their shared file volume grows past what the free plan allows, so lowering the free storage limit will raise conversion." Assume the founder wants to change the free limit next cycle and asks you what evidence is needed first. Assume nothing in the case tells you whether the product records when a workspace reaches a storage limit.

**Central move.** Design the evidence that could answer this claim: split it into claim types and fit a method to each, define the conversion metric with all five slots and a chosen unit, state what the instrumentation gaps do to that metric and what cannot be answered yet, say whether an experiment is possible and at what unit, and say how you will update if the sources disagree.

### Interrogate

Press on the weakest link. Ask "why" at least three times. Use this wording:

1. "Your plan measures conversion per user. Why per user? Paid conversion happens in shared workspaces, and actor identity is missing for about 18% of events. What does that gap do to a per-user denominator, and in which direction?"
2. "You proposed interviewing teams that recently converted. Why would that tell you about the storage limit? Who cannot appear in that frame, and what would you expect to hear from them if the claim were false?"
3. "You said an experiment could settle it. Why is a workspace the right unit? The exposed population is only the workspaces that reach the limit. If the smallest effect you could detect is larger than the effect that would change the founder's mind, what do you do?"

### Held / partly held / did not hold

| Verdict | What it looks like in the learner's answer |
|---|---|
| **Held** | The claim is split: existence (file volume grows before conversion), mechanism (the limit is the trigger, versus team size or collaboration need), causation (lowering the limit changes conversion). Each part gets a method that can observe it, and one that looks reasonable and cannot. The learner states that neither the founder's authorship nor request anecdotes establish prevalence or causation. The conversion metric fills population, event, window, aggregation, and value link, chooses the workspace as unit because conversion is a workspace event and identity is missing for 18% of events, and names a gaming or drift surface (a lower limit can push away teams that would have converted later — so a retention floor or counter-metric is named). The instrumentation question is asked: if reaching the limit is not recorded, there is no history and the earliest answer date is stated. The experiment, if proposed, assigns by workspace to prevent interference, states the exposure rate, declares intent-to-treat, and compares the minimum detectable effect with the effect that would change the decision. If qualitative and behavioural evidence disagree, the learner names the conflict shape and looks for a model that produces both rather than averaging. The learner commits: run the plan, commit without it, or decline the change. |
| **Partly held** | Most gates run, but one fails: correlation (file volume before conversion) is treated as causation; the metric is per user with no notice of the identity gap; the experiment is proposed without comparing detectable effect to decision-relevant effect; or conflicting sources are averaged into "storage probably matters somewhat". When pressed, the learner repairs it. |
| **Did not hold** | The main method is a survey asking small teams whether they would pay. Or the learner accepts the claim and designs evidence to confirm it — no result would flip the decision. Or the claim cannot be stated precisely enough to be wrong. |

## Part 2 — Boundary questions

One open question per lesson. Do not accept a restatement of the model as an answer.

**EV-01.** Fit and sufficiency assume more certainty can be bought and the decision waits for it. When is neither true, and what do you choose for instead?
→ When the date is fixed and evidence cannot arrive before the decision — as with the dependency losing support in ten weeks. Then you choose for recoverability, not certainty. A plan that gives the right answer after the deadline is worse than a fast, weak one.

**EV-02.** Qualitative work gives mechanism and context. What can it never establish, and what is the sharper limit in Noted?
→ Prevalence, magnitude, and causation — not with more sessions, not with better analysis. In Noted, sessions recruited from the three enterprise accounts share one channel, one relationship, one month, so the frame is not a sample of anything and cannot carry a prevalence claim.

**EV-03.** A metric with all five slots filled is well defined. What does that not make it, and what does redefining a metric do to its history?
→ Well defined is not the right metric: a tight "returned within seven days" measures a visit, not a document worth reopening. Redefining breaks the history; the 11% cannot be restated unless old events carry the new fields — and actor identity is missing for 18%. Start a new series, run the old one in parallel, refuse comparisons across the break.

**EV-04.** A tracking contract makes data checkable. What does it not make data, and which questions should not be answered by adding fields?
→ It does not make data true: an event records that an action occurred, not why or whether it was any good. And if answering needs the content of private work, the honest output is that the question is closed to instrumentation — written as a decision, not left as a ticket.

**EV-05.** Supervising a query catches analysis errors. What can it not catch, and whose job is the correction?
→ It cannot catch a correct query on wrong data, or a correct query answering an irrelevant question. When an analyst owns the query, the PM's output is checks and a withheld conclusion, not a rewrite. Where no analyst exists and the data is yours, the rule inverts and running the query is a separate skill.

**EV-06.** Experiments estimate causal effects inside four walls. When do they break down, and what can no design tell you?
→ When the treatment cannot be confined to an arm, when the effect is slow or the outcome rare, or when the population is too small to randomise — three enterprise accounts. And no experiment can tell you whether the metric it moved was the right thing to move.

**EV-07.** Belief updating works over candidate models. What is its blind spot, and when is holding two live models legitimate?
→ It only updates over the models on the table; if the true one is absent, you grow confident in the best of a bad set — so deliberately generate the model nobody wants. Holding two models is legitimate only with a named discriminating observation and a date by which you will have it.

## Part 3 — Recall

Draw 5 to 8 multiple-choice questions from these files. One at a time, lettered options, correct option kept private.

- `lessons/03-evidence/ev-01-evidence-fit-and-sufficiency/checks.json`
- `lessons/03-evidence/ev-02-qualitative-evidence-and-synthesis/checks.json`
- `lessons/03-evidence/ev-03-measurement-models-and-metrics/checks.json`
- `lessons/03-evidence/ev-04-instrumentation-and-data-contracts/checks.json`
- `lessons/03-evidence/ev-05-data-reasoning-and-sql-supervision/checks.json`
- `lessons/03-evidence/ev-06-experiment-and-causal-judgment/checks.json`
- `lessons/03-evidence/ev-07-triangulation-and-belief-updating/checks.json`

Spread across all seven lessons, and take extra questions from the lessons whose moves Part 1 exposed as weak (for example, more from EV-03 and EV-04 if the unit and the identity gap were missed, or more from EV-06 if the detectable effect was never compared to the decision).
