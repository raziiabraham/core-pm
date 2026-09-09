---
artifact: AI system decision record
lesson: TJ-05
filename: artifacts/TJ-05-ai-system-decision-record.md
---

# Artifact template · AI system decision record

**What this is.** A record of what good enough means before anything is built, and who holds authority when the system is wrong. It is not an evaluation harness — building the eval set, scoring rubric, and regression suite is separate work.

The tutor fills this in with the learner, using the learner's judgment. Never
invent an accuracy figure, a model name, a per-call price, a benchmark result,
or a customer quote. If the quality bar has not been decided, that is the first
thing to fix, not a cell to fill in. Where a number is not known, write
`<unknown>` and carry it into Gaps. A record with an invented accuracy number
is worse than one with a blank, because it will be treated as a commitment.

Write the quality bar section first, with the learner, before any other
section. If the learner revises it downward later, record that they did and
why.

Delete the guidance in parentheses in the finished artifact.

```markdown
# AI system decision record · <feature>

- **Date:** <YYYY-MM-DD>
- **Product:** <product>
- **Decision:** <build now / test the claim first / build a bounded version to test the claim>
- **Owner of the consequence:** <person or role>
- **Specialist authority:** <who owns model, retrieval, and prompt decisions>

## The job and the claim

- **Job this feature is meant to complete:** <in the user's terms>
- **Underlying claim it assumes:** <the belief about the user's world that must
  be true for this to matter>
- **Status of that claim:** <tested / untested> — <what evidence exists>
- **What the requests establish:** <what the demand signal proves>
- **What they do not establish:** <prevalence, independence, mechanism>

## 1 · Quality bar

<Written before design. A bar with adjectives and no number is not a bar.>

| Part | Entry |
|---|---|
| Must never be wrong | <fields where a single error is unacceptable> |
| May be imperfect | <fields the team should not optimise> |
| Target rate | <a number, on a stated denominator> |
| Sample | <what it is scored on, chosen before results are seen> |
| Judge | <who scores, and how disagreement is settled> |
| Blocks launch if | <the result that stops the release> |

**Revisions to this bar:** <date, what changed, why. Leave the original visible.>

## 2 · Context boundary

| Question | Decision |
|---|---|
| What it may see | |
| What it must never see | |
| Freshness required | |
| Whose permissions apply | <asker / people in the source material / workspace> |
| Who decided | |

**Permission failure this creates:** <the specific case where someone could see
what they should not, and what prevents it>

## 3 · Evaluation method

| Method | What it covers | Cadence | Who runs it | What the result gates |
|---|---|---|---|---|
| Offline evaluation | <fixed sample> | | | |
| In-product signal | <edits, deletions, regenerations, corrections> | | | |

**What this evaluation cannot cover:** <the part of the real distribution your
sample cannot represent, and why>

## 4 · Authority boundary

| Action | Autonomy | Error cost | Reversibility | Why this level |
|---|---|---|---|---|
| <action> | <acts alone / proposes / requires approval> | <cost> | <cheap / costly / public and late> | <argument> |

## 5 · Failure boundary

| Failure | What it looks like here | Who detects it | Detection method | User-visible | Recovery |
|---|---|---|---|---|---|
| Fabrication | | | | | |
| Omission | | | | | |
| Misattribution | | | | | |
| Staleness | | | | | |
| Permission leak | | | | | |
| Refusal or empty output | | | | | |
| Silent degradation | | <name a person> | <name a signal> | no | |

## 6 · Cost boundary

| Question | Entry |
|---|---|
| What drives cost per use | <length, frequency, retrieved context, retries> |
| How cost scales | <with seats / with usage / with document count> |
| Ceiling | <the limit, and what happens when it is reached> |
| Latency budget | <the point past which you return nothing rather than wait> |

## Position

- **Recommendation:** <one sentence>
- **What would make you stop:** <the result that ends this line of work>
- **Displaced work:** <what does not happen if this proceeds>
- **Confidence:** <low | moderate | high> — <why>
- **Strongest reason this is wrong:** <the best argument against your own decision>

## Off switch

- **Condition to disable after launch:** <observable and threshold>
- **Who can disable it without a meeting:** <name or role>
- **How long that takes:** <time>

## Revision trigger

<The observation and threshold that would force this record to be rewritten
rather than adjusted.>

## Gaps

<Everything marked `<unknown>` above, as open questions, each with the person
who could close it.>
```

## Quality bar

Before saving, check all six exposures are present. Name any that are missing
rather than filling them in yourself:

| Exposure | Present when |
|---|---|
| Choice | One path is chosen — build, test the claim, or build a bounded test — and the stop condition is stated |
| Evidence | The demand signal's limits are written down, and no accuracy number appears without a source |
| Uncertainty | The quality bar carries a number and a sample, and what the evaluation cannot cover is stated |
| Alternatives | Testing the underlying claim first is treated as a live option, not a formality |
| Owner | Silent degradation has a named watcher, and the off switch has a named person and a time |
| Revision trigger | An observable and a threshold, separate from the off switch condition |

Tell the learner they can stress-test this with `review-artifact`.
