import Container from '../../layout/Container';
import Section from '../../layout/Section';
import { caseStudies } from '../../../data/homeContent';
import './Work.css';

function WorkMockup({ study }) {
  return (
    <div className={`work-mockup work-mockup--${study.accent}`} aria-hidden="true">
      <div className="work-mockup__bar">
        <i /><i /><i /><span>NOVEXA / {study.number}</span>
      </div>
      <div className="work-mockup__content">
        <div className="work-mockup__sidebar"><b /><b /><b /><b /></div>
        <div className="work-mockup__main">
          <div className="work-mockup__heading"><span /><span /></div>
          <div className="work-mockup__metrics">
            {study.stats.map(([label, value]) => (
              <div key={label}>
                <small>{label}</small>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <div className="work-mockup__chart">
            <i /><i /><i /><i /><i /><i /><i />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <Section className="work" id="work">
      <Container>
        <p className="work__eyebrow">SELECTED WORK</p>
        <h2 className="work__headline">
          Built to Solve
          <br />
          Real Problems.
        </h2>

        <div className="work__list">
          {caseStudies.map((study) => (
            <article className="work__case" key={study.number}>
              <div className="work__case-meta">
                <span className="work__case-number">{study.number}</span>
                <span className="work__case-industry">{study.industry}</span>
              </div>
              <div className="work__case-body">
                <div className="work__case-copy">
                  <h3>{study.name}</h3>
                  <div className="work__service-list">
                    {study.services.map((service) => <span key={service}>{service}</span>)}
                  </div>
                  <dl className="work__outcomes">
                    <div><dt>Problem</dt><dd>{study.challenge}</dd></div>
                    <div><dt>Result</dt><dd>{study.result}</dd></div>
                  </dl>
                  <a href="#contact" className="work__cta">
                    View Case Study <span aria-hidden="true">↗</span>
                  </a>
                </div>
                <WorkMockup study={study} />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
