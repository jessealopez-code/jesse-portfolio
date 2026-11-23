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
import { icons } from "@/lib/icons";
import Motion from "./components/Motion";
import CountUp from "./components/CountUp";
import ChipArt from "./components/ChipArt";
import ScreenCarousel from "./components/ScreenCarousel";
import DeepNav from "./components/DeepNav";
import TypeTitle from "./components/TypeTitle";
import MobileMenu from "./components/MobileMenu";
import ContactForm from "./components/ContactForm";
import Magazine from "./components/Magazine";
import BenefitExplorer from "./components/BenefitExplorer";

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
        <MobileMenu
          items={[
            { href: "#about", label: "Bio" },
            { href: "#work", label: "Work" },
            { href: "#deep", label: "Deep dives" },
            { href: "#services", label: "Services" },
            { href: "#words", label: "Leadership" },
            { href: "#contact", label: "Say hello →", accent: true },
          ]}
        />
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
            <div>
              <p className="eyebrow sec-eyebrow about-eyebrow">Bio</p>
              <h2 className="h2">{bio.heading}</h2>
            </div>
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
            <p className="eyebrow sec-eyebrow">Marketing philosophy</p>
            <h2 className="principles-title">The best marketing is clear, compelling, and memorable.</h2>
            <div className="principles-grid" data-reveal>
              {principles.map((p, i) => (
                <div key={p.title} className="principle">
                  <div className="principle-top">
                    <svg
                      className="principle-icon"
                      viewBox="0 0 256 256"
                      fill="currentColor"
                      aria-hidden="true"
                      dangerouslySetInnerHTML={{ __html: icons[p.icon] ?? "" }}
                    />
                    <span className="principle-num">{pad(i + 1)}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work by company */}
        <section id="work" className="container work">
          <div className="work-head">
            <p className="eyebrow sec-eyebrow">Work</p>
            <h2 className="work-title">
              Led impactful work
              <br />
              across <span className="accent">tech.</span>
            </h2>
          </div>
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
                {h.headline ? (
                  <h3 className="vori-subhead highlight-headline">
                    <span className="vori-num">01</span>
                    {h.headline}
                  </h3>
                ) : null}
                <BeforeAfter before={h.before} after={h.after} />
                <Collapsible>
                {h.points.length ? (
                  <div className="highlight-points" data-reveal>
                    {h.points.map((pt) => (
                      <p key={pt.slice(0, 24)}>{pt}</p>
                    ))}
                  </div>
                ) : null}
                {h.link ? (
                  <SmartLink href={h.link.href} className="highlight-link">
                    {h.link.label} →
                  </SmartLink>
                ) : null}
                {(() => {
                  // Numbered story blocks; the App Store screens block can sit anywhere in the sequence (screensAfter).
                  const base = h.headline ? 1 : 0;
                  const moreCount = h.more?.length ?? 0;
                  const sAt = h.screens ? Math.min(h.screensAfter ?? 0, moreCount) : -1;
                  const screensNum = base + sAt + 1;
                  const screensBlock = h.screens ? (

                  <div className="vori-block">
                    <h3 className="vori-subhead">
                      <span className="vori-num">{pad(screensNum)}</span>
                      {h.screens.heading}
                    </h3>
                    <p className="launch-text screens-text">{h.screens.text}</p>
                    <ScreenCarousel screens={h.screens.images} label="Square Invoices App Store screens" />
                  </div>
                
                  ) : null;
                  const blocks = h.more?.map((blk, bi) => {
                  const num = base + bi + 1 + (sAt >= 0 && bi >= sAt ? 1 : 0);
                  const fig = (im: { src: string; alt: string; caption: string }) => (
                    <figure key={im.src} className={blk.layout === "single" ? "sq-shot" : "sq-card"}>
                      <div className={blk.layout === "single" ? "sq-frame" : "sq-card-img"}>
                        <img src={im.src} alt={im.alt} loading="lazy" />
                      </div>
                      <figcaption>{im.caption}</figcaption>
                    </figure>
                  );
                  return (
                    <div key={blk.heading} className="vori-block sq-block">
                      <h3 className="vori-subhead">
                        <span className="vori-num">{pad(num)}</span>
                        {blk.heading}
                      </h3>
                      <p className="launch-text">{blk.text}</p>
                      {blk.layout === "benefits" && blk.benefits ? (
                        <BenefitExplorer items={blk.benefits} label={blk.heading} />
                      ) : blk.layout === "verticals" && blk.verticals ? (
                        <CardRail className="sq-rail sq-rail--verticals" label={blk.heading}>
                          {blk.verticals.map((v) => (
                            <article key={v.title} className="vert-card">
                              <img className="vert-photo" src={v.image} alt="" loading="lazy" />
                              <div className="vert-body">
                                <h4>{v.title}</h4>
                                <p className="vert-sub">{v.subtitle}</p>
                                <ul>
                                  {v.points.map((pt) => (
                                    <li key={pt}>
                                      {pt.split(/\[\[(.+?)\]\]/).map((part, k) =>
                                        k % 2 ? (
                                          <span key={k} className="vert-link">
                                            {part}
                                          </span>
                                        ) : (
                                          part
                                        )
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </article>
                          ))}
                        </CardRail>
                      ) : blk.layout === "single" ? (
                        <div className="sq-shots" data-reveal>
                          {blk.images.map(fig)}
                        </div>
                      ) : (
                        <CardRail className={`sq-rail sq-rail--${blk.layout}`} label={blk.heading}>
                          {blk.images.map(fig)}
                        </CardRail>
                      )}
                    </div>
                  );
                });
                  return (
                    <>
                      {blocks?.slice(0, Math.max(sAt, 0))}
                      {screensBlock}
                      {blocks?.slice(Math.max(sAt, 0))}
                    </>
                  );
                })()}
                {h.extra ? (
                  <div className="vori-block">
                    <h3 className="vori-subhead">
                      <span className="vori-num">{pad((h.headline ? 1 : 0) + (h.screens ? 1 : 0) + (h.more?.length ?? 0) + 1)}</span>
                      {h.extra.heading}
                    </h3>
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
                  <Magazine
                    key={item.title}
                    title={item.title}
                    text={item.text}
                    cover={item.cover}
                    dir={item.pagesDir}
                    count={item.pageCount}
                    href={item.href}
                    linkLabel={item.linkLabel}
                  />
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
              <VideoGrid items={vori.videos.items} label="Vori video" />
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
        <section id="services" className="container svc">
          <div className="svc-head">
            <p className="eyebrow sec-eyebrow">{services.eyebrow}</p>
            <h2>{services.title}</h2>
            <p className="svc-sub">{services.sub}</p>
          </div>
          {(() => {
            let n = 0;
            return services.groups.map((g) => (
              <div key={g.label} className="svc-group">
                <div className="svc-act">
                  <span className="svc-act-label">{g.label}</span>
                  <span className="svc-act-rule" />
                </div>
                <CardRail className="svc-grid" label={`Services: ${g.label}`}>
                  {g.cards.map((c) => {
                    n += 1;
                    return (
                      <article key={c.name} className={`svc-card${c.tag ? " svc-card--ai" : ""}`}>
                        <div className="svc-top">
                          <svg
                            className="svc-icon"
                            viewBox="0 0 256 256"
                            fill="currentColor"
                            aria-hidden="true"
                            dangerouslySetInnerHTML={{ __html: icons[c.icon] ?? "" }}
                          />
                          <span className="svc-meta">
                            {c.tag && <span className="svc-tag">{c.tag}</span>}
                            <span className="svc-num">{String(n).padStart(2, "0")}</span>
                          </span>
                        </div>
                        <h3>{c.name}</h3>
                        <p className="svc-line">{c.line}</p>
                        <ul>
                          {c.items.map((it) => (
                            <li key={it}>{it}</li>
                          ))}
                        </ul>
                      </article>
                    );
                  })}
                </CardRail>
              </div>
            ));
          })()}
          <a href="#contact" className="svc-cta">
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
          <div className="contact">
            <div className="contact-intro">
              <p className="eyebrow sec-eyebrow contact-eyebrow">{site.contactEyebrow}</p>
              <h2 className="footer-line">{site.contactTitle}</h2>
              <p className="contact-text">{site.contactText}</p>
              <SocialLinks className="footer-links" />
            </div>
            <ContactForm
              email={links.email}
              topics={site.contactTopics}
            />
          </div>
          <div className="footer-bottom">
            <p className="footer-motto">{site.footerLine}</p>
            <p className="footer-copy">
              © {new Date().getFullYear()} {site.name}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
