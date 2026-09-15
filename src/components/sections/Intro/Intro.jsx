import Container from '../../layout/Container';
import Section from '../../layout/Section';
import useInView from '../../../hooks/useInView';
import { philosophySteps } from '../../../data/homeContent';
import './Intro.css';

export default function Intro() {
  const [ref, isInView] = useInView({ threshold: 0.25 });

  return (
    <Section
      className={`intro ${isInView ? 'intro--visible' : ''}`}
      id="approach"
      ref={ref}
    >
      <Container>
        <p className="intro__eyebrow">THE NOVEXA APPROACH</p>
        <h2 className="intro__headline">
          We turn complex business
          <br />
          challenges into simple
          <br />
          digital experiences.
        </h2>
        <p className="intro__support">
          Novexa combines strategy, design, software, AI, automation, and data to help
          businesses create and scale digital products.
        </p>

        <div className="intro__rail">
          {philosophySteps.map((step) => (
            <div className="intro__rail-item" key={step.number}>
              <span>{step.number}</span>
              <strong>{step.title}</strong>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
