---
artifact: Audience boundary
lesson: PF-05
filename: artifacts/PF-05-audience-boundary.md
---

# Artifact template · Audience boundary

The tutor fills this in with the learner, using the learner's judgment and the
learner's evidence. Never invent a persona, a job title, a motivation, or a
population count. Never blend behaviours from different observed people into one
described user. Where an element is not observed, mark it `<inferred>`; where it
is unavailable, write `<unknown>` and carry it into Gaps.

Delete the guidance in parentheses in the finished artifact.

```markdown
# Audience boundary · <short audience name>

- **Date:** <YYYY-MM-DD>
- **Product:** <product>
- **Linked decision:** <the decision from PF-01 this audience serves>
- **Linked mechanism:** <the mechanism from PF-02 that only bites for this group>

## The label being replaced

> <The audience exactly as the roadmap, deck, or ticket currently states it.>

| Term in the label | Observable in product | Observable by asking | Not observable |
|---|---|---|---|
| <term> | <yes/no> | <yes/no> | <yes/no> |

## The boundary

**Behaviour**

<What these people do, observably and more than once. A verb a person performs,
not a state they are in.>

**Context**

<The conditions under which the problem actually occurs. Not the setting in
general — the condition that makes the behaviour costly.>

**Frequency**

<How often the behaviour must occur for someone to be inside the boundary, and
whether that threshold is observed or chosen.>

## Element status

(One row per element of the boundary above. Count the `<inferred>` rows at the
end. An unmarked assumption is the failure this table exists to catch.)

| Element | Observed | Inferred | Unknown | Basis |
|---|---|---|---|---|
| <element> | <x> | | | <source> |
| <element> | | <x> | | <what you reasoned from> |

- **Inferred elements:** <count>
- **Does the boundary still identify anyone if every inferred element is false?**
  <yes: which | no — then the boundary rests on assumption>

## Deliberately outside

| Population | Why excluded | Who will object |
|---|---|---|
| <a population that resembles the audience> | <reason> | <person or role> |
| <a second one> | <reason> | <person or role> |

## Identification

- **Method:** <event query | screening question | not identifiable today>
- **If a proxy is used:** <what it stands for>
  - **Wrongly includes:** <who>
  - **Wrongly excludes:** <who>
- **Query or screening question, written out:** <the actual text a researcher or
  analyst would use>

## Size

- **Count today:** <number | `<unknown>`>
- **How it was obtained:** <query, or why it cannot be obtained>
- **If unobservable, say so here rather than estimating.** <statement>

## Product-state constraint

<Which capabilities this audience's behaviour depends on, and whether each is
live, in design, or planned. If the behaviour requires something not yet live,
say whether this audience can currently exist inside the product at all.>

## Redraw trigger

<The observation that would make you redraw this boundary — for example, finding
that the behaviour clusters in a population you excluded.>

## Gaps

<Everything marked `<unknown>` above, as open questions, with who could close
each one.>
```

## Quality bar

Before saving, check all six exposures are present. Name any that are missing
rather than filling them in yourself:

| Exposure | Present when |
|---|---|
| Choice | The linked decision is named, and the boundary changes who the decision is for |
| Evidence | Every element is marked observed, inferred, or unknown, with its basis |
| Uncertainty | Population size is either queried or declared unobservable — never estimated |
| Alternatives | At least two resembling populations are excluded, with reasons and named objectors |
| Owner | Identification names the method and, where it is a proxy, its error direction |
| Revision trigger | A redraw condition is stated as an observation, not an intention |

Tell the learner they can stress-test this with `review-artifact`.
