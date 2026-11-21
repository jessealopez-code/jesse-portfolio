"use client";

import { useState } from "react";
import Placeholder from "./Placeholder";
import SmartLink from "./SmartLink";

type Page = { label: string; text: string; image: string; href: string };

export default function WebsiteStack({ pages }: { pages: Page[] }) {
  const [i, setI] = useState(0);
  const n = pages.length;
  const page = pages[i];

  return (
    <div className="stack">
      <div className="stack-cards">
        {/* the two cards peeking out behind the front one */}
        <div className="stack-back stack-back--2" aria-hidden="true" />
        <div className="stack-back stack-back--1" aria-hidden="true" />
        <article className="stack-front" key={i} aria-live="polite">
          {page.image ? (
            // Scrollable frame so long, full-page screenshots can be explored in place
            <div className="stack-scroll" tabIndex={0} aria-label={`Vori ${page.label.toLowerCase()} — scroll to explore`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={page.image} alt={`Vori ${page.label.toLowerCase()}`} />
            </div>
          ) : (
            <Placeholder alt={`Vori ${page.label.toLowerCase()}`} label={`${page.label} screenshot`} />
          )}
          {page.image ? <span className="stack-hint">Scroll ↓</span> : null}
        </article>
      </div>
      <div className="stack-info">
        <div className="stack-tabs" role="tablist" aria-label="Website pages">
          {pages.map((p, idx) => (
            <button
              key={p.label}
              type="button"
              role="tab"
              aria-selected={idx === i}
              className={`stack-tab${idx === i ? " is-active" : ""}`}
              onClick={() => setI(idx)}
            >
              {p.label}
            </button>
          ))}
        </div>
        <span className="eyebrow">
          {i + 1} of {n}
        </span>
        <h4 className="stack-title">{page.label}</h4>
        <p className="stack-text">{page.text}</p>
        <SmartLink href={page.href} className="card-link">
          Visit →
        </SmartLink>
        <div className="slider-buttons">
          <button type="button" className="btn-round" aria-label="Previous page" onClick={() => setI((i - 1 + n) % n)}>
            ←
          </button>
          <button type="button" className="btn-round btn-round--accent" aria-label="Next page" onClick={() => setI((i + 1) % n)}>
            →
          </button>
        </div>
      </div>
    </div>
  );
}
