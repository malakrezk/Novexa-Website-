import Button from '../../ui/Button';
import Container from '../../layout/Container';
import Section from '../../layout/Section';
import './Hero.css';

const capabilities = ['Web Platforms', 'Mobile Applications', 'AI & Automation', 'Data & Analytics', 'UI/UX Design', 'Cloud & Integrations'];

const nodes = [
  { key: 'web', label: 'Web', className: 'hero-core__node--web' },
  { key: 'mobile', label: 'Mobile', className: 'hero-core__node--mobile' },
  { key: 'ai', label: 'AI', className: 'hero-core__node--ai' },
  { key: 'data', label: 'Data', className: 'hero-core__node--data' },
  { key: 'cloud', label: 'Cloud', className: 'hero-core__node--cloud' },
];

function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Novexa team delivering digital product work">
      <div className="hero-visual__frame hero-visual__frame--main">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
          alt="Technology team reviewing product metrics in a strategy meeting"
        />
      </div>

      <div className="hero-visual__card hero-visual__card--stats">
        <span className="hero-visual__eyebrow">Delivery</span>
        <strong>+32%</strong>
        <small>Product efficiency</small>
      </div>

      <div className="hero-visual__card hero-visual__card--mini">
        <div className="hero-visual__mini-portrait">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
            alt="Creative team collaborating on a digital product strategy"
          />
        </div>
        <div>
          <p>Design sprint</p>
          <b>4 weeks</b>
        </div>
      </div>

      <div className="hero-visual__badge">
        <span className="hero-visual__dot" />
        Product systems · live
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <Section className="hero" id="top">
      <Container>
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="hero__eyebrow">DIGITAL PRODUCTS <span>·</span> AI <span>·</span> AUTOMATION</p>
            <h1 className="hero__headline">
              Digital Solutions
              <br />
              Built to Move
              <br />
              Business Forward.
            </h1>
            <p className="hero__description">
              Novexa helps businesses turn ideas, processes, and data into scalable digital products
              through software, design, AI, automation, and analytics.
            </p>
            <div className="hero__actions">
              <Button as="a" href="#contact">
                Start a Project <span className="button__arrow" aria-hidden="true">↗</span>
              </Button>
              <Button as="a" href="#services" variant="outline">
                Explore Services <span className="button__arrow" aria-hidden="true">→</span>
              </Button>
            </div>
          </div>
          <HeroVisual />
        </div>

        <div className="hero__capabilities">
          {capabilities.map((capability) => <span key={capability}>{capability}</span>)}
        </div>
      </Container>
    </Section>
  );
}
