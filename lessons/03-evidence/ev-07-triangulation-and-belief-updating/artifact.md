---
artifact: Belief update ledger
lesson: EV-07
filename: artifacts/EV-07-belief-update-ledger.md
---

# Artifact template · Belief update ledger

The tutor fills this in with the learner, using the learner's evidence and the
learner's judgment. Never invent an observation, a source, or a confidence
number. Never resolve a conflict on the learner's behalf, and never allow an
averaged position to be written into the ledger. Where something is unknown,
write `<unknown>` and carry it into the Gaps section.

This is a running document. Append updates; do not rewrite history. A ledger
whose earlier entries have been tidied is worth nothing.

Delete the guidance in parentheses in the finished artifact.

```markdown
# Belief update ledger · <product area>

- **Opened:** <YYYY-MM-DD>
- **Product:** <product>
- **Decision this serves:** <one sentence, from your PF-01 decision brief>

## The claim

<Stated precisely enough to be wrong. Include population and window.>

## Evidence on the table

| # | Source | Method | Population | Window | Failure mode |
|---|---|---|---|---|---|
| A | <source> | <method> | <who> | <when> | <how this source fails> |
| B | <source> | <method> | <who> | <when> | <how this source fails> |

**Independence:** <Do any two sources share a failure mode? If yes, say so and
stop counting their agreement as corroboration.>

## Conflict

- **What A says:** <one sentence>
- **What B says:** <one sentence>
- **Shape of the conflict:** <different populations | different constructs | different windows | one is wrong | both right and the claim is wrong>
- **Why the other four shapes are ruled out:** <one line each>

## The averaged sentence I am refusing

> <Write it out. Then say in one line why no observation could refute it.>

## Candidate models

(At least three. One must not involve the obvious cause. One should be a model
you would prefer not to be true.)

| Model | What A would look like if true | What B would look like if true | Fits both? |
|---|---|---|---|
| 1 · <model> | <expected observation> | <expected observation> | <yes / strained / no> |
| 2 · <model> | <expected observation> | <expected observation> | <yes / strained / no> |
| 3 · <model you do not want to be true> | <expected observation> | <expected observation> | <yes / strained / no> |

## Surviving model

- **Model:** <the one that predicts both observations without strain>
- **Additional observation it predicts that the others do not:** <the discriminating observation>
- **Who could get that observation, and by when:** <person, date>

## Update log

(Append only. One row per update.)

| Date | Belief | Prior strength | Observation | Diagnostic? | New strength | Reason |
|---|---|---|---|---|---|---|
| <date> | <claim> | <weak / moderate / strong> | <what arrived> | <yes / no — equally likely under both models?> | <weak / moderate / strong> | <one line> |

**Downgrades in this ledger:** <count>. <If zero, say what would have produced
one. A ledger with no downgrades is a collection, not an update history.>

## Position

- **What you now believe:** <one sentence>
- **Strength:** <weak | moderate | strong> — <why, in one line>
- **What you will do next:** <action>
- **What you refuse to do until the discriminating observation arrives:** <state it>
- **Strongest reason this position is wrong:** <the best argument against it>

## Held open

<Any conflict you are deliberately not resolving. Must carry the observation
that would separate the models and a date. Without both, this section is a way
of avoiding a decision that is already due.>

## Revision trigger

<The observation and threshold that would move this belief again. Name the
observable and the number.>

## Gaps

<Everything marked `<unknown>` above, listed as open questions with who could
close them.>
```

## Quality bar

Before saving, check all six exposures are present. Name any that are missing
rather than filling them in yourself:

| Exposure | Present when |
|---|---|
| Choice | A position is committed, and what it defers is named with a date |
| Evidence | Each source has a population, a window, and a stated failure mode |
| Uncertainty | Strength is stated, and non-diagnostic evidence is marked as changing nothing |
| Alternatives | Three real candidate models, including one the author dislikes |
| Owner | Someone is named for the discriminating observation |
| Revision trigger | An observable and a threshold that would move the belief again |

Tell the learner they can stress-test this with `review-artifact`.
