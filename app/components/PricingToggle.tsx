"use client";

import { useEffect, useRef, useState } from "react";

type Plan = { name: string; price: string; unit: string; text: string; cta: string; listTitle: string; items: string[]; isNew?: boolean };
export type PricingStory = {
  before: { label: string; caption: string; title: string; sub: string; stats: { value: string; label: string }[]; fine: string };
  after: { label: string; caption: string; title: string; sub: string; plans: Plan[]; rates: string[] };
};

const Check = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true" className="pt-check">
    <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Before/after pricing story: switch between the old "always free" model and the freemium Free + Plus model. */
export default function PricingToggle({ story }: { story: PricingStory }) {
  const [after, setAfter] = useState(false);
  const touched = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  // Flip to "After" once, shortly after the block scrolls into view (unless the visitor already chose).
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let t: ReturnType<typeof setTimeout> | undefined;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          t = setTimeout(() => !touched.current && setAfter(true), 1400);
          io.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (t) clearTimeout(t);
    };
  }, []);

  const choose = (v: boolean) => {
    touched.current = true;
    setAfter(v);
  };
  const { before: b, after: a } = story;

  return (
    <div className={`pt${after ? " is-after" : ""}`} ref={ref}>
      <div className="pt-switch" role="radiogroup" aria-label="Pricing model">
        <button type="button" role="radio" aria-checked={!after} className={!after ? "on" : ""} onClick={() => choose(false)}>
          <span className="pt-tag">Before</span> {b.label}
        </button>
        <button type="button" role="radio" aria-checked={after} className={after ? "on" : ""} onClick={() => choose(true)}>
          <span className="pt-tag">After</span> {a.label}
        </button>
        <span className="pt-thumb" aria-hidden="true" />
      </div>

      <div className="pt-stage">
        <div className={`pt-pane pt-pane--before${touched.current ? " was" : ""}`} hidden={after}>
          <h4 className="pt-title">{b.title}</h4>
          <p className="pt-sub">{b.sub}</p>
          <div className="pt-band">
            {b.stats.map((s) => (
              <div key={s.value} className="pt-band-stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <p className="pt-fine">{b.fine}</p>
        </div>

        <div className="pt-pane pt-pane--after" hidden={!after}>
          <h4 className="pt-title pt-title--big">{a.title}</h4>
          <p className="pt-sub">{a.sub}</p>
          <div className="pt-plans">
            {a.plans.map((p) => (
              <div key={p.name} className={`pt-plan${p.isNew ? " pt-plan--new" : ""}`}>
                <div className="pt-plan-name">
                  {p.name}
                  {p.isNew ? <span className="pt-new">New</span> : null}
                </div>
                <div className="pt-price">{p.price}</div>
                <div className="pt-unit">{p.unit}</div>
                <p className="pt-plan-text">{p.text}</p>
                <span className="pt-cta">{p.cta}</span>
                <p className="pt-list-title">{p.listTitle}</p>
                <ul>
                  {p.items.map((it) => (
                    <li key={it}>
                      <Check />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="pt-fine">{a.rates.join(" · ")}</p>
        </div>
      </div>

      <p className="pt-caption" aria-live="polite">
        {after ? a.caption : b.caption}
      </p>
    </div>
  );
}
