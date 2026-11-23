"use client";
/* eslint-disable @next/next/no-img-element */

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  title: string;
  text: string;
  cover: string;
  dir: string; // folder with p-01.jpg, p-02.jpg, ...
  count: number;
  href: string;
  linkLabel: string;
};

const pageUrl = (dir: string, i: number) => `${dir}/p-${String(i + 1).padStart(2, "0")}.jpg`;
const FLIP_MS = 700;

/** Content card that opens a full-screen flipbook of the piece. */
export default function Magazine(props: Props) {
  const [open, setOpen] = useState(false);
  return (
    <article className="card mag-card">
      <button type="button" className="mag-cover" onClick={() => setOpen(true)} aria-label={`Flip through ${props.title}`}>
        <span className="mag-cover-book">
          <img src={props.cover} alt="" loading="lazy" />
        </span>
        <span className="mag-cover-cta">
          <svg viewBox="0 0 256 256" aria-hidden="true">
            <path
              fill="currentColor"
              d="M224 48h-64a40 40 0 0 0-32 16 40 40 0 0 0-32-16H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h64a24 24 0 0 1 24 24 8 8 0 0 0 16 0 24 24 0 0 1 24-24h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16ZM96 192H32V64h64a24 24 0 0 1 24 24v112a39.8 39.8 0 0 0-24-8Zm128 0h-64a39.8 39.8 0 0 0-24 8V88a24 24 0 0 1 24-24h64Z"
            />
          </svg>
          Flip through · {props.count} pages
        </span>
      </button>
      <div className="card-body">
        <h4>{props.title}</h4>
        <p>{props.text}</p>
        <a href={props.href} className="card-link" target="_blank" rel="noopener noreferrer">
          {props.linkLabel} →
        </a>
      </div>
      {open ? createPortal(<FlipBook {...props} onClose={() => setOpen(false)} />, document.body) : null}
    </article>
  );
}

type Flip = { dir: "next" | "prev" } | null;

function FlipBook({ title, dir, count, href, onClose }: Props & { onClose: () => void }) {
  const [spreadMode, setSpreadMode] = useState(true);
  const [pos, setPos] = useState(0); // spread index (spread mode) or page index (single mode)
  const [flip, setFlip] = useState<Flip>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchX = useRef<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Two-page spreads on wide screens, one page at a time on narrow ones.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    const apply = () => {
      setSpreadMode(mq.matches);
      setPos(0);
    };
    setSpreadMode(mq.matches);
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const last = spreadMode ? Math.floor(count / 2) : count - 1;
  const left = (s: number) => (s === 0 ? null : 2 * s - 1 < count ? 2 * s - 1 : null);
  const right = (s: number) => (2 * s < count ? 2 * s : null);

  const go = useCallback(
    (d: "next" | "prev") => {
      if (flip) return;
      if (d === "next" && pos >= last) return;
      if (d === "prev" && pos <= 0) return;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        setPos((p) => p + (d === "next" ? 1 : -1));
        return;
      }
      setFlip({ dir: d });
      timer.current = setTimeout(() => {
        setPos((p) => p + (d === "next" ? 1 : -1));
        setFlip(null);
      }, FLIP_MS);
    },
    [flip, pos, last]
  );

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  // Keyboard, scroll lock, focus.
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go("next");
      if (e.key === "ArrowLeft") go("prev");
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [go, onClose]);

  const img = (i: number | null, extra = "") =>
    i === null ? <div className={`mag-page mag-page--empty ${extra}`} /> : (
      <img className={`mag-page ${extra}`} src={pageUrl(dir, i)} alt={`Page ${i + 1}`} draggable={false} />
    );

  // Preload the pages around the current position.
  const preload: number[] = [];
  for (let k = -3; k <= 4; k++) {
    const i = (spreadMode ? 2 * pos : pos) + k;
    if (i >= 0 && i < count) preload.push(i);
  }

  let label: string;
  if (spreadMode) {
    const l = left(pos);
    const r = right(pos);
    label = l !== null && r !== null ? `Pages ${l + 1}–${r + 1} of ${count}` : `Page ${(l ?? r ?? 0) + 1} of ${count}`;
  } else {
    label = `Page ${pos + 1} of ${count}`;
  }

  // Spread mode: centre the book when only one page shows (front or back cover).
  const shift = spreadMode ? (pos === 0 && !flip ? "is-front" : right(pos) === null && !flip ? "is-back" : "") : "";

  const onTouchStart = (e: React.TouchEvent) => (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 40) go(dx < 0 ? "next" : "prev");
  };
  const onBookClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    go(e.clientX - r.left > r.width / 2 ? "next" : "prev");
  };

  return (
    <div className="mag-modal" role="dialog" aria-modal="true" aria-label={title}>
      <div className="mag-top">
        <p className="mag-title">{title}</p>
        <div className="mag-top-actions">
          <a href={href} target="_blank" rel="noopener noreferrer" className="mag-read">
            Read online ↗
          </a>
          <button type="button" ref={closeRef} className="mag-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>
      </div>

      <div className="mag-stage">
        <div
          className={`mag-book ${spreadMode ? "mag-book--spread" : "mag-book--single"} ${shift}`}
          onClick={onBookClick}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {spreadMode ? (
            <>
              <div className="mag-half mag-half--left">
                {img(flip?.dir === "prev" ? left(pos - 1) : left(pos))}
              </div>
              <div className="mag-half mag-half--right">
                {img(flip?.dir === "next" ? right(pos + 1) : right(pos))}
              </div>
              {flip?.dir === "next" ? (
                <div className="mag-leaf mag-leaf--next">
                  <div className="mag-face mag-face--front">{img(right(pos))}</div>
                  <div className="mag-face mag-face--back">{img(left(pos + 1))}</div>
                </div>
              ) : null}
              {flip?.dir === "prev" ? (
                <div className="mag-leaf mag-leaf--prev">
                  <div className="mag-face mag-face--front">{img(left(pos))}</div>
                  <div className="mag-face mag-face--back">{img(right(pos - 1))}</div>
                </div>
              ) : null}
              <span className="mag-spine" aria-hidden="true" />
            </>
          ) : (
            <>
              <div className="mag-half mag-half--solo">{img(flip?.dir === "next" ? pos + 1 : pos)}</div>
              {flip?.dir === "next" ? (
                <div className="mag-leaf mag-leaf--solo-next">
                  <div className="mag-face mag-face--front">{img(pos)}</div>
                </div>
              ) : null}
              {flip?.dir === "prev" ? (
                <div className="mag-leaf mag-leaf--solo-prev">
                  <div className="mag-face mag-face--front">{img(pos - 1)}</div>
                </div>
              ) : null}
            </>
          )}
        </div>
      </div>

      <div className="mag-controls">
        <button type="button" className="mag-btn" onClick={() => go("prev")} disabled={pos <= 0} aria-label="Previous page">
          ←
        </button>
        <span className="mag-count" aria-live="polite">
          {label}
        </span>
        <button type="button" className="mag-btn mag-btn--accent" onClick={() => go("next")} disabled={pos >= last} aria-label="Next page">
          →
        </button>
      </div>

      <div className="mag-preload" aria-hidden="true">
        {preload.map((i) => (
          <img key={i} src={pageUrl(dir, i)} alt="" />
        ))}
      </div>
    </div>
  );
}
