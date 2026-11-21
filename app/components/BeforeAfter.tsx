"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";

type Side = { image: string; label: string; alt: string };

/** Desktop: the two images side by side. Phones: one image with a drag handle to compare. */
export default function BeforeAfter({ before, after }: { before: Side; after: Side }) {
  const [pos, setPos] = useState(50);
  const box = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const touched = useRef(false);

  // Phones: once the slider scrolls into view, sweep it once to show it can be dragged.
  useEffect(() => {
    const el = box.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const keys = [50, 92, 8, 50];
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting || getComputedStyle(el).display === "none") return;
        io.disconnect();
        const t0 = performance.now() + 300;
        const seg = 650;
        const tick = (t: number) => {
          if (touched.current) return;
          const k = Math.max(0, (t - t0) / seg);
          const i = Math.min(keys.length - 2, Math.floor(k));
          const f = Math.min(1, k - i);
          const ease = f < 0.5 ? 2 * f * f : 1 - Math.pow(-2 * f + 2, 2) / 2;
          setPos(keys[i] + (keys[i + 1] - keys[i]) * ease);
          if (k < keys.length - 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  const fromPointer = (clientX: number) => {
    const r = box.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)));
  };

  return (
    <>
      <div className="compare" data-reveal>
        {[before, after].map((side) => (
          <figure key={side.label}>
            <img src={side.image} alt={side.alt} loading="lazy" />
            <figcaption>{side.label}</figcaption>
          </figure>
        ))}
      </div>

      <div
        ref={box}
        className="ba"
        style={{ ["--pos" as string]: `${pos}%` } as React.CSSProperties}
        onPointerDown={(e) => {
          dragging.current = true;
          touched.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          fromPointer(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && fromPointer(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
      >
        <img src={after.image} alt={after.alt} className="ba-img" loading="lazy" />
        <img src={before.image} alt={before.alt} className="ba-img ba-before" loading="lazy" />
        <div className="ba-line" aria-hidden="true">
          <span>⇆</span>
        </div>
        <span className="ba-label ba-label--l">{before.label}</span>
        <span className="ba-label ba-label--r">{after.label}</span>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => {
            touched.current = true;
            setPos(Number(e.target.value));
          }}
          className="ba-range"
          aria-label={`Drag to compare ${before.label} and ${after.label}`}
        />
      </div>
      <p className="ba-hint">Drag to compare {before.label} and {after.label}</p>
    </>
  );
}
