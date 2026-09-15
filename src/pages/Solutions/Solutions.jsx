import { useEffect, useRef, useState } from 'react';
import Button from '../../components/ui/Button';
import Container from '../../components/layout/Container';
import Navbar from '../../components/layout/Navbar';
import Section from '../../components/layout/Section';
import './Solutions.css';

const solutions = [
  {
    id: 'web',
    label: 'Web Development',
    title: 'Performant web apps built for scale.',
    desc: 'From marketing sites to complex SaaS platforms — fast, accessible, production-grade applications with modern frameworks and clean architecture.',
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js'],
    outcomes: [
      'Production-ready site in 6–10 weeks',
      'Design system your team can extend',
      'Core Web Vitals optimized from day one',
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile Apps',
    title: 'iOS & Android, native where it counts.',
    desc: 'Cross-platform where it makes sense, native where it matters. Mobile experiences that users actually return to.',
    tags: ['React Native', 'Swift', 'Kotlin'],
    outcomes: [
      'App Store & Play Store-ready builds',
      'Offline-capable with local data sync',
      'Analytics and crash reporting wired in',
    ],
  },
  {
    id: 'ai',
    label: 'AI & Automation',
    title: 'Intelligent workflows that learn.',
    desc: 'LLM integrations to custom ML pipelines. We embed intelligence where it creates the most leverage in your operations.',
    tags: ['LLMs', 'Pipelines', 'Agents', 'APIs'],
    outcomes: [
      'Custom LLM integration with your data',
      'Automated workflows saving measurable hours/week',
      'Human-in-the-loop controls and full audit trails',
    ],
  },
  {
    id: 'data',
    label: 'Data & Analytics',
    title: 'Raw data turned into real decisions.',
    desc: 'Real-time dashboards, ETL pipelines, and predictive models that give leadership the signal — not the noise.',
    tags: ['Analytics', 'ETL', 'SQL', 'Dashboards'],
    outcomes: [
      'Executive dashboard live within 4 weeks',
      'Cleaned, reliable data pipeline you own',
      'Anomaly detection and threshold alerts',
    ],
  },
  {
    id: 'ux',
    label: 'UI/UX Design',
    title: 'Interfaces that feel inevitable.',
    desc: 'Research-led design that bridges business goals with user needs. Systems built to scale across your entire product surface.',
    tags: ['Research', 'Figma', 'Design Systems'],
    outcomes: [
      'Validated user insights from real research',
      'Full Figma design system with component library',
      'Developer-ready specs your team will actually use',
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & Infrastructure',
    title: 'The foundation everything runs on.',
    desc: 'Scalable, observable infrastructure — serverless, containers, or hybrid. Architected for what you actually need.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    outcomes: [
      'Zero-downtime deployment pipeline',
      'Cost-optimized infra with usage dashboards',
      'Incident alerts and runbook documentation',
    ],
  },
];

const steps = [
  {
    label: 'Align',
    desc: "We spend the first phase understanding your actual constraints — budget, timeline, technical debt, team capacity. No solution before we've understood the problem.",
  },
  {
    label: 'Architect',
    desc: 'We design the system, not just the feature. Tech stack decisions, data model, design language, and an integration plan before any code is written.',
  },
  {
    label: 'Accelerate',
    desc: 'We ship in tight cycles with live previews and async reviews. No big bang at the end — working software, early and often, in production.',
  },
];

function SolutionsVisual() {
  return (
    <div className="sol-visual sol-visual--simple" aria-label="Novexa solutions overview">
      <div className="sol-visual__halo" />
      <div className="sol-visual__core">
        <div className="sol-visual__header">
          <span>NX / SOLUTIONS</span>
          <small>01—06</small>
        </div>
        <ul className="sol-visual__list" aria-label="Solution areas">
          {solutions.map((s) => (
            <li key={s.id} className="sol-visual__item">
              <i aria-hidden="true" />
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
        <div className="sol-visual__footer">
          <span>STRATEGY</span>
          <span>DESIGN</span>
          <span>TECHNOLOGY</span>
        </div>
        <div className="sol-visual__orbit" aria-hidden="true" />
      </div>
      <div className="sol-visual__signal sol-visual__signal--top"><i /> AI / ACTIVE</div>
      <div className="sol-visual__signal sol-visual__signal--bottom">DATA <b>↗</b></div>
    </div>
  );
}

function IntroOverview() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <Section
      className={`sol-overview ${visible ? 'sol-overview--visible' : ''}`}
      ref={ref}
      id="what-we-build"
    >
      <Container>
        <div className="sol-overview__heading">
          <p className="sol-overview__eyebrow">What we build</p>
          <h2>We turn every business challenge into a tailored digital solution.</h2>
        </div>
        <div className="sol-overview__body">
          <p>
            Novexa combines strategy, design, software, AI, automation, and data to help businesses create and scale digital products — end to end.
          </p>
          <span className="sol-overview__index">01 / 06</span>
        </div>
        <div className="sol-overview__rail" aria-label="Solution areas">
          <span className="sol-overview__rail-label">Covering</span>
          {solutions.map((s) => (
            <span key={s.id} className="sol-overview__item">{s.label}</span>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function SolutionCard({ label, title, desc, tags, outcomes, delay }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={`sol-card ${visible ? 'sol-card--visible' : ''}`}
      style={{ '--card-delay': delay }}
    >
      <p className="sol-card__label">{label}</p>
      <h3 className="sol-card__title">{title}</h3>
      <p className="sol-card__desc">{desc}</p>
      {outcomes && (
        <ul className="sol-card__outcomes" aria-label="What you get">
          {outcomes.map((o) => (
            <li key={o} className="sol-card__outcome">
              <svg className="sol-card__outcome-icon" viewBox="0 0 12 12" aria-hidden="true" focusable="false">
                <polyline points="1.5,6.5 4.5,9.5 10.5,2.5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {o}
            </li>
          ))}
        </ul>
      )}
      <div className="sol-card__footer">
        <div className="sol-card__tags" aria-label="Technologies">
          {tags.map((t) => <span key={t} className="sol-card__tag">{t}</span>)}
        </div>
        <span className="sol-card__cta">
          Discuss this <span aria-hidden="true">→</span>
        </span>
      </div>
    </article>
  );
}

export default function Solutions() {
  return (
    <main className="solutions-page">
      <Navbar />

      <Section className="sol-hero" id="solutions">
        <Container>
          <div className="sol-hero__content">
            <div className="sol-hero__copy">
              <p className="sol-hero__label">STRATEGY <span>·</span> DESIGN <span>·</span> TECHNOLOGY</p>
              <h1>Capabilities that cover every angle.</h1>
              <p className="sol-hero__desc">
                From web and mobile to AI, automation, design, and cloud — every discipline you need, coordinated by one team that cares about the whole.
              </p>
              <div className="sol-hero__actions">
                <Button type="button">
                  Start a Project <span className="button__arrow" aria-hidden="true">↗</span>
                </Button>
                <Button type="button" variant="outline">
                  See Our Work <span className="button__arrow" aria-hidden="true">→</span>
                </Button>
              </div>
            </div>
            <SolutionsVisual />
          </div>
          <div className="sol-hero__capabilities" aria-label="Solution areas">
            {solutions.map((s) => <span key={s.id}>{s.label}</span>)}
          </div>
        </Container>
      </Section>

      <IntroOverview />

      <Section className="sol-grid-section">
        <Container>
          <div className="sol-grid">
            {solutions.map((s, i) => (
              <SolutionCard key={s.id} {...s} delay={`${i * 80}ms`} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="sol-process">
        <Container>
          <div className="sol-process__heading">
            <p className="sol-process__eyebrow">How we work</p>
            <h2>From first call<br />to live product.</h2>
          </div>
          <div className="sol-process__steps">
            {steps.map(({ label, desc }, i) => (
              <div key={label} className="sol-process__step">
                <span className="sol-process__step-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="sol-process__step-title">{label}</h3>
                <p className="sol-process__step-desc">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="sol-cta">
        <Container>
          <p className="sol-cta__eyebrow">Start a project</p>
          <h2 className="sol-cta__heading">Ready to solve a real problem?</h2>
          <p className="sol-cta__desc">Tell us what you're building. We'll tell you honestly whether we're the right fit.</p>
          <div className="sol-cta__actions">
            <Button type="button">
              Get in Touch <span className="button__arrow" aria-hidden="true">↗</span>
            </Button>
            <Button type="button" variant="outline">
              View Case Studies <span className="button__arrow" aria-hidden="true">→</span>
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
