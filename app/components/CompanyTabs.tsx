"use client";

import { useEffect, useRef, useState } from "react";
import { companyId } from "@/lib/ids";

/** Phones only: a row of company chips that sticks to the top of the screen while reading the Work section. */
export default function CompanyTabs({ companies }: { companies: string[] }) {
  const [active, setActive] = useState(companies[0]);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = companies.map((c) => document.getElementById(companyId(c))).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.getAttribute("data-company") || companies[0]);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [companies]);

  // keep the active chip visible inside the sideways-scrolling bar
  useEffect(() => {
    const bar = barRef.current;
    const chip = bar?.querySelector<HTMLElement>(`[data-chip="${active}"]`);
    if (bar && chip) bar.scrollTo({ left: chip.offsetLeft - 20, behavior: "smooth" });
  }, [active]);

  return (
    <nav className="co-tabs" aria-label="Jump to company">
      <div className="co-tabs-row" ref={barRef}>
        {companies.map((c) => (
          <button
            key={c}
            type="button"
            data-chip={c}
            className={`co-tab${c === active ? " is-active" : ""}`}
            aria-current={c === active ? "true" : undefined}
            onClick={() => document.getElementById(companyId(c))?.scrollIntoView({ behavior: "smooth", block: "start" })}
          >
            {c}
          </button>
        ))}
      </div>
    </nav>
  );
}
