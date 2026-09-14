import Button from '../../components/ui/Button';
import Container from '../../components/layout/Container';
import Navbar from '../../components/layout/Navbar';
import Section from '../../components/layout/Section';
import './Services.css';

const services = [
  {
    id: 'web-development',
    label: 'Web Development',
    title: 'Web products built for real growth.',
    description: 'Fast, accessible web applications shaped around your users, team, and technical goals.',
    tags: ['React', 'Node.js', 'TypeScript'],
  },
  {
    id: 'mobile-apps',
    label: 'Mobile Apps',
    title: 'Mobile experiences people return to.',
    description: 'Thoughtful iOS and Android products that balance a clear experience with reliable engineering.',
    tags: ['React Native', 'iOS', 'Android'],
  },
  {
    id: 'ai-automation',
    label: 'AI & Automation',
    title: 'More leverage from intelligent workflows.',
    description: 'Practical AI and automation systems that reduce repetitive work and help teams move faster.',
    tags: ['AI', 'Automation', 'Integrations'],
  },
  {
    id: 'data-analytics',
    label: 'Data & Analytics',
    title: 'Clearer decisions from better data.',
    description: 'Reliable data foundations, dashboards, and reporting that turn information into action.',
    tags: ['Dashboards', 'ETL', 'Analytics'],
  },
  {
    id: 'ui-ux-design',
    label: 'UI/UX Design',
    title: 'Interfaces that make sense immediately.',
    description: 'Research-informed product design that connects business needs with everyday user behavior.',
    tags: ['Research', 'Figma', 'Systems'],
  },
  {
    id: 'cloud-infrastructure',
    label: 'Cloud & Infrastructure',
    title: 'A dependable foundation for what is next.',
    description: 'Scalable, observable infrastructure designed around the product you actually need to run.',
    tags: ['Cloud', 'CI/CD', 'Observability'],
  },
];

const processSteps = [
  {
    id: 'align',
    number: '01',
    title: 'Align',
    description: 'We understand the problem, constraints, priorities, and people behind the work.',
  },
  {
    id: 'shape',
    number: '02',
    title: 'Shape',
    description: 'We turn the direction into a focused experience, system, and delivery plan.',
  },
  {
    id: 'build',
    number: '03',
    title: 'Build',
    description: 'We work in clear cycles, sharing progress early and keeping the product moving.',
  },
];

const reasonsToChooseUs = [
  {
    id: 'whole-picture',
    label: '01',
    title: 'The whole picture',
    description: 'Strategy, design, engineering, and data stay connected from the first conversation to the final release.',
  },
  {
    id: 'practical-thinking',
    label: '02',
    title: 'Practical thinking',
    description: 'We work within real budgets, timelines, and team constraints to find progress that can actually ship.',
  },
  {
    id: 'built-to-last',
    label: '03',
    title: 'Built to last',
    description: 'Clear systems and dependable technology give your product room to grow after the initial launch.',
  },
  {
    id: 'close-collaboration',
    label: '04',
    title: 'Close collaboration',
    description: 'You get a focused team, direct communication, and working progress you can see throughout the engagement.',
  },
];

function ServicesVisual() {
  return (
    <div className="services-visual" aria-label="Novexa services overview">
      <div className="services-visual__halo" aria-hidden="true" />
      <div className="services-visual__core">
        <div className="services-visual__header">
          <span>NX / SERVICES</span>
          <small>01—06</small>
        </div>
        <ul className="services-visual__list" aria-label="Service areas">
          {services.map((service) => (
            <li key={service.id}>
              <i aria-hidden="true" />
              <span>{service.label}</span>
            </li>
          ))}
        </ul>
        <div className="services-visual__footer">
          <span>STRATEGY</span>
          <span>DESIGN</span>
          <span>TECHNOLOGY</span>
        </div>
      </div>
      <span className="services-visual__signal services-visual__signal--top"><i /> AI / ACTIVE</span>
      <span className="services-visual__signal services-visual__signal--bottom">DATA <b>↗</b></span>
    </div>
  );
}

