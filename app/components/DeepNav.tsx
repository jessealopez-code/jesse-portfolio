"use client";

import { useEffect, useRef, useState } from "react";

type Item = { id: string; label: string };

/** Sticky navigation for the Deep dives section: highlights the story on screen, tap to jump. */
export default function DeepNav({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-30% 0px -60% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  useEffect(() => {
    const row = rowRef.current;
    const chip = row?.querySelector<HTMLElement>(`[data-target="${active}"]`);
    if (row && chip && row.scrollWidth > row.clientWidth) row.scrollTo({ left: chip.offsetLeft - 20, behavior: "smooth" });
  }, [active]);

  return (
    <nav className="deep-nav" aria-label="Deep dives">
      <div className="container deep-nav-row" ref={rowRef}>
        <span className="deep-nav-label">Deep dives</span>
        {items.map((i) => (
          <button
            key={i.id}
            type="button"
            data-target={i.id}
            className={`deep-tab${i.id === active ? " is-active" : ""}`}
            aria-current={i.id === active ? "true" : undefined}
            onClick={() => document.getElementById(i.id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
          >
            {i.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
