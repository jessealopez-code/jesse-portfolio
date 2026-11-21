"use client";

import { useState } from "react";
import { quotes } from "@/content/site";

export default function QuoteSlider() {
  const [i, setI] = useState(0);
  const n = quotes.length;
  const q = quotes[i];

  return (
    <div className="slider">
      <figure className="slider-quote" aria-live="polite">
        <blockquote>“{q.text}”</blockquote>
        <figcaption>{q.who}</figcaption>
      </figure>
      <div className="slider-controls">
        <div className="slider-buttons">
          <button type="button" className="btn-round" aria-label="Previous quote" onClick={() => setI((i - 1 + n) % n)}>
            ←
          </button>
          <button type="button" className="btn-round btn-round--accent" aria-label="Next quote" onClick={() => setI((i + 1) % n)}>
            →
          </button>
        </div>
        <span className="muted">
          {i + 1} / {n}
        </span>
      </div>
    </div>
  );
}
