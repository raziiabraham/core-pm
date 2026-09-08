"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { allLessons, curriculum, learningPaths, totalMinutes } from "@/lib/curriculum";

const storageKey = "core-pm-progress-v2";

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
  const [activePath, setActivePath] = useState("complete");
  const [ready, setReady] = useState(false);
  const selectedPath = learningPaths.find((path) => path.id === activePath) ?? learningPaths[0];
  const selectedIds = useMemo(() => new Set(selectedPath.lessons), [selectedPath]);

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

  const pathLessons = selectedPath.lessons.map((id) => allLessons.find((item) => item.id === id)).filter((item) => item !== undefined);
  const pathCompleted = pathLessons.filter((item) => completed.includes(item.id)).length;
  const nextLesson = pathLessons.find((item) => !completed.includes(item.id)) ?? pathLessons.at(-1);
  const percent = Math.round((pathCompleted / pathLessons.length) * 100);

  return <>
    <section className="course-command" aria-label="Course introduction and progress">
      <div className="course-command-copy">
        <p>OPEN CURRICULUM · SELF-PACED · NO SIGN-UP</p>
        <h1>Re-own the<br /><em>PM core.</em></h1>
        <span>A living product-management curriculum: 43 atomic lessons, seven phases, four learning paths, and an artifact from every lesson.</span>
        <div className="course-command-actions">
          {nextLesson && <Link href={`/learn/${nextLesson.slug}`}>{pathCompleted ? "Continue your path" : "Start learning"} <i aria-hidden="true">›</i></Link>}
          <a href="#paths">Choose a path</a>
        </div>
      </div>
      <aside className="course-progress-card">
        <header><span>{selectedPath.title.toUpperCase()}</span><b>{ready ? `${pathCompleted} / ${pathLessons.length}` : `— / ${pathLessons.length}`}</b></header>
        <div className="course-progress-track" aria-label={`${percent}% complete`}><i style={{ width: `${percent}%` }} /></div>
        <strong>{percent === 100 ? "Path complete" : nextLesson?.title}</strong>
        <p>{percent === 100 ? "Review the artifacts you produced across the path." : nextLesson ? `Next · ${nextLesson.id} · ${nextLesson.minutes} min` : "Choose a learning path."}</p>
        {completed.length > 0 && <button type="button" onClick={reset}>Reset progress</button>}
        <small>Progress stays in this browser.</small>
      </aside>
    </section>

    <section className="course-paths" id="paths" aria-labelledby="paths-title">
      <header><p>START HERE</p><h2 id="paths-title">Choose the route that matches the work.</h2><span>The lessons remain the same. A path changes the order and depth—not the standard.</span></header>
      <div>{learningPaths.map((path) => <button className={path.id === activePath ? "is-active" : ""} key={path.id} type="button" onClick={() => setActivePath(path.id)}>
        <span>{String(path.lessons.length).padStart(2, "0")} LESSONS · ~{path.hours} HOURS</span><b>{path.title}</b><p>{path.description}</p><i>{path.id === activePath ? "Selected" : "Choose path"} →</i>
      </button>)}</div>
    </section>

    <section className="course-catalog" id="curriculum" aria-labelledby="curriculum-title">
      <header>
        <p>THE CURRICULUM</p>
        <h2 id="curriculum-title">Seven phases. Forty-three lessons. One body of judgment.</h2>
        <span>{Math.round(totalMinutes / 60)} hours of core study. Follow the complete sequence or show only the lessons in your selected path.</span>
      </header>
      <div className="course-phase-list">
        {curriculum.map((phase) => {
          const visibleLessons = phase.lessons.filter((item) => selectedIds.has(item.id));
          if (!visibleLessons.length) return null;
          const phaseComplete = visibleLessons.filter((item) => completed.includes(item.id)).length;
          return <article className="course-phase" key={phase.id}>
            <header>
              <div><span>PHASE {phase.number}</span><em>{phase.id}</em></div>
              <b>{phaseComplete} / {visibleLessons.length}</b>
              <h3>{phase.title}</h3>
              <p>{phase.promise}</p>
              <small>{phase.sourcePrograms.join(" · ")}</small>
            </header>
            <div className="course-lesson-list">
              {visibleLessons.map((item) => {
                const done = completed.includes(item.id);
                return <div className={done ? "course-lesson is-complete" : "course-lesson"} key={item.id}>
                  <button type="button" aria-pressed={done} aria-label={`${done ? "Mark incomplete" : "Mark complete"}: ${item.id}`} onClick={() => toggle(item.id)}><span aria-hidden="true">{done ? "✓" : ""}</span></button>
                  <Link href={`/learn/${item.slug}`}><small>{item.id} · {item.minutes} MIN</small><b>{item.title}</b><p>{item.premise}</p></Link>
                  <i aria-hidden="true">›</i>
                </div>;
              })}
            </div>
            <footer><span>PHASE OUTPUT</span><b>{visibleLessons.at(-1)?.artifact}</b><span>{phase.lessons.length} lessons in full phase</span></footer>
          </article>;
        })}
      </div>
    </section>
  </>;
}
