---
artifact: Executive decision memo
lesson: LD-07
filename: artifacts/LD-07-executive-decision-memo.md
---

# Artifact template · Executive decision memo

The tutor fills this in with the learner's judgment and the learner's evidence.
Never invent a number, a customer, or — most importantly here — someone else's
argument. If the learner has not heard the dissenting position from the person
who holds it, the entry is `<unknown>` plus a note to ask before sending. A
constructed counterargument is recognized instantly by the one reader who holds
the real one.

The finished memo fits on one page. Everything below that does not bear on the
decision gets cut.

Delete the guidance in parentheses in the finished artifact.

```markdown
# <Decision name> — decision requested by <date>

**Recommendation:** <one sentence, first line, no preamble.>

**Ask:** <Approve X | Resolve the conflict between A and B | Unblock <constraint>
| Note only, no action needed> — from <named person>, by <date>.

**If no answer by <date>:** <what happens by default. This line converts silence
into a decision.>

## Context

<Two or three sentences. Why this is in front of the reader now, and what closes
or expires. Not a history of the work.>

## What is given up

| Displaced | Who bears it | Recoverable? |
|---|---|---|
| <the specific work or option that loses> | <person or team> | <yes / costly / no> |

## Confidence

- **Confidence in the recommendation:** <low | moderate | high>
- **What it rests on:** <the evidence, with its population, window, and limit>
- **Where the estimate is a range:** <state the range and what the range depends
  on. Do not collapse a wide range into a single number to look decisive.>
- **What is not yet checked:** <assumptions nobody has verified>

## Dissent

| Who | Their case, in their strongest form | What would make them right | What I did about it |
|---|---|---|---|
| <name and role> | <a paragraph they would sign — not a version built to be answerable> | <the observation, not the sentiment> | <what changed, or why nothing did> |

<`<unknown>` here means you have not asked them. Ask before sending.>

## Detail

<Only what a reader would need if they choose to look. Anything that does not
change the decision belongs elsewhere.>

## Circulation

| Reader | Role | Sees it before the decision-maker? | Objection recorded above? |
|---|---|---|---|
| <name> | <carries consequence / decides / informed> | <yes / no> | <yes — row n / not yet> |

## Author's notes (not part of the memo)

- **Cover test:** <Would I have written this if I were confident? If no, what am
  I actually seeking, and what would I decide myself?>
- **Under my LD-02 rights map, this decision belongs to:** <person — check that
  it is not me>
- **Cut from the one-page version:** <what was removed, and confirmation that
  nothing decision-bearing left with it>
- **The sentence I most wanted to delete:** <the line that weakens my case —
  kept, because <reason>>
```

## Quality bar

Before saving, check all six exposures are present. Name any that are missing
rather than filling them in yourself:

| Exposure | Present when |
|---|---|
| Choice | A recommendation is stated in the first line, and the ask names one of the four forms |
| Evidence | Each load-bearing claim has a source, population, window, and limit; ranges stay ranges |
| Uncertainty | Confidence is stated with its basis, and unverified assumptions are listed |
| Alternatives | The displaced option is named with who bears it, and dissent is stated in a form the dissenter would sign |
| Owner | The ask names the person who must answer, and the notes confirm the decision is not the author's own |
| Revision trigger | A date is set, and the default if no answer is written down |

Two further tests specific to this artifact:

1. Read only the first paragraph and the ask. Could a reader act? If not, the
   recommendation is buried.
2. Show the dissent row to the person named in it. If they would not sign it,
   rewrite it in their words.

Tell the learner they can stress-test this with `review-artifact`.
