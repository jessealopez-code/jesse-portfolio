"use client";

import { useEffect, useRef, useState } from "react";
import { youtubeId } from "@/lib/youtube";

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
export type VideoItem = { id: string; title: string; caption?: string };

export function VideoGrid({ items, label }: { items: VideoItem[]; label: string }) {
  const [open, setOpen] = useState<VideoItem | null>(null);
  return (
    <>
      <div className="vori-grid-3" data-reveal>
        {items.map((v) => (
          <figure key={v.id} className="vcard">
            <button type="button" className="vthumb" onClick={() => setOpen(v)} aria-label={`Play video: ${v.title}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt="" loading="lazy" width={480} height={360} />
              <span className="vthumb-play" aria-hidden="true">
                ▶
              </span>
            </button>
            <figcaption className="vcap">
              <strong>{v.title}</strong>
              {v.caption ? <span>{v.caption}</span> : null}
            </figcaption>
          </figure>
        ))}
      </div>
      {open ? <Modal id={open.id} title={`${label}: ${open.title}`} onClose={() => setOpen(null)} /> : null}
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
