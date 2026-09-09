// Builds lessons/manifest.json from lib/curriculum.ts.
//
// The manifest is the contract between the curriculum and the learning skills.
// Skills read it to resolve lesson paths, prerequisites, and content depth, so
// it must never be hand-edited — regenerate it instead:
//
//   npm run build:manifest
//
// Requires Node 22.13+ for TypeScript type stripping.

import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { curriculum, learningPaths, allLessons, totalMinutes } from "../lib/curriculum.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const RAW_BASE = "https://raw.githubusercontent.com/raziiabraham/core-pm/main/";

const kebab = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const phases = curriculum.map((phase) => {
  const phaseSlug = `${phase.number}-${kebab(phase.title)}`;

  const lessons = phase.lessons.map((item) => {
    const path = `lessons/${phaseSlug}/${item.slug}`;
    const hasBody = existsSync(join(root, path, "lesson.md"));
    const hasChecks = existsSync(join(root, path, "checks.json"));

    return {
      id: item.id,
      slug: item.slug,
      title: item.title,
      minutes: item.minutes,
      prerequisites: item.prerequisites,
      premise: item.premise,
      artifact: item.artifact,
      artifactSlug: kebab(item.artifact),
      path,
      // "full" means an authored lesson body exists. "outline" means the tutor
      // must teach from the premise, the phase model, and the Noted case.
      depth: hasBody ? "full" : "outline",
      hasChecks,
    };
  });

  return {
    id: phase.id,
    number: phase.number,
    slug: phaseSlug,
    title: phase.title,
    promise: phase.promise,
    domains: phase.domains,
    path: `lessons/${phaseSlug}`,
    // check-understanding loads lessons/<phase>/assessment.md when present and
    // generates one from the lesson list when it is not.
    hasAssessment: existsSync(join(root, "lessons", phaseSlug, "assessment.md")),
    lessonCount: lessons.length,
    minutes: lessons.reduce((sum, item) => sum + item.minutes, 0),
    lessons,
  };
});

const manifest = {
  course: "CORE / PM",
  tagline: "Re-own the judgment underneath product management.",
  repo: "https://github.com/raziiabraham/core-pm",
  rawBase: RAW_BASE,
  generatedBy: "scripts/build-lesson-manifest.mjs",
  stateFile: "PM-LEARNING.md",
  case: {
    name: "Noted",
    path: "lessons/noted/case.md",
  },
  totals: {
    phases: phases.length,
    lessons: allLessons.length,
    minutes: totalMinutes,
    hours: Math.round(totalMinutes / 60),
    authored: phases.reduce(
      (sum, phase) => sum + phase.lessons.filter((item) => item.depth === "full").length,
      0,
    ),
  },
  routes: learningPaths.map((path) => ({
    id: path.id,
    title: path.title,
    description: path.description,
    hours: path.hours,
    lessons: path.lessons,
  })),
  phases,
};

mkdirSync(join(root, "lessons"), { recursive: true });
writeFileSync(join(root, "lessons", "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);

console.log(
  `lessons/manifest.json — ${manifest.totals.lessons} lessons, ` +
    `${manifest.totals.authored} authored, ${manifest.totals.phases} phases, ` +
    `${manifest.routes.length} routes`,
);
