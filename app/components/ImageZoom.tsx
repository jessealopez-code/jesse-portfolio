"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";

/**
 * Click any image marked with data-zoom to open it full screen for a closer read.
 * One listener for the whole page; Esc, the ✕ button or a click on the backdrop closes it.
 */
export default function ImageZoom() {
  const [img, setImg] = useState<{ src: string; alt: string } | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = (e.target as HTMLElement | null)?.closest?.("img[data-zoom]") as HTMLImageElement | null;
      if (!t) return;
      e.preventDefault();
      setImg({ src: t.currentSrc || t.src, alt: t.alt });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (!img) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setImg(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [img]);

  if (!img) return null;
  return (
    <div className="zoom" role="dialog" aria-modal="true" aria-label={img.alt || "Image"} onClick={() => setImg(null)}>
      <button type="button" ref={closeRef} className="zoom-close" onClick={() => setImg(null)} aria-label="Close">
        ✕
      </button>
      <div className="zoom-scroll">
        <img src={img.src} alt={img.alt} onClick={(e) => e.stopPropagation()} />
      </div>
    </div>
  );
}
