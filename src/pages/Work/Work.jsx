import { useMemo, useState } from 'react';
import Container from '../../components/layout/Container';
import Section from '../../components/layout/Section';
import Button from '../../components/ui/Button';
import Navbar from '../../components/layout/Navbar';
import { workProjects } from '../../data/siteContent';
import './Work.css';

const categories = ['All', 'Web', 'Software', 'Mobile'];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return workProjects;
    }

    return workProjects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  const featuredProject = filteredProjects.find(
    (project) => project.featured
  );

  const regularProjects = filteredProjects.filter(
    (project) => project.id !== featuredProject?.id
  );

  return (
      <>
    <Navbar />
    <main className="work">     
      <Section className="work__hero">
        <Container>
          <div className="work__hero-grid">
            <div className="work__hero-copy">
              <p className="work__eyebrow">01 / SELECTED WORK</p>

              <h1>
                Ideas turned into
                <span> digital experiences.</span>
              </h1>

              <p className="work__intro">
                Explore a selection of digital products and solutions
                designed to solve real business challenges.
              </p>
            </div>

            <div className="work__hero-meta">
              <span>WORK / 2026</span>
              <span>WEB · SOFTWARE · MOBILE</span>
            </div>
          </div>

          <div
            className="work__filters"
            aria-label="Project categories"
          >
            {categories.map((category) => (
              <Button
                key={category}
                type="button"
                variant={
                  activeCategory === category ? 'primary' : 'outline'
                }
                className="work__filter"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="work__projects">
        <Container>
          {featuredProject && (
            <article className="work-project work-project--featured">
              <div className="work-project__visual">
                <div className="work-project__visual-grid" />

                <div className="work-project__visual-core">
                  <span>PROJECT</span>
                  <strong>{featuredProject.number}</strong>
                  <small>SELECTED WORK</small>
                </div>

                <div className="work-project__signal">
                  <i />
                  DIGITAL SYSTEM
                </div>
              </div>

              <div className="work-project__content">
                <p className="work-project__number">
                  {featuredProject.number} / {featuredProject.category}
                </p>

                <h2>{featuredProject.title}</h2>

                <p>{featuredProject.description}</p>

                <div className="work-project__technologies">
                  {featuredProject.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <span className="work-project__link">
                  View project
                  <span>↗</span>
                </span>
              </div>
            </article>
          )}

          <div className="work__grid">
            {regularProjects.map((project) => (
              <article className="work-project" key={project.id}>
                <div className="work-project__visual">
                  <div className="work-project__visual-grid" />

                  <div className="work-project__visual-core">
                    <span>PROJECT</span>
                    <strong>{project.number}</strong>
                  </div>
                </div>

                <div className="work-project__content">
                  <p className="work-project__number">
                    {project.number} / {project.category}
                  </p>

                  <h2>{project.title}</h2>

                  <p>{project.description}</p>

                  <div className="work-project__technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <span className="work-project__link">
                    View project
                    <span>↗</span>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="work__cta">
        <Container>
          <div className="work__cta-inner">
            <p>HAVE A PROJECT IN MIND?</p>

            <h2>
              Let's build something
              <span> meaningful.</span>
            </h2>

            <Button variant="primary">
              Start a project
              <span>↗</span>
            </Button>
          </div>
        </Container>
      </Section>
    </main>
     </>
  );
}
