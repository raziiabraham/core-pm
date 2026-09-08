"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Lesson = {
  id: string;
  number: string;
  title: string;
  description: string;
  href: string;
  minutes: number;
};

type Phase = {
  number: string;
  verb: string;
  title: string;
  description: string;
  output: string;
  lessons: Lesson[];
};

export const coursePhases: Phase[] = [
  {
    number: "01",
    verb: "FRAME",
    title: "Re-own the product decision",
    description: "Turn competing signals into one bounded decision that can survive scrutiny.",
    output: "Decision & Problem Hypothesis",
    lessons: [
      { id: "lesson-01", number: "01", title: "Choose what deserves attention", description: "Bound the consequential choice before selecting the activity.", href: "/session-1/reading#attention", minutes: 12 },
      { id: "lesson-02", number: "02", title: "Form a product view", description: "Integrate evidence and judgment while preserving uncertainty.", href: "/session-1/reading#view", minutes: 12 },
      { id: "lesson-03", number: "03", title: "Earn the problem definition", description: "Link audience, problem, value, alternatives, and weakest claim.", href: "/session-1/reading#problem", minutes: 14 },
    ],
  },
  {
    number: "02",
    verb: "LEARN",
    title: "Make evidence earn the decision",
    description: "Build an evidence chain that updates the decision without overstating what is known.",
    output: "Evidence & Belief Update",
    lessons: [
      { id: "lesson-04", number: "04", title: "Choose evidence that can answer", description: "Match claim, method, metric meaning, and observability.", href: "/session-2/reading#unit-04", minutes: 13 },
      { id: "lesson-05", number: "05", title: "Build a defensible belief", description: "Preserve lineage, contradiction, segments, and known flaws.", href: "/session-2/reading#unit-05", minutes: 14 },
      { id: "lesson-06", number: "06", title: "Measure without false certainty", description: "Interpret estimates, error consequences, and result integrity.", href: "/session-2/reading#unit-06", minutes: 14 },
    ],
  },
  {
    number: "03",
    verb: "CHOOSE",
    title: "Turn evidence into direction",
    description: "Convert a calibrated belief into a strategic choice and visible trade-offs.",
    output: "Strategy & Constraint Choice",
    lessons: [
      { id: "lesson-07", number: "07", title: "Create a coherent strategy", description: "Link diagnosis, winning mechanism, exclusions, and revision triggers.", href: "/session-3/reading#unit-07", minutes: 13 },
      { id: "lesson-08", number: "08", title: "Make the portfolio portable", description: "Fund and sequence different forms of product value.", href: "/session-3/reading#unit-08", minutes: 13 },
      { id: "lesson-09", number: "09", title: "Reprice the technical choice", description: "Compare build, buy, adapt, defer, and no-build across lifecycle cost.", href: "/session-3/reading#unit-09", minutes: 14 },
    ],
  },
  {
    number: "04",
    verb: "COMMIT + LEARN",
    title: "Make the choice survivable",
    description: "Carry the choice through disagreement, delivery change, exposure, and learning.",
    output: "Product Decision Case",
    lessons: [
      { id: "lesson-10", number: "10", title: "Create commitment", description: "Separate participation, authority, confidence, dissent, and exact asks.", href: "/session-4/reading#unit-10", minutes: 13 },
      { id: "lesson-11", number: "11", title: "Adapt without taking over", description: "Change sequence and controls while preserving clear owners.", href: "/session-4/reading#unit-11", minutes: 13 },
      { id: "lesson-12", number: "12", title: "Learn without rewriting history", description: "Separate exposure, outcome, impact, decision quality, and luck.", href: "/session-4/reading#unit-12", minutes: 14 },
    ],
  },
];

const storageKey = "core-pm-progress-v1";

function readProgress(): string[] {
  try {
    const value = JSON.parse(window.localStorage.getItem(storageKey) ?? "[]");
    return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return [];
  }
}

