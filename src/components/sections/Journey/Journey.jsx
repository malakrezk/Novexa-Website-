import { useEffect, useRef, useState } from 'react';
import Container from '../../layout/Container';
import Section from '../../layout/Section';
import { journeyStages } from '../../../data/homeContent';
import './Journey.css';

export default function Journey() {
  const trackRef = useRef(null);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    let frame = null;

    const updateProgress = () => {
      frame = null;
      if (!trackRef.current) return;

      const { top, height } = trackRef.current.getBoundingClientRect();
      const scrollRange = Math.max(height - window.innerHeight, 1);
      const progress = Math.min(Math.max(-top / scrollRange, 0), 1);
      setActiveStage(Math.round(progress * (journeyStages.length - 1)));
    };

    const handleScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <Section className="journey" id="journey" ref={trackRef}>
      <Container>
        <p className="journey__eyebrow">HOW IT COMES TOGETHER</p>
        <h2 className="journey__headline">
          From Idea
          <br />
          to Impact.
        </h2>

        <div className="journey__track">
          <div
            className="journey__progress"
            style={{ '--journey-progress': `${(activeStage / (journeyStages.length - 1)) * 100}%` }}
          />
          <div className="journey__stages">
            {journeyStages.map((stage, index) => (
              <article
                className={`journey__stage ${activeStage === index ? 'journey__stage--active' : ''}`}
                key={stage.number}
              >
                <div className="journey__stage-node"><span>{stage.number}</span></div>
                <h3>{stage.name}</h3>
                <p>{stage.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
