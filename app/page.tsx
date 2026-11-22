/* eslint-disable @next/next/no-img-element */
import { bio, chapters, highlights, links, principles, services, site, vori } from "@/content/site";
import LogoMarquee from "./components/LogoMarquee";
import Placeholder from "./components/Placeholder";
import WebsiteStack from "./components/WebsiteStack";
import { VideoGrid, VideoLink } from "./components/VideoModal";
import { youtubeId } from "@/lib/youtube";
import QuoteSlider from "./components/QuoteSlider";
import SmartLink from "./components/SmartLink";
import CardRail from "./components/CardRail";
import CompanyTabs from "./components/CompanyTabs";
import FloatingContact from "./components/FloatingContact";
import Collapsible from "./components/Collapsible";
import BeforeAfter from "./components/BeforeAfter";
import { companyId } from "@/lib/ids";
import Motion from "./components/Motion";
import CountUp from "./components/CountUp";
import ChipArt from "./components/ChipArt";
import ScreenCarousel from "./components/ScreenCarousel";
import DeepNav from "./components/DeepNav";
import TypeTitle from "./components/TypeTitle";

const pad = (n: number) => String(n).padStart(2, "0");

function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={className}>
      <SmartLink href={links.linkedin}>LinkedIn ↗</SmartLink>
      <SmartLink href={links.sharebird}>Sharebird ↗</SmartLink>
      <SmartLink href={links.twitter}>X / Twitter ↗</SmartLink>
      {links.email ? <a href={`mailto:${links.email}`}>{links.email}</a> : null}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <header className="container nav">
        <a href="#top" className="nav-logo">
          JL.
        </a>
        <nav className="nav-links" aria-label="Main">
          <a href="#about">Bio</a>
          <a href="#work">Work</a>
          <a href="#deep">Deep dives</a>
          <a href="#services">Services</a>
          <a href="#words">Leadership</a>
          <a href="#contact" className="accent-link">
            Say hello →
          </a>
        </nav>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="container hero">
          <div className="hero-glow" aria-hidden="true">
            <span className="glow glow--1" />
            <span className="glow glow--2" />
            <span className="glow glow--3" />
          </div>
          <div className="hero-text">
            <p className="muted">
              {site.name} — {site.role.toLowerCase()}
            </p>
            <TypeTitle
              className="hero-title"
              lines={[{ text: "Marketer." }, { text: "Strategist." }, { text: "Storyteller.", accent: true }]}
            />
            <p className="hero-intro">{site.heroIntro}</p>
          </div>
          <div className="hero-photo">
            <img src="/images/hero.jpg" alt={`${site.name} seated on a wooden block, smiling`} />
          </div>
        </section>

        <LogoMarquee />

        {/* About */}
        <section id="about" className="container about">
          <div className="about-head">
            <img className="headshot" src="/images/headshot.jpg" alt={`Portrait of ${site.name}`} />
            <h2 className="h2">{bio.heading}</h2>
          </div>
          <div className="about-body">
            {bio.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </section>

        {/* Principles */}
        <section className="principles">
          <div className="container">
            <h2 className="principles-title">The best marketing is clear, compelling, and memorable.</h2>
            <div className="principles-grid" data-reveal>
              {principles.map((p, i) => (
                <div key={p.title} className="principle">
                  <span className="principle-num">{pad(i + 1)}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work by company */}
        <section id="work" className="container work">
          <h2 className="work-title">
            Led impactful work
            <br />
            across <span className="accent">tech.</span>
          </h2>
          <CompanyTabs companies={chapters.map((c) => c.company)} />
          {chapters.map((c, ci) => (
            <div key={c.company} className="chapter" id={companyId(c.company)} data-company={c.company}>
              <div className="chapter-head">
                <span className="eyebrow">{c.category}</span>
                <h3 className="chapter-company">{c.company}</h3>
                <p className="chapter-headline">{c.headline}</p>
                <p className="muted small">{c.note}</p>
              </div>
              <CardRail className="chapter-cards" label={`${c.company} projects`}>
                {c.projects.map((p) => (
                  <article key={p.title} className="card">
                    {p.art === "chip" ? <ChipArt /> : <Placeholder src={p.image} alt={p.title} label={c.company} />}
                    <div className="card-body">
                      <h4>{p.title}</h4>
                      <p>{p.text}</p>
                      {youtubeId(p.href) && p.href !== "#" ? (
                        <VideoLink url={p.href} className="card-link">
                          ▶ {p.linkLabel}
                        </VideoLink>
                      ) : (
                        <SmartLink href={p.href} className="card-link">
                          {p.linkLabel} →
                        </SmartLink>
                      )}
                    </div>
                  </article>
                ))}
              </CardRail>
            </div>
          ))}
        </section>

        {/* Highlights */}
        <div className="deep" id="deep">
          <div className="container deep-open">
            <p className="eyebrow">Deep dives</p>
            <h2>Go deeper.</h2>
            <p className="deep-sub">Selected stories that show how I approach positioning, go-to-market, and storytelling.</p>
            <div className="deep-rule" />
          </div>
          <DeepNav
            items={[
              ...highlights.map((h) => ({ id: `deep-${companyId(h.company).slice(3)}`, label: h.company })),
              { id: "deep-vori", label: "Vori" },
            ]}
          />
          <section className="container highlights">
            {highlights.map((h) => (
              <div key={h.title} className="highlight" id={`deep-${companyId(h.company).slice(3)}`}>
                <div className="highlight-head">
                  <span className="highlight-stat">{h.stat}</span>
                  <h2 className="highlight-title">{h.title}</h2>
                </div>
                <BeforeAfter before={h.before} after={h.after} />
                <Collapsible>
                <div className="highlight-points" data-reveal>
                  {h.points.map((pt) => (
                    <p key={pt.slice(0, 24)}>{pt}</p>
                  ))}
                </div>
                {h.link ? (
                  <SmartLink href={h.link.href} className="highlight-link">
                    {h.link.label} →
                  </SmartLink>
                ) : null}
                {h.screens ? (
                  <div className="vori-block">
                    <h3 className="vori-subhead">{h.screens.heading}</h3>
                    <p className="launch-text screens-text">{h.screens.text}</p>
                    <ScreenCarousel screens={h.screens.images} label="Square Invoices App Store screens" />
                  </div>
                ) : null}
                {h.extra ? (
                  <div className="vori-block">
                    <h3 className="vori-subhead">{h.extra.heading}</h3>
                    <CardRail className="vori-grid-3" label="Credibility projects">
                      {h.extra.items.map((item) => (
                        <article key={item.title} className="card">
                          <Placeholder src={item.image} alt={item.title} label="Image" />
                          <div className="card-body">
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                            <SmartLink href={item.href} className="card-link">
                              {item.linkLabel} →
                            </SmartLink>
                          </div>
                        </article>
                      ))}
                    </CardRail>
                  </div>
                ) : null}
                </Collapsible>
              </div>
            ))}
          </section>

          {/* Vori spotlight */}
          <section className="container vori" id="deep-vori" aria-labelledby="vori-title">
            <div className="highlight-head">
              <span className="highlight-stat">{vori.stat}</span>
              <div className="vori-headline">
                <h2 id="vori-title" className="highlight-title">
                  {vori.title}
                </h2>
                {vori.subtitle ? <p className="muted">{vori.subtitle}</p> : null}
              </div>
            </div>

            <div className="vori-block">
              <h3 className="vori-subhead">
                <span className="vori-num">01</span>
                {vori.website.heading}
              </h3>
              <WebsiteStack pages={vori.website.pages} />
            </div>

            <Collapsible>
            <div className="vori-block">
              <h3 className="vori-subhead">
                <span className="vori-num">02</span>
                {vori.chip.heading}
              </h3>
              <div className="launch">
                <div className="launch-media chip-section-media">
                  <img src={vori.chip.image} alt={vori.chip.alt} loading="lazy" />
                </div>
                <div className="launch-body">
                  <ul className="cases-uses" data-reveal>
                    {vori.chip.points.map((pt) => (
                      <li key={pt.title}>
                        <h4>{pt.title}</h4>
                        <p>{pt.text}</p>
                      </li>
                    ))}
                  </ul>
                  <SmartLink href={vori.chip.href} className="highlight-link">
                    {vori.chip.linkLabel} →
                  </SmartLink>
                </div>
              </div>
            </div>

            <div className="vori-block">
              <h3 className="vori-subhead">
                <span className="vori-num">03</span>
                {vori.content.heading}
              </h3>
              <div className="vori-grid-2" data-reveal>
                {vori.content.items.map((item) => (
                  <article key={item.title} className="card">
                    <Placeholder src={item.image} alt={item.title} label="Cover image" />
                    <div className="card-body">
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                      <SmartLink href={item.href} className="card-link">
                        {item.linkLabel} →
                      </SmartLink>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="vori-block">
              <h3 className="vori-subhead">
                <span className="vori-num">04</span>
                {vori.caseStudies.heading}
              </h3>
              <div className="cases-wrap">
                <div className="cases-text">
                  <p className="launch-text">{vori.caseStudies.intro}</p>
                  <ul className="cases-uses" data-reveal>
                    {vori.caseStudies.uses.map((u) => (
                      <li key={u.title}>
                        <h4>{u.title}</h4>
                        <p>{u.text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="vori-cases" data-reveal>
                  {vori.caseStudies.items.map((c) => (
                    <a key={c.image} href={c.href} target="_blank" rel="noopener noreferrer" className="vori-case-link">
                      <img src={c.image} alt={c.alt} loading="lazy" className="vori-case" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="vori-block">
              <h3 className="vori-subhead">
                <span className="vori-num">05</span>
                {vori.videos.heading}
              </h3>
              <VideoGrid ids={vori.videos.ids} label="Vori video" />
            </div>

            <div className="vori-block">
              <h3 className="vori-subhead">
                <span className="vori-num">06</span>
                {vori.launches.heading}
              </h3>
              <div className="launch">
                <div className="launch-media">
                  <Placeholder src={vori.launches.image} alt="Vori 2026 releases page" label="2026 releases page" />
                </div>
                <div className="launch-body">
                  <p className="launch-text">{vori.launches.text}</p>
                  <div className="launch-stats">
                    {vori.launches.stats.map((s) => (
                      <div key={s.label} className="launch-stat">
                        <span className="launch-stat-value"><CountUp value={s.value} /></span>
                        <span className="muted small">{s.label}</span>
                      </div>
                    ))}
                  </div>
                  <SmartLink href={vori.launches.href} className="highlight-link">
                    {vori.launches.linkLabel} →
                  </SmartLink>
                </div>
              </div>
              <ol className="launch-steps" data-reveal>
                {vori.launches.steps.map((s, i) => (
                  <li key={s.title} className="launch-step">
                    <span className="launch-step-num">{pad(i + 1)}</span>
                    <h4>{s.title}</h4>
                    <p>{s.text}</p>
                  </li>
                ))}
              </ol>
            </div>
            </Collapsible>
          </section>

        </div>

        {/* Services */}
        <section id="services" className="container services">
          <div className="services-head">
            <p className="eyebrow">{services.eyebrow}</p>
            <h2>{services.title}</h2>
            <p className="services-sub">{services.sub}</p>
          </div>
          <ol className="stages" data-anim>
            {services.stages.map((st, i) => (
              <li key={st.name} className={`stage${st.tag ? " stage--ai" : ""}`} style={{ ["--i" as string]: i } as React.CSSProperties}>
                <span className="stage-num">{String(i + 1).padStart(2, "0")}</span>
                {st.tag && <span className="stage-tag">{st.tag}</span>}
                <h3>{st.name}</h3>
                <p className="stage-line">{st.line}</p>
                <ul>
                  {st.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
          <a href="#contact" className="services-cta">
            {services.cta}
          </a>
        </section>

        {/* Testimonials */}
        <section id="words" className="words">
          <div className="words-inner">
            <div className="words-head">
              <p className="eyebrow">Leadership</p>
              <h2>In their words.</h2>
              <p className="words-sub">What the people I&apos;ve managed say about working together.</p>
              <div className="words-rule" />
            </div>
            <QuoteSlider />
            <SmartLink href={links.recommendations} className="accent-link">
              Read all recommendations →
            </SmartLink>
          </div>
        </section>
      </main>

      <FloatingContact linkedin={links.linkedin} />
      <Motion />

      <footer id="contact" className="footer">
        <div className="container footer-inner">
          <p className="footer-line">{site.footerLine}</p>
          <SocialLinks className="footer-links" />
          <p className="footer-copy">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </footer>
    </>
  );
}
