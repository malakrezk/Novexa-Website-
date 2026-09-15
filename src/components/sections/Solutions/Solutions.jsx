import Container from '../../layout/Container';
import Section from '../../layout/Section';
import { sectorSolutions } from '../../../data/homeContent';
import './Solutions.css';

export default function Solutions() {
  return (
    <Section className="solutions" id="solutions">
      <Container>
        <div className="solutions__header">
          <div className="solutions__header-copy">
            <p className="solutions__eyebrow">Industries We Serve</p>
            <h2 className="solutions__headline">Digital Solutions Built for Real-World Challenges.</h2>
          </div>

          <p className="solutions__lede">
            From healthcare to finance, Novexa designs digital systems that improve operations,
            automate workflows, and turn data into better decisions.
          </p>
        </div>

        <div className="solutions__industry-nav" aria-label="Industries overview">
          {sectorSolutions.map((sector) => (
            <span key={sector.name} className="solutions__industry-nav-item">
              {sector.number} {sector.name}
            </span>
          ))}
        </div>

        <div className="solutions__grid">
          {sectorSolutions.map((sector, index) => (
            <article
              key={sector.name}
              className={`solutions__card solutions__card--${sector.accent} ${index % 2 === 1 ? 'solutions__card--offset' : ''}`}
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(9, 12, 17, 0.32), rgba(9, 12, 17, 0.8)), url(${sector.image})`,
              }}
            >
              <div className="solutions__card-content">
                <div className="solutions__card-topline">
                  <span className="solutions__card-index">{sector.number}</span>
                  <span className="solutions__card-dot" aria-hidden="true" />
                </div>

                <div className="solutions__card-body">
                  <h3>{sector.name}</h3>
                  <p>{sector.description}</p>

                  <div className="solutions__tags">
                    {sector.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <p className="solutions__outcome">{sector.outcome}</p>

                  <a href="#contact" className="solutions__cta">
                    {sector.cta} <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
