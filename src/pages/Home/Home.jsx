import Button from '../../components/ui/Button';
import Container from '../../components/layout/Container';
import Navbar from '../../components/layout/Navbar';
import Section from '../../components/layout/Section';
import './Home.css';

const coreSystems = ['Web', 'Mobile', 'AI', 'Data', 'Cloud'];
const capabilities = ['Web Development', 'Mobile Apps', 'AI & Automation', 'Data & Analytics', 'UI/UX', 'Cloud'];

function HeroVisual() {
  return <div className="hero-visual" aria-label="Novexa digital core connecting web, mobile, AI, data, and cloud systems">
      <div className="hero-visual__halo" />
      <div className="hero-visual__grid" />
      <div className="hero-visual__card hero-visual__card--automation">
        <span className="hero-visual__card-label">AI AUTOMATION</span>
        <strong>Workflow active</strong>
        <b>+32% <small>efficiency</small></b>
      </div>
      <div className="hero-visual__core">
        <span className="hero-visual__core-eyebrow">NOVEXA</span>
        <strong>DIGITAL CORE</strong>
        <div className="hero-visual__core-orbit" aria-hidden="true" />
        <div className="hero-visual__systems">
          {coreSystems.map((system) => <span key={system}>{system}</span>)}
        </div>
      </div>
      <div className="hero-visual__card hero-visual__card--analytics">
        <span className="hero-visual__card-label">DATA ANALYTICS</span>
        <strong>Performance <b>↗</b></strong>
        <div className="hero-visual__mini-chart" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
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
              <h1>We Build Digital Products<br />That Move Businesses<br />Forward.</h1>
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
    </main>
  );
}
