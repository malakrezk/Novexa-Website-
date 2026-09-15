import { useState } from 'react';
import Container from '../../layout/Container';
import Section from '../../layout/Section';
import useInView from '../../../hooks/useInView';
import { services } from '../../../data/homeContent';
import './Services.css';

export default function Services() {
  const [ref, isInView] = useInView({ threshold: 0.15 });
  const [activeIndex, setActiveIndex] = useState(0);
  const selected = services[activeIndex];

  return (
    <Section
      className={`services ${isInView ? 'services--visible' : ''}`}
      id="services"
      ref={ref}
    >
      <Container>
        <div className="services__intro">
          <p className="services__eyebrow">OUR SERVICES</p>
          <h2>
            Digital Services,
            <br />
            Built Around
            <br />
            Your Business.
          </h2>
          <p className="services__lede">
            From product design and software development to AI, automation, and analytics,
            Novexa helps businesses build connected digital solutions that scale.
          </p>
        </div>

        <div className="services__workspace">
          <div className="services__list" role="tablist" aria-label="Novexa services">
            {services.map((service, index) => (
              <button
                className={`services__item ${activeIndex === index ? 'services__item--active' : ''}`}
                key={service.number}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
              >
                <span className="services__item-number">{service.number}</span>
                <strong>{service.name}</strong>
                <i aria-hidden="true">↗</i>
              </button>
            ))}
          </div>

          <div className="services__detail" key={selected.number} role="tabpanel" aria-live="polite">
            <div className="services__detail-visual" aria-hidden="true">
              <span className="services__visual-orbit" />
              <span className="services__visual-core">{selected.number}</span>
            </div>

            <div className="services__detail-topline">
              <span>Selected capability</span>
              <b>{selected.number} / 06</b>
            </div>

            <p className="services__detail-label">{selected.name}</p>
            <h3>{selected.detail}</h3>
            <p className="services__description">{selected.description}</p>

            <ul className="services__capabilities">
              {selected.capabilities.map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>

            <a href="#contact" className="services__learn-more">
              Explore This Service <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
