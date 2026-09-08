"use client";

import { useEffect, useState } from "react";
import "./lesson-progress.css";

const storageKey = "core-pm-progress-v1";

export default function LessonProgress({ lesson, title }: { lesson: string; title: string }) {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(window.localStorage.getItem(storageKey) ?? "[]");
      setComplete(Array.isArray(saved) && saved.includes(lesson));
    } catch {
      setComplete(false);
    }
  }, [lesson]);

  function toggle() {
    let saved: string[] = [];
    try {
      const value = JSON.parse(window.localStorage.getItem(storageKey) ?? "[]");
      saved = Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
    } catch {
      saved = [];
    }
    const next = saved.includes(lesson) ? saved.filter((item) => item !== lesson) : [...saved, lesson];
    window.localStorage.setItem(storageKey, JSON.stringify(next));
    setComplete(next.includes(lesson));
  }

  return <button className={complete ? "lesson-progress is-complete" : "lesson-progress"} type="button" aria-pressed={complete} onClick={toggle}>
    <span aria-hidden="true">{complete ? "✓" : ""}</span>
    <b>{complete ? "Lesson complete" : "Mark lesson complete"}</b>
    <small>{title}</small>
  </button>;
}
