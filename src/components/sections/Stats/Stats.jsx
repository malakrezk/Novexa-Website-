import { useEffect, useState } from 'react';
import Container from '../../layout/Container';
import Section from '../../layout/Section';
import useInView from '../../../hooks/useInView';
import { stats } from '../../../data/homeContent';
import './Stats.css';

function Counter({ value, isActive, duration = 1400 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(value);
      return undefined;
    }

    let frame;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isActive, value, duration]);

  return <>{count}</>;
}

export default function Stats() {
  const [ref, isInView] = useInView({ threshold: 0.4 });

  return (
    <Section className="stats" ref={ref}>
      <Container>
        <div className="stats__grid">
          {stats.map((stat) => (
            <div className="stats__item" key={stat.label}>
              <strong>
                <Counter value={stat.value} isActive={isInView} />
                {stat.suffix}
              </strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