export default function CourseCatalog() {
  const [completed, setCompleted] = useState<string[]>([]);
  const [ready, setReady] = useState(false);
  const lessons = useMemo(() => coursePhases.flatMap((phase) => phase.lessons), []);

  useEffect(() => {
    setCompleted(readProgress());
    setReady(true);
  }, []);

  function toggle(id: string) {
    setCompleted((current) => {
      const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id];
      window.localStorage.setItem(storageKey, JSON.stringify(next));
      return next;
    });
  }

  function reset() {
    window.localStorage.removeItem(storageKey);
    setCompleted([]);
  }

  const nextLesson = lessons.find((lesson) => !completed.includes(lesson.id)) ?? lessons[lessons.length - 1];
  const percent = Math.round((completed.length / lessons.length) * 100);

  return <>
    <section className="course-command" aria-label="Course progress">
      <div className="course-command-copy">
        <p>SELF-PACED · FREE · NO SIGN-UP</p>
        <h1>Re-own the<br /><em>PM core.</em></h1>
        <span>Twelve practical lessons for product managers who know the rituals and want to recover the judgment underneath them.</span>
        <div className="course-command-actions"><Link href={nextLesson.href}>{completed.length ? "Continue the course" : "Start lesson 01"} <i aria-hidden="true">›</i></Link><a href="#curriculum">Browse the curriculum</a></div>
      </div>
      <aside className="course-progress-card">
        <header><span>YOUR PROGRESS</span><b>{ready ? `${completed.length} / ${lessons.length}` : "— / 12"}</b></header>
        <div className="course-progress-track" aria-label={`${percent}% complete`}><i style={{ width: `${percent}%` }} /></div>
        <strong>{percent === 100 ? "Course complete" : nextLesson.title}</strong>
        <p>{percent === 100 ? "Your Product Decision Case is ready for a final review." : `Next · Lesson ${nextLesson.number} · ${nextLesson.minutes} min`}</p>
        {completed.length > 0 && <button type="button" onClick={reset}>Reset progress</button>}
        <small>Saved only in this browser.</small>
      </aside>
    </section>

    <section className="course-catalog" id="curriculum" aria-labelledby="curriculum-title">
      <header>
        <p>THE CURRICULUM</p>
        <h2 id="curriculum-title">One decision. Four phases. Twelve lessons.</h2>
        <span>Move in order the first time. Each phase adds a reviewable layer to the same Product Decision Case.</span>
      </header>
      <div className="course-phase-list">
        {coursePhases.map((phase) => {
          const phaseComplete = phase.lessons.filter((lesson) => completed.includes(lesson.id)).length;
          return <article className="course-phase" key={phase.number}>
            <header>
              <div><span>PHASE {phase.number}</span><em>{phase.verb}</em></div>
              <b>{phaseComplete} / 3</b>
              <h3>{phase.title}</h3>
              <p>{phase.description}</p>
            </header>
            <div className="course-lesson-list">
              {phase.lessons.map((lesson) => {
                const done = completed.includes(lesson.id);
                return <div className={done ? "course-lesson is-complete" : "course-lesson"} key={lesson.id}>
                  <button type="button" aria-pressed={done} aria-label={`${done ? "Mark incomplete" : "Mark complete"}: lesson ${lesson.number}`} onClick={() => toggle(lesson.id)}><span aria-hidden="true">{done ? "✓" : ""}</span></button>
                  <Link href={lesson.href}>
                    <small>LESSON {lesson.number} · {lesson.minutes} MIN</small>
                    <b>{lesson.title}</b>
                    <p>{lesson.description}</p>
                  </Link>
                  <i aria-hidden="true">›</i>
                </div>;
              })}
            </div>
            <footer><span>KEEP</span><b>{phase.output}</b><Link href={`/session-${Number(phase.number)}`}>Phase overview →</Link></footer>
          </article>;
        })}
      </div>
    </section>
  </>;
}

