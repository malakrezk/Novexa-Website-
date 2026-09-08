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
  return (
    <div className="hero-visual hero-visual--simple" aria-label="Novexa digital core connecting software, AI, and data">
      <div className="hero-simple__halo" />
      <div className="hero-simple__core">
        <div className="hero-simple__header">
          <span>NX / DIGITAL SYSTEM</span>
          <small>01—05</small>
        </div>
        <div className="hero-simple__identity">
          <strong>NOVEXA</strong>
          <b>Digital Core</b>
        </div>
        <div className="hero-simple__footer">
          <span>STRATEGY</span>
          <span>DESIGN</span>
          <span>TECHNOLOGY</span>
        </div>
        <div className="hero-simple__orbit" aria-hidden="true" />
      </div>
      <div className="hero-simple__signal hero-simple__signal--top"><i /> AI / ACTIVE</div>
      <div className="hero-simple__signal hero-simple__signal--bottom">DATA <b>↗</b></div>
    </div>
  );
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
