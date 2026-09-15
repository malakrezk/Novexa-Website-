import Container from '../../layout/Container';
import Section from '../../layout/Section';
import useInView from '../../../hooks/useInView';
import { processSteps } from '../../../data/homeContent';
import './Process.css';

export default function Process() {
  const [ref, isInView] = useInView({ threshold: 0.15 });

  return (
    <Section className={`process ${isInView ? 'process--visible' : ''}`} id="process" ref={ref}>
      <Container>
        <div className="process__header">
          <div>
            <p className="process__eyebrow">OUR PROCESS</p>
            <h2 className="process__headline">
              Clear Process.
              <br />
              Better Outcomes.
            </h2>
          </div>
        </div>

        <div className="process__list">
          {processSteps.map((step, index) => (
            <div className="process__row" key={step.number} style={{ '--row-delay': `${index * 70}ms` }}>
              <div className="process__marker">
                <span>{step.number}</span>
                {index < processSteps.length - 1 && <i aria-hidden="true" />}
              </div>
              <div className="process__copy">
                <h3>{step.name}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
