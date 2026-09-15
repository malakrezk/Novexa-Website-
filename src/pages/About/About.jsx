import { useEffect, useRef, useState } from 'react';
import Button from '../../components/ui/Button';
import Container from '../../components/layout/Container';
import Navbar from '../../components/layout/Navbar';
import Section from '../../components/layout/Section';
import './About.css';

const stats = [
  { id: 'years', value: '5+', label: 'Years building digital products' },
  { id: 'projects', value: '40+', label: 'Projects completed' },
  { id: 'industries', value: '6', label: 'Industries worked with' },
];

const expertise = [
  {
    id: 'strategy',
    title: 'Strategy',
    desc: 'We take the time to understand what you are trying to solve before we start building. That keeps the work focused on what actually matters.',
  },
  {
    id: 'design',
    title: 'Design',
    desc: 'We design clear, practical interfaces that are easy to understand and built for everyday use.',
  },
  {
    id: 'engineering',
    title: 'Engineering',
    desc: 'We build reliable software with clean code and reusable components, so it can keep growing as your needs change.',
  },
  {
    id: 'ai-data',
    title: 'AI & Data',
    desc: 'We use AI, automation, and data to save time, improve decisions, and make everyday work easier.',
  },
];

function useRevealOnScroll() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function MissionVision() {
  const [ref, visible] = useRevealOnScroll();

  return (
    <Section
      className={`about__mission ${visible ? 'about__mission--visible' : ''}`}
      id="mission"
      ref={ref}
    >
      <Container>
        <div className="about__mission-grid">
          <div className="about__mission-card">
            <span className="about__mission-index">Mission</span>
            <h2>Build useful products that solve real problems.</h2>
            <p>
              We work with teams that are ready to turn an idea into something people
              can actually use. We care about getting the details right from the start.
            </p>
          </div>

          <div className="about__mission-card">
            <span className="about__mission-index">Vision</span>
            <h2>Make better software the standard.</h2>
            <p>
              Good software should be clear, reliable, and easy to use. That is the
              standard we aim for in every project we take on.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Expertise() {
  return (
    <Section className="about__expertise" id="expertise">
      <Container>
        <p className="about__eyebrow">What we do</p>

        <div className="about__expertise-grid">
          {expertise.map((item) => (
            <div className="about__expertise-card" key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function AboutHeroVisual() {
  return (
    <div className="about-visual" aria-label="Novexa digital system">
      <div className="about-visual__halo" />
      <div className="about-visual__core">
        <div className="about-visual__header">
          <span>NX / DIGITAL SYSTEM</span>
          <small>01&mdash;05</small>
        </div>
        <div className="about-visual__identity">
          <strong>NOVEXA</strong>
          <b>Digital Core</b>
        </div>
        <div className="about-visual__footer">
          <span>STRATEGY</span>
          <span>DESIGN</span>
          <span>TECH</span>
        </div>
        <div className="about-visual__orbit" aria-hidden="true" />
      </div>
      <div className="about-visual__signal about-visual__signal--top">
        <i /> AI / ACTIVE
      </div>
      <div className="about-visual__signal about-visual__signal--bottom">
        DATA <b>&#8599;</b>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <main className="about">
      <Navbar />

      <Section className="about__hero" id="about-hero">
        <Container>
          <div className="about__hero-grid">
            <div className="about__hero-copy">
              <p className="about__label">WHO WE ARE</p>

              <h1>
                We build the things that are<br />
                worth building.
              </h1>

              <p className="about__description">
                Novexa is a small team working across strategy, design, and engineering.
                We work closely with our clients to build digital products that are useful,
                reliable, and ready for real users.
              </p>

              <div className="about__stats" aria-label="Novexa at a glance">
                {stats.map((stat) => (
                  <div className="about__stat" key={stat.id}>
                    <span className="about__stat-value">{stat.value}</span>
                    <span className="about__stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <AboutHeroVisual />
          </div>
        </Container>
      </Section>

      <MissionVision />
      <Expertise />

      <Section className="about__cta" id="about-cta">
        <Container>
          <h2>Have a project in mind?</h2>

          <Button type="button">
            Start a Project{' '}
            <span className="button__arrow" aria-hidden="true">
              ↗
            </span>
          </Button>
        </Container>
      </Section>
    </main>
  );
}
