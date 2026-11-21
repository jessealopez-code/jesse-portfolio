"use client";

import { useEffect, useState } from "react";

/** Phones only: a contact bar that appears after the hero and hides once the footer is on screen. */
export default function FloatingContact({ linkedin }: { linkedin: string }) {
  const [pastHero, setPastHero] = useState(false);
  const [atFooter, setAtFooter] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const footer = document.getElementById("contact");
    const io = footer ? new IntersectionObserver(([e]) => setAtFooter(e.isIntersecting)) : null;
    if (footer && io) io.observe(footer);
    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, []);

  const show = pastHero && !atFooter;
  const hasLinkedIn = linkedin && linkedin !== "#";

  return (
    <div className={`fab${show ? " is-on" : ""}`} aria-hidden={show ? undefined : "true"}>
      <a href="#contact" className="fab-main" tabIndex={show ? undefined : -1}>
        Say hello →
      </a>
      {hasLinkedIn ? (
        <a href={linkedin} className="fab-alt" target="_blank" rel="noopener noreferrer" tabIndex={show ? undefined : -1}>
          LinkedIn ↗
        </a>
      ) : null}
    </div>
  );
}
