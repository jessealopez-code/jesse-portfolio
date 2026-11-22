"use client";

import { Fragment, useEffect, useRef } from "react";

type Line = { text: string; accent?: boolean };

// Timing (seconds): when typing starts, time per letter, pause between lines.
const START = 0.35;
const STEP = 0.075;
const PAUSE = 0.3;

/**
 * Headline that types itself out letter by letter, line by line.
 * The letters are revealed with CSS alone (so it works before JavaScript loads);
 * JavaScript only moves the blinking cursor along with them.
 * Visitors with reduced motion see the full headline at once, with no cursor.
 */
export default function TypeTitle({ lines, className = "" }: { lines: Line[]; className?: string }) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const caretRef = useRef<HTMLSpanElement>(null);

  // Work out each letter's delay up front so server and browser render the same thing.
  let t = START;
  const timed = lines.map((line) => {
    const chars = Array.from(line.text).map((c) => {
      const d = t;
      t += STEP;
      return { c, d };
    });
    t += PAUSE;
    return { ...line, chars };
  });

  useEffect(() => {
    const h = titleRef.current;
    const caret = caretRef.current;
    if (!h || !caret) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let anim: Animation | null = null;
    let cancelled = false;

    // Measures where the cursor should sit after each letter appears.
    const measure = () => {
      const hr = h.getBoundingClientRect();
      const stops: { t: number; x: number; y: number; hh: number }[] = [];
      h.querySelectorAll<HTMLElement>(".type-line").forEach((ln) => {
        const chs = Array.from(ln.querySelectorAll<HTMLElement>(".tch"));
        if (!chs.length) return;
        const r0 = chs[0].getBoundingClientRect();
        const y = r0.top - hr.top + r0.height * 0.14;
        const hh = r0.height * 0.74;
        stops.push({ t: parseFloat(chs[0].dataset.d || "0") - 0.001, x: r0.left - hr.left, y, hh });
        chs.forEach((e) => {
          const r = e.getBoundingClientRect();
          stops.push({ t: parseFloat(e.dataset.d || "0"), x: r.right - hr.left + 3, y, hh });
        });
      });
      return stops;
    };

    const place = (s: { x: number; y: number; hh: number }) => {
      caret.style.transform = `translate(${s.x}px, ${s.y}px)`;
      caret.style.height = `${s.hh}px`;
      caret.style.visibility = "visible";
    };

    const onResize = () => {
      const stops = measure();
      if (!stops.length) return;
      anim?.cancel();
      place(stops[stops.length - 1]);
      caret.classList.add("blink");
    };

    document.fonts.ready.then(() => {
      if (cancelled) return;
      const stops = measure();
      if (!stops.length) return;
      const end = stops[stops.length - 1].t + PAUSE;
      const kf: Keyframe[] = [];
      kf.push({ offset: 0, visibility: "hidden", transform: `translate(${stops[0].x}px, ${stops[0].y}px)`, height: `${stops[0].hh}px` });
      const appear = Math.min(0.15, stops[0].t) / end;
      for (const s of [{ ...stops[0], t: appear * end }, ...stops]) {
        kf.push({
          offset: Math.min(1, Math.max(appear, s.t / end)),
          visibility: "visible",
          transform: `translate(${s.x}px, ${s.y}px)`,
          height: `${s.hh}px`,
        });
      }
      kf.sort((a, b) => (a.offset as number) - (b.offset as number));
      kf.forEach((k) => (k.easing = "steps(1, end)"));
      kf.push({ ...kf[kf.length - 1], offset: 1 });

      anim = caret.animate(kf, { duration: end * 1000, fill: "forwards" });
      // Line the cursor up with the letters' CSS animations, which started at first paint.
      const first = h.querySelector<HTMLElement>(".tch")?.getAnimations()[0];
      if (first && first.startTime !== null) anim.startTime = first.startTime;
      anim.finished.then(() => caret.classList.add("blink")).catch(() => {});
      window.addEventListener("resize", onResize);
    });

    return () => {
      cancelled = true;
      anim?.cancel();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <h1 className={`type-title ${className}`} ref={titleRef}>
      <span className="visually-hidden">{lines.map((l) => l.text).join(" ")}</span>
      {timed.map((line, li) => (
        <Fragment key={li}>
          <span className={`type-line${line.accent ? " accent" : ""}`} aria-hidden="true">
            {line.chars.map(({ c, d }, i) => (
              <span key={i} className="tch" data-d={d} style={{ animationDelay: `${d.toFixed(3)}s` }}>
                {c}
              </span>
            ))}
          </span>
          {li < timed.length - 1 && <br />}
        </Fragment>
      ))}
      <span className="tcaret" ref={caretRef} aria-hidden="true" />
    </h1>
  );
}
