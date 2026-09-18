import Container from '../../layout/Container';
import Section from '../../layout/Section';
import { testimonial } from '../../../data/homeContent';
import './Testimonial.css';

export default function Testimonial() {
  return (
    <Section className="testimonial">
      <Container>
        <span className="testimonial__mark" aria-hidden="true">&ldquo;</span>
        <blockquote className="testimonial__quote">
          {testimonial.quote}
        </blockquote>
        <div className="testimonial__attribution">
          <span className="testimonial__avatar">{testimonial.initials}</span>
          <div>
            <strong>{testimonial.name}</strong>
            <span>{testimonial.role}, {testimonial.company}</span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
