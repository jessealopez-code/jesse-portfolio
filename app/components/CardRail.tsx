"use client";

import { Children, useRef, useState } from "react";

/**
 * Desktop: renders its children in the normal grid (className).
 * Phones: the same cards become a sideways-swipe row with dots (see .rail in globals.css).
 */
export default function CardRail({
  children,
  className,
  label,
}: {
  children: React.ReactNode;
  className: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const count = Children.count(children);

  const step = () => {
    const el = ref.current;
    if (!el || !el.firstElementChild) return 1;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    return (el.firstElementChild as HTMLElement).offsetWidth + gap;
  };

  const onScroll = () => {
    const el = ref.current;
    if (!el) return;
    setActive(Math.min(count - 1, Math.round(el.scrollLeft / step())));
  };

  const go = (i: number) => ref.current?.scrollTo({ left: i * step(), behavior: "smooth" });

  return (
    <div className="rail-wrap">
      <div ref={ref} className={`${className} rail`} onScroll={onScroll} aria-label={label}>
        {children}
      </div>
      {count > 1 ? (
        <div className="rail-dots">
          {Array.from({ length: count }, (_, i) => (
            <button
              key={i}
              type="button"
              className={`rail-dot${i === active ? " is-active" : ""}`}
              aria-label={`Show card ${i + 1} of ${count}`}
              aria-current={i === active ? "true" : undefined}
              onClick={() => go(i)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
