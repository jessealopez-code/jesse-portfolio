"use client";

import { Fragment, useEffect, useRef } from "react";

type Line = { text: string; accent?: boolean };

// Timing (seconds): when typing starts, time per letter, pause between lines.
const START = 0.25;
const STEP = 0.075;
const PAUSE = 0.3;

/**
 * Headline that types itself out letter by letter, line by line, with a blinking cursor.
 * One animation loop reveals the letters and moves the cursor, so they always stay in step.
 * Without JavaScript the letters appear after a short delay; with reduced motion they show at once.
 */
export default function TypeTitle({ lines, className = "" }: { lines: Line[]; className?: string }) {
  const titleRef = useRef<HTMLDivElement>(null);
  const caretRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const h = titleRef.current;
    const caret = caretRef.current;
    if (!h || !caret) return;

    const chars = Array.from(h.querySelectorAll<HTMLElement>(".tch"));
    const showAll = () => h.classList.add("type-done");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !chars.length) {
      showAll();
      return;
    }

    // When each letter appears, counting from the start of typing.
    const times: number[] = [];
    let t = START;
    h.querySelectorAll<HTMLElement>(".type-line").forEach((ln) => {
      ln.querySelectorAll(".tch").forEach(() => {
        times.push(t);
        t += STEP;
      });
      t += PAUSE;
    });

    let raf = 0;
    let shown = 0;
    let done = false;
    let cancelled = false;

    // Cursor sits just after the last letter shown (or before the first one).
    const placeCaret = () => {
      const hr = h.getBoundingClientRect();
      const ref = chars[Math.max(0, shown - 1)];
      const r = ref.getBoundingClientRect();
      const x = shown === 0 ? r.left - hr.left : r.right - hr.left + 3;
      caret.style.transform = `translate(${x}px, ${r.top - hr.top + r.height * 0.14}px)`;
      caret.style.height = `${r.height * 0.74}px`;
      caret.style.visibility = "visible";
    };

    const begin = () => {
      if (cancelled) return;
      h.classList.add("type-js");
      const t0 = performance.now();
      placeCaret();
      const tick = (now: number) => {
        const elapsed = (now - t0) / 1000;
        let changed = false;
        while (shown < chars.length && times[shown] <= elapsed) {
          chars[shown].classList.add("on");
          shown++;
          changed = true;
        }
        if (changed) placeCaret();
        if (shown >= chars.length) {
          done = true;
          showAll();
          caret.classList.add("blink");
          return;
        }
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    // Wait for the headline font so the cursor lines up with the letters (but never more than 1.5s).
    Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 1500))]).then(begin);

    const onResize = () => {
      if (h.classList.contains("type-js")) placeCaret();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      if (!done) showAll();
    };
  }, []);

  return (
    <div className={`type-title ${className}`} ref={titleRef} role="heading" aria-level={2}>
      <span className="visually-hidden">{lines.map((l) => l.text).join(" ")}</span>
      {lines.map((line, li) => (
        <Fragment key={li}>
          <span className={`type-line${line.accent ? " accent" : ""}`} aria-hidden="true">
            {Array.from(line.text).map((c, i) => (
              <span key={i} className="tch">
                {c}
              </span>
            ))}
          </span>
          {li < lines.length - 1 && <br />}
        </Fragment>
      ))}
      <span className="tcaret" ref={caretRef} aria-hidden="true" />
    </div>
  );
}
