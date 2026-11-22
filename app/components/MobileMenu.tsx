"use client";

import { useEffect, useState } from "react";

type Item = { href: string; label: string; accent?: boolean };

/**
 * Phones only: a "Menu" button that opens a full-screen menu with large links.
 * Desktop keeps the normal row of links (this button is hidden there by CSS).
 */
export default function MobileMenu({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="menu-btn"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
      >
        Menu
        <span className="menu-btn-lines" aria-hidden="true">
          <span />
          <span />
        </span>
      </button>
      <div
        id="mobile-menu"
        className={`mmenu${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        hidden={!open}
      >
        <div className="mmenu-top">
          <a href="#top" className="nav-logo" onClick={() => setOpen(false)}>
            JL.
          </a>
          <button type="button" className="menu-btn" onClick={() => setOpen(false)}>
            Close <span aria-hidden="true">✕</span>
          </button>
        </div>
        <nav className="mmenu-links" aria-label="Main">
          {items.map((it, i) => (
            <a
              key={it.href}
              href={it.href}
              className={it.accent ? "accent" : undefined}
              style={{ animationDelay: `${0.05 + i * 0.05}s` }}
              onClick={() => setOpen(false)}
            >
              {it.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
