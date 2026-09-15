import Container from '../../layout/Container';
import Section from '../../layout/Section';
import { whyNovexa } from '../../../data/homeContent';
import './WhyNovexa.css';

export default function WhyNovexa() {
  return (
    <Section className="why" id="why-novexa">
      <Container>
        <p className="why__eyebrow">WHY NOVEXA</p>
        <h2 className="why__headline">Built Differently.</h2>

        <div className="why__list">
          {whyNovexa.map((item, index) => (
            <div className={`why__row ${index % 2 === 1 ? 'why__row--alt' : ''}`} key={item.number}>
              <span className="why__number">{item.number}</span>
              <div className="why__copy">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
