"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";

type Screen = { src: string; alt: string };

/** A row of app screens: arrows on desktop, swipe + dots on phones. */
export default function ScreenCarousel({ screens, label }: { screens: Screen[]; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [active, setActive] = useState(0);
  const [gliding, setGliding] = useState(false);
  const speed = useRef(0);
  const raf = useRef(0);

  // Desktop: hovering near the left/right edge glides the row in that direction.
  const glide = () => {
    const el = ref.current;
    if (el && speed.current !== 0) {
      el.scrollLeft += speed.current;
      raf.current = requestAnimationFrame(glide);
    } else {
      raf.current = 0;
    }
  };
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const zone = 0.18;
    const max = 14;
    let v = 0;
    if (x < zone) v = -max * (1 - x / zone);
    else if (x > 1 - zone) v = max * (1 - (1 - x) / zone);
    speed.current = v;
    setGliding(v !== 0);
    if (v !== 0 && !raf.current) raf.current = requestAnimationFrame(glide);
  };
  const stop = () => {
    speed.current = 0;
    setGliding(false);
  };

  const step = () => {
    const el = ref.current;
    if (!el || !el.firstElementChild) return 1;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    return (el.firstElementChild as HTMLElement).offsetWidth + gap;
  };

  const update = () => {
    const el = ref.current;
    if (!el) return;
    setAtStart(el.scrollLeft < 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
    setActive(Math.min(screens.length - 1, Math.round(el.scrollLeft / step())));
  };

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const by = (dir: number) => ref.current?.scrollBy({ left: dir * step(), behavior: "smooth" });

  return (
    <div className="screens">
      <div className="screens-nav">
        <button type="button" className="btn-round" aria-label="Previous screens" onClick={() => by(-1)} disabled={atStart}>
          ←
        </button>
        <button type="button" className="btn-round btn-round--accent" aria-label="Next screens" onClick={() => by(1)} disabled={atEnd}>
          →
        </button>
      </div>
      <div
        className={`screens-viewport${atStart ? " at-start" : ""}${atEnd ? " at-end" : ""}`}
        onMouseMove={onMove}
        onMouseLeave={stop}
      >
        <div
          ref={ref}
          className={`screens-track${gliding ? " is-gliding" : ""}`}
          onScroll={update}
          aria-label={label}
          data-reveal
        >
          {screens.map((s) => (
            <img key={s.src} src={s.src} alt={s.alt} loading="lazy" draggable={false} />
          ))}
        </div>
      </div>
      <div className="screens-dots">
        {screens.map((s, i) => (
          <span key={s.src} className={`screens-dot${i === active ? " is-active" : ""}`} aria-hidden="true" />
        ))}
      </div>
    </div>
  );
}
