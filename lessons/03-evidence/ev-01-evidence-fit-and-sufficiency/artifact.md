---
artifact: Evidence plan
lesson: EV-01
filename: artifacts/EV-01-evidence-plan.md
---

# Artifact template · Evidence plan

**What this is.** A record of which method can answer your claim and when you will stop looking. It is not a research operations plan — sourcing, lineage, and running the study are separate work this course does not cover.

The tutor fills this in with the learner, using the learner's judgment and the
learner's evidence. Never invent a number, a quote, a sample size, or a source.
Where something is unknown, write `<unknown>` and carry it into the Gaps
section. A named gap is a finding. A fabricated one is a liability.

Delete the guidance in parentheses in the finished artifact.

```markdown
# Evidence plan · <short decision name>

- **Date:** <YYYY-MM-DD>
- **Product:** <product>
- **Decision this serves:** <one sentence, from your PF-01 decision brief>
- **Requested from:** <who must fund, staff, or unblock this work>

## Claims to be supported

(Split any claim that mixes two types. One row per single-type claim.)

| # | Claim | Type (existence / prevalence / mechanism / magnitude / causation / preference) | Load-bearing? |
|---|---|---|---|
| 1 | <claim> | <type> | <yes — the decision turns on it / no> |
| 2 | <claim> | <type> | <yes / no> |

## Method fit

| Claim # | Method chosen | Why this method can observe this claim type | A method that would look reasonable and cannot |
|---|---|---|---|
| 1 | <method> | <reason> | <method, and what it would miss> |

## What this evidence cannot establish

<Write the shadow of each method before collecting. This is the sentence that
stops a finding from growing in the retelling.>

- <Method> can show <X>. It cannot show <Y>.

## Sufficiency

- **Reversibility of the decision:** <reversible | costly to reverse | one-way>
- **Blast radius:** <who is exposed if this is wrong>
- **Cost of the evidence:** <time, money, and who is blocked while it runs>
- **Option value of waiting:** <what new information arrives if you wait, or none>
- **Sufficiency level:** <the specific result strength at which you will commit>

## Flip test

- If the result comes back <A>, I will <action>.
- If the result comes back <B>, I will <different action>.
- If both actions are the same, this plan is not research. State that here and
  say what the work is really for.

## Ambiguous observations

(Facts that have more than one honest reading — silent support tickets, a flat
line, an absent segment. Do not resolve them by assumption.)

| Observation | Reading 1 | Reading 2 | Observation that would separate them |
|---|---|---|---|
| <fact> | <reading> | <reading> | <what you would look at> |

## Plan and cost

| Step | Method | Who runs it | Elapsed time | Blocks what |
|---|---|---|---|---|
| 1 | <method> | <person or role> | <days> | <what waits> |

## Position

- **Current position:** <run the plan | commit now without it | decline>
- **Confidence:** <low | moderate | high> — <why, in one line>
- **Strongest reason this plan is wrong:** <the best argument against it>

## Revision trigger

<The observation and threshold that would make you stop the plan early, extend
it, or abandon the decision it serves. Name the observable and the number.>

## Gaps

<Everything marked `<unknown>` above, listed as open questions with who could
close them.>
```

## Quality bar

Before saving, check all six exposures are present. Name any that are missing
rather than filling them in yourself:

| Exposure | Present when |
|---|---|
| Choice | The decision this evidence serves is stated as a choice, not a topic |
| Evidence | Every claim has a type, a fitted method, and a written limit |
| Uncertainty | A sufficiency level is set by the decision, not by comfort |
| Alternatives | At least one plausible method is named and rejected with a reason |
| Owner | Who runs each step, and who is blocked while it runs, are both named |
| Revision trigger | A condition that would stop or extend the plan, with a threshold |

Tell the learner they can stress-test this with `review-artifact`.
