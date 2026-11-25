"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Site header. On desktop it sticks to the top: transparent over the hero, a solid blurred bar once
 * you scroll, and the menu link for the section on screen is highlighted. Phones keep the plain header.
 */
export default function StickyHeader({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => el.classList.toggle("is-scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Highlight the menu link for the section currently in view
    const links = Array.from(el.querySelectorAll<HTMLAnchorElement>('.nav-links a[href^="#"]'));
    const sections = links
      .map((a) => document.getElementById(a.getAttribute("href")!.slice(1)))
      .filter((s): s is HTMLElement => !!s);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          links.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === `#${e.target.id}`));
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header className="site-header" ref={ref}>
      <div className="container nav">{children}</div>
    </header>
  );
}
