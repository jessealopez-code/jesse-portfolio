"use client";

import { useEffect } from "react";

/**
 * Turns on scroll-triggered motion for the whole page.
 * Elements with [data-reveal] (children stagger in) or [data-anim] (custom animation)
 * get the class "is-in" the first time they scroll into view.
 * Visitors who prefer reduced motion get the static page: nothing is hidden or animated.
 */
export default function Motion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    root.classList.add("motion");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px" }
    );
    document.querySelectorAll("[data-reveal], [data-anim]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
