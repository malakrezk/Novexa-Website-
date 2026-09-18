import Button from '../../ui/Button';
import Container from '../../layout/Container';
import Section from '../../layout/Section';
import './FinalCTA.css';

export default function FinalCTA() {
  return (
    <Section className="final-cta" id="contact">
      <Container>
        <p className="final-cta__eyebrow">LET&apos;S TALK</p>
        <h2 className="final-cta__headline">
          Have an Idea?
          <br />
          Let&apos;s Build What&apos;s Next.
        </h2>
        <p className="final-cta__support">
          Tell us what you want to create, improve, or automate. We&apos;ll help turn it into a digital solution.
        </p>
        <div className="final-cta__actions">
          <Button as="a" href="mailto:hello@novexa.com">
            Start a Project <span className="button__arrow" aria-hidden="true">↗</span>
          </Button>
          <Button as="a" href="mailto:hello@novexa.com" variant="outline">
            Contact Us <span className="button__arrow" aria-hidden="true">→</span>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
