import { useEffect, useRef, useState } from 'react';
import Button from '../../components/ui/Button';
import Container from '../../components/layout/Container';
import Navbar from '../../components/layout/Navbar';
import Section from '../../components/layout/Section';
import './Home.css';

const capabilities = ['Web Development', 'Mobile Apps', 'AI & Automation', 'Data & Analytics', 'UI/UX', 'Cloud'];
const trustItems = ['Growth-stage teams', 'Global operations', 'Product-led businesses', 'Ambitious founders'];

function IntroTrust() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Section className={`intro-trust ${isVisible ? 'intro-trust--visible' : ''}`} id="about" ref={sectionRef}>
      <Container>
        <div className="intro-trust__heading">
          <p className="intro-trust__eyebrow">The Novexa approach</p>
          <h2>We turn complex business challenges into simple digital experiences.</h2>
        </div>
        <div className="intro-trust__body">
          <p>
            Novexa combines strategy, design, software, AI, automation, and data to help businesses create and scale digital products.
          </p>
          <span className="intro-trust__index">01 / 04</span>
        </div>
        <div className="intro-trust__rail" aria-label="Teams Novexa works with">
          <span className="intro-trust__rail-label">Built for</span>
          {trustItems.map((item) => <span className="intro-trust__item" key={item}>{item}</span>)}
        </div>
      </Container>
    </Section>
  );
}

function HeroVisual() {
  return <div className="hero-visual" aria-label="Novexa digital core connecting web, mobile, AI, data, and cloud systems">
      <div className="hero-visual__halo" />
      <div className="hero-visual__grid" />
      <div className="hero-visual__topline">
        <span><i /> N-OS / LIVE SYSTEM</span>
        <span>09.24.06 <b>●</b></span>
      </div>
      <div className="hero-visual__core">
        <div className="hero-visual__core-ring hero-visual__core-ring--outer" />
        <div className="hero-visual__core-ring hero-visual__core-ring--inner" />
        <span className="hero-visual__core-eyebrow">NOVEXA / 001</span>
        <strong>CORE</strong>
        <span className="hero-visual__core-caption">INTELLIGENT SYSTEMS</span>
        <div className="hero-visual__core-orbit" aria-hidden="true" />
      </div>
      <div className="hero-visual__orbit-label hero-visual__orbit-label--web"><i />WEB</div>
      <div className="hero-visual__orbit-label hero-visual__orbit-label--mobile"><i />MOBILE</div>
      <div className="hero-visual__orbit-label hero-visual__orbit-label--ai"><i />AI</div>
      <div className="hero-visual__orbit-label hero-visual__orbit-label--data"><i />DATA</div>
      <div className="hero-visual__orbit-label hero-visual__orbit-label--cloud"><i />CLOUD</div>
      <div className="hero-visual__card hero-visual__card--automation">
        <span className="hero-visual__card-label"><i /> AI AUTOMATION</span>
        <strong>Workflow active</strong>
        <b>+32% <small>efficiency</small></b>
        <div className="hero-visual__progress"><i /></div>
      </div>
      <div className="hero-visual__card hero-visual__card--analytics">
        <span className="hero-visual__card-label"><i /> DATA ANALYTICS</span>
        <strong>Performance <b>↗</b></strong>
        <div className="hero-visual__mini-chart" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
      </div>
      <div className="hero-visual__telemetry">
        <span>THROUGHPUT</span><b>84.6%</b><i><em /></i>
        <span>ACTIVE NODES</span><b>05 / 05</b><i><em /></i>
      </div>
      <div className="hero-visual__connector hero-visual__connector--top" />
      <div className="hero-visual__connector hero-visual__connector--bottom" />
    </div>;
}

export default function Home() {
  return (
    <main className="home">
      <Navbar />
      <Section className="home__hero" id="home">
        <Container>
          <div className="hero__content">
            <div className="hero__copy">
              <p className="hero__label">STRATEGY <span>·</span> DESIGN <span>·</span> TECHNOLOGY</p>
              <h1>Build Smarter.<br />Move Faster.<br />Scale Further.</h1>
              <p className="hero__description">
                From web and mobile applications to AI, automation, and data platforms — Novexa turns complex ideas into scalable digital solutions.
              </p>
              <div className="hero__actions">
                <Button type="button">
                  Start a Project <span className="button__arrow" aria-hidden="true">↗</span>
                </Button>
                <Button type="button" variant="outline">
                  Explore Services <span className="button__arrow" aria-hidden="true">→</span>
                </Button>
              </div>
            </div>
            <HeroVisual />
          </div>
          <div className="hero__capabilities" aria-label="Novexa capabilities">
            {capabilities.map((capability) => <span key={capability}>{capability}</span>)}
          </div>
        </Container>
      </Section>
      <IntroTrust />
    </main>
  );
}
