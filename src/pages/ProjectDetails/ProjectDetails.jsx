import { Link, useParams } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Container from '../../components/layout/Container';
import Section from '../../components/layout/Section';
import Button from '../../components/ui/Button';
import { workProjects } from '../../data/siteContent';
import './ProjectDetails.css';

export default function ProjectDetails() {
  const { id } = useParams();

  const project = workProjects.find(
    (item) => item.id === Number(id)
  );

  if (!project) {
    return (
      <>
        <Navbar />

        <main className="project-details">
          <Section className="project-details__not-found">
            <Container>
              <p>PROJECT NOT FOUND</p>

              <h1>
                This project
                <span> does not exist.</span>
              </h1>

              <Link to="/work">
                <Button>
                  Back to Work
                  <span>↙</span>
                </Button>
              </Link>
            </Container>
          </Section>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="project-details">
        <Section className="project-details__hero">
          <Container>
            <Link
              to="/work"
              className="project-details__back"
            >
              ← Back to Work
            </Link>

            <div className="project-details__hero-grid">
              <div className="project-details__copy">
                <p className="project-details__number">
                  {project.number} / {project.category}
                </p>

                <h1>
                  {project.title}
                </h1>

                <p className="project-details__description">
                  {project.description}
                </p>

                <div className="project-details__technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-details__visual">
                  <img
                  src={project.image}
                  alt={project.title}
                  />
                <div className="project-details__visual-grid" />

                <div className="project-details__visual-core">
                  <span>PROJECT</span>
                  <strong>{project.number}</strong>
                  <small>{project.category}</small>
                </div>

                <div className="project-details__signal">
                  <i />
                  DIGITAL SYSTEM
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <Section className="project-details__content">
          <Container>
            <div className="project-details__content-grid">
              <div>
                <p className="project-details__eyebrow">
                  THE PROJECT
                </p>

                <h2>
                  Turning an idea into
                  <span> a digital experience.</span>
                </h2>
              </div>

              <div className="project-details__text">
                <p>
                  This project was created to provide a practical
                  digital solution that helps users and businesses
                  achieve their goals more efficiently.
                </p>

                <p>
                  The solution focuses on usability, performance,
                  scalability, and a clear user experience.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        <Section className="project-details__cta">
          <Container>
            <div className="project-details__cta-inner">
              <p>HAVE AN IDEA?</p>

              <h2>
                Let's build something
                <span> meaningful.</span>
              </h2>

              <Link to="/work">
                <Button>
                  Explore More Projects
                  <span>↗</span>
                </Button>
              </Link>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}