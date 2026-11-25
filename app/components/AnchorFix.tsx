"use client";

import { useEffect } from "react";

/**
 * Keeps in-page menu links (#work, #services, …) landing on the right section.
 * Images further up can still finish loading after the jump and push the target down,
 * so for a short time after a click we re-align to the target whenever the page height changes,
 * and stop as soon as the visitor scrolls on their own.
 */
export default function AnchorFix() {
  useEffect(() => {
    let stop: (() => void) | null = null;

    const follow = (id: string) => {
      stop?.();
      const el = document.getElementById(id);
      if (!el) return;
      let lastTop = -1;
      const align = () => {
        const top = Math.round(el.getBoundingClientRect().top + window.scrollY);
        if (top === lastTop) return;
        lastTop = top;
        const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
        window.scrollTo({ top: top - margin, behavior: "auto" });
      };
      const ro = new ResizeObserver(align);
      ro.observe(document.body);
      const cancel = () => stop?.();
      const opts = { passive: true } as AddEventListenerOptions;
      window.addEventListener("wheel", cancel, opts);
      window.addEventListener("touchstart", cancel, opts);
      window.addEventListener("keydown", cancel);
      const timer = setTimeout(cancel, 4000);
      stop = () => {
        ro.disconnect();
        clearTimeout(timer);
        window.removeEventListener("wheel", cancel);
        window.removeEventListener("touchstart", cancel);
        window.removeEventListener("keydown", cancel);
        stop = null;
      };
      align();
    };

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as HTMLElement | null)?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      const id = a?.getAttribute("href")?.slice(1);
      if (!id || !document.getElementById(id)) return;
      e.preventDefault();
      history.pushState(null, "", `#${id}`);
      follow(id);
    };
    document.addEventListener("click", onClick);

    // Arriving with a #section in the URL (e.g. a shared link)
    if (location.hash.length > 1) follow(decodeURIComponent(location.hash.slice(1)));

    return () => {
      document.removeEventListener("click", onClick);
      stop?.();
    };
  }, []);

  return null;
}
