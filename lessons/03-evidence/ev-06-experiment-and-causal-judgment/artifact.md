---
artifact: Experiment decision memo
lesson: EV-06
filename: artifacts/EV-06-experiment-decision-memo.md
---

# Artifact template · Experiment decision memo

**What this is.** A record of the decision an experiment is meant to settle and the sentence its result will license. It is not a test design — sample size, power, and assignment mechanics are specialist work.

The tutor fills this in with the learner, using the learner's design and the
learner's judgment. Never invent a baseline rate, an exposure rate, a sample
size, or a detectable effect. Where a number is not known, write `<unknown>` and
carry it into the Gaps section. A memo with an unknown exposure rate is honest;
a memo with a guessed one is a result nobody can interpret later.

This memo is written **before** the result arrives. Do not edit the decision
rules after seeing data.

Delete the guidance in parentheses in the finished artifact.

```markdown
# Experiment decision memo · <experiment name>

- **Date written:** <YYYY-MM-DD, before launch>
- **Product:** <product>
- **Decision this serves:** <one sentence>
- **Owner of the consequence:** <person or role>

## Causal question

<One sentence naming the treatment, the comparison, the population, and the
outcome. If it contains "understand" or "explore", it is not a causal question.>

## Wall 1 · Assignment

- **Unit of assignment:** <user | workspace | account | device>
- **Units rejected:** <unit> — <why>, <unit> — <why>
- **Interference this prevents:** <how entities in one arm could otherwise affect the other>
- **Price paid:** <effective sample size, and the effect this makes it harder to detect>
- **Assignment moment:** <when, and why it precedes exposure>
- **Identity risks:** <cross-device, signed-out, or missing-identity paths that could place one person in both arms, and the mitigation>
- **Balance checks planned:** <what you will check, before unblinding>

## Wall 2 · Exposure

- **Where the treatment appears:** <surface and condition>
- **Expected exposure rate:** <%> or `<unknown>` — <basis for the expectation>
- **How exposure will be measured:** <event and field>
- **Primary analysis:** intent to treat — <state it plainly>
- **If exposure comes in far below expectation:** <what you will do>

## Wall 3 · Measurement

- **Primary outcome:** <metric, from your EV-03 definition>
- **Outcome window:** <duration and anchor>
- **Assignment period:** <duration>
- **Run length:** <assignment period + full outcome window>
- **Guardrail:** <the counter-metric that degrades if the primary is moved the cheap way>
- **Secondary outcomes:** <listed, and explicitly not decision-bearing>
- **Instrumentation parity check:** <the pre-launch check that both arms record the same events, with the same actor, at the same moment>
- **Specific way the new code path could break the outcome:** <name it>

## Wall 4 · Inference

- **Effect that would change the decision:** <number, written before any power calculation>
- **Minimum detectable effect:** <number> or `<unknown>`
- **If MDE is larger than the decision-relevant effect:** <redesign | do not run | decide without it>
- **Stopping rule:** <fixed end date, or a stated sequential method — not "check daily and stop when significant">
- **Segments declared in advance:** <list them; anything found later is a hypothesis, not a finding>

## Decision rules, pre-committed

| Result | Action |
|---|---|
| <positive, above the decision-relevant effect> | <action> |
| <positive but below it> | <action> |
| <null> | <action> |
| <guardrail degrades> | <action, regardless of the primary> |

## Statements this result will license

- **Allowed:** "<one sentence, with population, period, and metric attached>"
- **Not allowed:** "<the sentence people will want to write instead>"

## If the result is null

<Distinguish the three cases and say how you will tell them apart: no effect; an
effect smaller than the design could detect; an effect hidden by low exposure.>

## Position

- **Recommendation:** <run | run with a different unit | do not run>
- **If not running, what instead:** <the alternative>
- **Confidence in the design:** <low | moderate | high> — <why, in one line>
- **Strongest reason this design is wrong:** <the best argument against it>

## Revision trigger

<What would stop the experiment early or invalidate it mid-flight — a broken
assignment check, an instrumentation difference between arms, an exposure rate
far below plan. Name the observable and the threshold.>

## Gaps

<Everything marked `<unknown>` above, listed as open questions with who could
close them before launch.>
```

## Quality bar

Before saving, check all six exposures are present. Name any that are missing
rather than filling them in yourself:

| Exposure | Present when |
|---|---|
| Choice | Decision rules are pre-committed for every result, including null |
| Evidence | All four walls are stated, with the exposure rate and outcome window explicit |
| Uncertainty | MDE is compared to the decision-relevant effect, and null is decomposed |
| Alternatives | The rejected assignment units are named, and "do not run" was considered |
| Owner | Consequence owner named, separate from whoever implements assignment |
| Revision trigger | A mid-flight condition that would stop or invalidate the run |

Tell the learner they can stress-test this with `review-artifact`.
