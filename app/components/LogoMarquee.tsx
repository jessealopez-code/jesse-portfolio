import { logos } from "@/content/site";

export default function LogoMarquee() {
  // The list is rendered twice so the loop is seamless; the copy is hidden from screen readers.
  const items = [...logos.map((l) => ({ ...l, copy: false })), ...logos.map((l) => ({ ...l, copy: true }))];
  return (
    <section className="marquee-section" aria-label="Companies Jesse has worked with">
      <div className="marquee">
        <div className="marquee-track">
          {items.map((logo, i) => (
            <div className="marquee-item" key={i} aria-hidden={logo.copy || undefined}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logo.src} alt={logo.copy ? "" : logo.name} style={{ height: logo.height }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
