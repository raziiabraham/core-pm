# CORE / PM

> Re-own the product-management judgment underneath the rituals.

CORE / PM is an open, self-paced curriculum for practicing product managers. It turns a broad Reforge source library into one coherent learning system: **43 lessons, 7 phases, 4 learning paths, and one reusable artifact per lesson**.

## Start here

| Your goal | Route |
|---|---|
| Build the complete PM foundation | Complete foundation · 43 lessons · ~23 hours |
| Practice one decision end to end | Decision field path · 12 lessons · ~6 hours |
| Own technical and AI product choices | Technical + AI judgment · 13 lessons · ~7 hours |
| Scale judgment through other PMs | Product leadership · 15 lessons · ~8 hours |

Open the curriculum in the site and choose a path, or read [`CURRICULUM.md`](CURRICULUM.md) for the repository guide. The exact path manifests are in [`learning-paths/README.md`](learning-paths/README.md).

## The seven phases

1. Problem Framing
2. Product Judgment
3. Evidence
4. Product Strategy
5. Technical Judgment
6. Product Delivery Systems
7. Product Leadership

Every lesson follows the same contract:

1. understand the product failure;
2. learn the durable concept and its boundary;
3. practice it on the shared Noted case;
4. transfer it to a real product;
5. ship a reusable artifact;
6. check whether the reasoning survives scrutiny.

## Source foundation

The curriculum synthesizes 563 PDFs across nine Reforge programs: Mastering Product Management, Finding Product-Market Fit, User Insights, Data for Product Managers, Experimentation + Testing, Product Strategy, Technical Strategy, Scaling Product Delivery, and Product Leadership.

The original four-phase, twelve-lesson field course remains in the repository as the deepest applied path. Its Noted case, exhibits, evidence boundaries, decision prompts, and cumulative Product Decision Case are reused throughout the broader curriculum.

## Repository map

```text
app/
  learn/[lesson]/     atomic lesson reader
  session-*/reading/  deep applied field-path lessons
  noted/              shared product decision case
lib/curriculum.ts     43-lesson manifest and prerequisites
learning-paths/       route definitions
CURRICULUM.md         course guide
LESSON_TEMPLATE.md    lesson invariant
tests/                rendered curriculum checks
```

## Run locally

```bash
npm install
npm run dev
npm test
```

Progress is stored only in the learner's browser. The course and *PM Is Now Another Member of Technical Staff* stand independently; the course rebuilds the PM core, while the book extends the role into deeper specialist contribution.
