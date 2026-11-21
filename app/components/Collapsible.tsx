"use client";

import { useRef, useState } from "react";

/** Desktop: always open, no button. Phones: collapsed behind a "Read the full story" button. */
export default function Collapsible({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggle = () => {
    if (open) ref.current?.parentElement?.scrollIntoView({ block: "start" });
    setOpen(!open);
  };

  return (
    <div ref={ref} className={`collapse${open ? " is-open" : ""}`}>
      <div className="collapse-body">{children}</div>
      <button type="button" className="collapse-btn" aria-expanded={open} onClick={toggle}>
        {open ? "Show less ↑" : "Read the full story ↓"}
      </button>
    </div>
  );
}
