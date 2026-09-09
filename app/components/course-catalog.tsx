"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { allLessons, curriculum, learningPaths, totalMinutes } from "@/lib/curriculum";
import HeroPlate from "./hero-plate";

const storageKey = "core-pm-progress-v2";

function readProgress(): string[] {
  try {
    const value = JSON.parse(window.localStorage.getItem(storageKey) ?? "[]");
    return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return [];
  }
}

const installCommand = "npx skills add raziiabraham/core-pm";

function TerminalInstall() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(installCommand);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return <div className="course-terminal">
    <header>
      <p>Learn in your terminal</p>
      <button type="button" onClick={copy} aria-label="Copy install command">{copied ? "Copied" : "Copy"}</button>
    </header>
    <div className="course-terminal-body">
      <code>{installCommand}</code>
      <span><i aria-hidden="true">&gt;</i> Use <b>start-learning</b> to begin the course.</span>
    </div>
    <footer>Claude · Cursor · Codex · any SKILL.md agent</footer>
  </div>;
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
        <h1>Re-own the<br /><em>PM core.</em></h1>
        <span>Your coding agent becomes your tutor. It hands you a real product decision, asks for your position before it offers one, then argues the strongest case against you—and every lesson ends in an artifact you keep.</span>
        <TerminalInstall />
        <div className="course-command-actions">
          {nextLesson && <Link href={`/learn/${nextLesson.slug}`}>{pathCompleted ? "Continue your path" : "Read on the web"} <i aria-hidden="true">›</i></Link>}
          <a href="#paths">Choose a path</a>
        </div>
        <div className="course-hero-proof">
          <div><b>{allLessons.length}</b><span>lessons</span></div>
          <div><b>{curriculum.length}</b><span>phases</span></div>
          <div><b>~{Math.round(totalMinutes / 60)}</b><span>hours</span></div>
          <div><b>1</b><span>artifact each</span></div>
          <div><b>0</b><span>sign-ups</span></div>
        </div>
      </div>
      <aside className="course-command-side">
        <HeroPlate />

        <div className="course-resume">
          <div className="course-resume-head">
            <span>{selectedPath.title}</span>
            <b>{ready ? `${pathCompleted} / ${pathLessons.length}` : `— / ${pathLessons.length}`}</b>
          </div>
          <div className="course-progress-track" aria-label={`${percent}% complete`}><i style={{ width: `${percent}%` }} /></div>
          {percent === 100
            ? <p>Path complete. Review the artifacts you produced across it.</p>
            : nextLesson && <Link href={`/learn/${nextLesson.slug}`} className="course-resume-next">
                <b>{pathCompleted ? "Continue" : "Start"} · {nextLesson.id} {nextLesson.title}</b>
                <span>{nextLesson.minutes} min</span>
              </Link>}
          {completed.length > 0 && <button type="button" onClick={reset}>Reset progress</button>}
        </div>
      </aside>
    </section>

    <section className="course-paths" id="paths" aria-labelledby="paths-title">
      <header><p>Start here</p><h2 id="paths-title">Choose the route that matches the work.</h2><span>The lessons remain the same. A path changes the order and depth—not the standard.</span></header>
      <div>{learningPaths.map((path) => <button className={path.id === activePath ? "is-active" : ""} key={path.id} type="button" onClick={() => setActivePath(path.id)}>
        <span>{path.lessons.length} lessons · ~{path.hours} hours</span><b>{path.title}</b><p>{path.description}</p><i>{path.id === activePath ? "Selected" : "Choose path"} →</i>
      </button>)}</div>
    </section>

    <section className="course-catalog" id="curriculum" aria-labelledby="curriculum-title">
      <header>
        <p>The curriculum</p>
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
              <div><span>Phase {phase.number}</span><em>{phase.id}</em></div>
              <b>{phaseComplete} / {visibleLessons.length}</b>
              <h3>{phase.title}</h3>
              <p>{phase.promise}</p>
              <small>{phase.domains.join(" · ")}</small>
            </header>
            <div className="course-lesson-list">
              {visibleLessons.map((item) => {
                const done = completed.includes(item.id);
                return <div className={done ? "course-lesson is-complete" : "course-lesson"} key={item.id}>
                  <button type="button" aria-pressed={done} aria-label={`${done ? "Mark incomplete" : "Mark complete"}: ${item.id}`} onClick={() => toggle(item.id)}><span aria-hidden="true">{done ? "✓" : ""}</span></button>
                  <Link href={`/learn/${item.slug}`}><small>{item.id} · {item.minutes} min</small><b>{item.title}</b><p>{item.premise}</p></Link>
                  <i aria-hidden="true">›</i>
                </div>;
              })}
            </div>
            <footer><span>Phase output</span><b>{visibleLessons.at(-1)?.artifact}</b><span>{phase.lessons.length} lessons in full phase</span></footer>
          </article>;
        })}
      </div>
    </section>
  </>;
}
