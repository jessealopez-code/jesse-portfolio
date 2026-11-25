"use client";
/* eslint-disable @next/next/no-img-element */

import { useRef, useState } from "react";
import { imgDims } from "@/lib/dims";

export type Benefit = {
  title: string;
  promise: string;
  image: string;
  plus?: boolean;
  features: { title: string; text: string }[];
};

const Plus = () => (
  <span className="bx-plus" aria-label="Square Invoices Plus">
    ⚡ Plus
  </span>
);

/** Square's benefit menu, rebuilt: pick a benefit on the left (chips on phones) to see its panel. */
export default function BenefitExplorer({ items, label }: { items: Benefit[]; label: string }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const dir = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const n = (i + dir + items.length) % items.length;
    setActive(n);
    tabs.current[n]?.focus();
  };

  return (
    <div className="bx" data-reveal>
      <div className="bx-tabs" role="tablist" aria-label={label}>
        {items.map((b, i) => (
          <button
            key={b.title}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`bx-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`bx-panel-${i}`}
            tabIndex={i === active ? 0 : -1}
            className={`bx-tab${i === active ? " on" : ""}`}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            {b.title}
            {b.plus ? <Plus /> : null}
          </button>
        ))}
      </div>
      <div className="bx-panels">
        {items.map((b, i) => (
          <div
            key={b.title}
            role="tabpanel"
            id={`bx-panel-${i}`}
            aria-labelledby={`bx-tab-${i}`}
            className={`bx-panel${i === active ? " on" : ""}`}
            hidden={i !== active}
          >
            <div className="bx-head">
              <h4>
                {b.plus ? (
                  <>
                    <Plus />{" "}
                  </>
                ) : null}
                {b.title}.
              </h4>
              <p>{b.promise}</p>
            </div>
            <div className="bx-tile">
              <img src={b.image} alt={`Square Invoices: ${b.title}`} loading="lazy" {...imgDims(b.image)} />
            </div>
            <div className="bx-feats">
              {b.features.map((f) => (
                <div key={f.title} className="bx-feat">
                  <h5>{f.title}</h5>
                  <p>{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
