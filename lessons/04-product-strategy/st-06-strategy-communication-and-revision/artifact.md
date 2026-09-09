---
artifact: Strategy narrative
lesson: ST-06
filename: artifacts/ST-06-strategy-narrative.md
---

# Artifact template · Strategy narrative

The tutor fills this in with the learner, using the learner's judgment and the
learner's evidence. Never invent a threshold, a metric, or a customer statement.
If a trigger's observable cannot be measured with the instrumentation that
exists today, say so in the artifact rather than choosing a number that looks
credible.

This artifact is written for other people to act from. Test it that way before
saving: read it as an account manager holding a live request.

Delete the guidance in parentheses in the finished artifact.

```markdown
# Strategy narrative · <product or product area>

- **Date:** <YYYY-MM-DD>
- **Holds until:** <date or condition>
- **Owner:** <who owns this strategy>
- **Who this is written for:** <the functions that must act from it>

## Where we are

<The diagnosis, stated so a reader could disagree with it. One paragraph. No
aspiration, no goal list.>

## What we are choosing

<The audience, the valued difference, and the capability behind it. One
paragraph.>

## What we are giving up

<Who now gets a worse product, which request type is declined even with revenue
attached, and what will not be built. Be specific enough that someone can say
the sentence out loud to a customer.>

## Why not the alternative

<State the strongest alternative in its best form, then say why it was rejected.
If the alternative is described weakly here, the whole narrative loses
credibility with the people who preferred it.>

## What this means for you

| Function | What changes | What to do differently this month |
|---|---|---|
| <account management> | <change> | <action> |
| <support> | <change> | <action> |
| <engineering / design> | <change> | <action> |

## Decision rules

| Recurring trade-off | Rule | What to say | What it displaces |
|---|---|---|---|
| <trade-off> | <what to do> | <the sentence to use with the customer or team> | <what is given up by following it> |

## What this does not cover

<Cases these rules were not designed for, and where they go. Include who decides
when the owner is unavailable. A rule applied outside its range carries your
authority without your judgment.>

## Revision triggers

| Kind | Observable | Threshold | Owner who sees it first | Pre-agreed response | Measurable today? |
|---|---|---|---|---|---|
| <falsified hypothesis> | <observable> | <number> | <person> | <specific response> | <yes / no — and what is missing> |
| <changed constraint> | <observable> | <number> | <person> | <response> | <yes / no> |
| <expiry> | <date or condition> | <n/a> | <person> | <re-decide deliberately> | <yes> |

## Exception rule

- **Who may approve an exception:** <person or role>
- **What must be recorded:** <the request, the reason, and what it displaced>
- **How many of one type force a review:** <number>
- **Where exceptions are recorded:** <location>

## Uncertainty

- **The part of this strategy I am least confident in:** <one line>
- **What I would need to become confident:** <evidence, and who could produce it>

## Absent-author test

<Record one real request, the decision you believe a colleague would reach using
this document alone, and the reason they would give. If the reason is a slogan,
the narrative is not finished.>

## Gaps

<Everything marked `<unknown>`, as open questions with who could close them.>
```

## Quality bar

Before saving, check all six exposures are present. Name any that are missing
rather than filling them in yourself:

| Exposure | Present when |
|---|---|
| Choice | The choice and the sacrifice are stated in language another function can use |
| Evidence | The diagnosis and the rejected alternative each rest on stated evidence |
| Uncertainty | The least confident part is named, with what would settle it |
| Alternatives | The strongest alternative is argued in its best form before rejection |
| Owner | Each decision rule and each trigger names a person, including cover when the owner is away |
| Revision trigger | Each trigger has observable, threshold, owner, response, and a measurability check |

Tell the learner they can stress-test this with `review-artifact`.
