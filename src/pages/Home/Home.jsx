import Button from '../../components/ui/Button';
import Container from '../../components/layout/Container';
import Navbar from '../../components/layout/Navbar';
import Section from '../../components/layout/Section';
import { brand, tagline } from '../../data/siteContent';
import './Home.css';

export default function Home() {
  return (
    <main className="home">
      <Navbar />
      <Section className="home__foundation" id="home">
        <Container>
          <p className="home__brand">{brand}</p>
          <div className="home__intro">
            <p className="home__kicker">Digital systems / human outcomes</p>
            <h1>{tagline}</h1>
            <Button type="button">Start a conversation</Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