function ServiceCard({ label, title, description, tags }) {
  return (
    <article className="services-card">
      <p className="services-card__label">{label}</p>
      <h3 className="services-card__title">{title}</h3>
      <p className="services-card__description">{description}</p>
      <ul className="services-card__tags" aria-label={`${label} capabilities`}>
        {tags.map((tag) => <li key={tag}>{tag}</li>)}
      </ul>
    </article>
  );
}

export default function Services() {
  return (
    <main className="services-page">
      <Navbar />

      <Section className="services-hero" id="services">
        <Container>
          <div className="services-hero__content">
            <div className="services-hero__copy">
              <p className="services-hero__label">STRATEGY <span>·</span> DESIGN <span>·</span> TECHNOLOGY</p>
              <h1>Everything you need to move an idea forward.</h1>
              <p className="services-hero__description">
                Strategy, design, engineering, and intelligent systems working together to turn complex challenges into useful products.
              </p>
              <div className="services-hero__actions">
                <Button type="button">Start a Project <span className="services-hero__arrow" aria-hidden="true">↗</span></Button>
                <Button type="button" variant="outline">Explore Solutions <span className="services-hero__arrow" aria-hidden="true">→</span></Button>
              </div>
            </div>
            <ServicesVisual />
          </div>
          <div className="services-hero__capabilities" aria-label="Novexa services">
            {services.map((service) => <span key={service.id}>{service.label}</span>)}
          </div>
        </Container>
      </Section>

      <Section className="services-overview" id="services-overview">
        <Container>
          <div className="services-overview__heading">
            <p className="services-overview__eyebrow">What we offer</p>
            <h2>One experienced team for the work between the idea and the outcome.</h2>
          </div>
          <div className="services-overview__body">
            <p>We bring the right mix of thinking, craft, and technology to each stage of the journey, without losing sight of the whole product.</p>
            <span className="services-overview__index">01 / 06</span>
          </div>
          <ul className="services-overview__rail" aria-label="Service categories">
            <li className="services-overview__rail-label">Covering</li>
            {services.map((service) => <li key={service.id}>{service.label}</li>)}
          </ul>
        </Container>
      </Section>

      <Section className="services-grid-section" id="service-list">
        <Container>
          <div className="services-grid__intro">
            <p className="services-grid__eyebrow">Our services</p>
            <h2>Expertise that works together.</h2>
          </div>
          <div className="services-grid" aria-label="Novexa service categories">
            {services.map((service) => <ServiceCard key={service.id} {...service} />)}
          </div>
        </Container>
      </Section>

      <Section className="services-process" id="process">
        <Container>
          <div className="services-process__heading">
            <p className="services-process__eyebrow">How we work</p>
            <h2 id="services-process-heading">Clear direction.<br />Useful progress.</h2>
          </div>
          <ol className="services-process__steps" aria-labelledby="services-process-heading">
            {processSteps.map((step) => (
              <li className="services-process__step" key={step.id}>
                <span className="services-process__number" aria-hidden="true">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section className="services-why" id="why-choose-us">
        <Container>
          <div className="services-why__heading">
            <p className="services-why__eyebrow">Why choose us</p>
            <h2>Good work is measured by what it makes possible.</h2>
          </div>
          <ul className="services-why__list" aria-label="Reasons to choose Novexa">
            {reasonsToChooseUs.map((reason) => (
              <li className="services-why__item" key={reason.id}>
                <span className="services-why__number" aria-hidden="true">{reason.label}</span>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section className="services-cta" id="services-cta">
        <Container>
          <p className="services-cta__eyebrow">Start a project</p>
          <h2 id="services-cta-heading">Have a challenge worth solving?</h2>
          <p className="services-cta__description">Tell us what you are building and where you need momentum. We will help you find the right next step.</p>
          <div className="services-cta__actions">
            <Button type="button">Get in Touch <span className="services-cta__arrow" aria-hidden="true">↗</span></Button>
            <Button type="button" variant="outline">View Solutions <span className="services-cta__arrow" aria-hidden="true">→</span></Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
