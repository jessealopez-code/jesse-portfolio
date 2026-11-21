"use client";

import { useEffect, useRef, useState } from "react";

/** Pulls the video ID out of youtube.com/watch?v=…, youtu.be/…, or a bare ID. */
export function youtubeId(url: string): string | null {
  if (/^[\w-]{11}$/.test(url)) return url;
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
  return m ? m[1] : null;
}

function Modal({ id, title, onClose }: { id: string; title: string; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      prev?.focus();
    };
  }, [onClose]);

  return (
    <div className="vmodal" role="dialog" aria-modal="true" aria-label={title} onClick={onClose}>
      <div className="vmodal-inner" onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} type="button" className="vmodal-close" aria-label="Close video" onClick={onClose}>
          ✕
        </button>
        <div className="vmodal-frame">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

/** Grid of video thumbnails; clicking one plays it in a pop-up over the page. */
export function VideoGrid({ ids, label }: { ids: string[]; label: string }) {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <>
      <div className="vori-grid-3">
        {ids.map((id, i) => (
          <button key={id} type="button" className="vthumb" onClick={() => setOpen(id)} aria-label={`Play ${label} ${i + 1}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" />
            <span className="vthumb-play" aria-hidden="true">
              ▶
            </span>
          </button>
        ))}
      </div>
      {open ? <Modal id={open} title={label} onClose={() => setOpen(null)} /> : null}
    </>
  );
}

/** A text link that opens a YouTube video in the pop-up player instead of leaving the page. */
export function VideoLink({ url, className, children }: { url: string; className?: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const id = youtubeId(url);
  if (!id) return null;
  return (
    <>
      <button type="button" className={`link-button ${className ?? ""}`} onClick={() => setOpen(true)}>
        {children}
      </button>
      {open ? <Modal id={id} title="Video" onClose={() => setOpen(false)} /> : null}
    </>
  );
}
