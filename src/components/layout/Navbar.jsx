import { useEffect, useState } from 'react';
import Button from '../ui/Button';
import Container from './Container';
import { navLinks } from '../../data/homeContent';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''} ${isMenuOpen ? 'navbar--open' : ''}`}>
      <Container className="navbar__inner">
        <a className="navbar__wordmark" href="#top" onClick={closeMenu}>
          NOVEXA
        </a>

        <nav
          className={`navbar__nav ${isMenuOpen ? 'navbar__nav--open' : ''}`}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          <div className="navbar__links">
            {navLinks.map((item) => (
              <a key={item.label} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="navbar__actions">
            <Button as="a" href="#contact" onClick={closeMenu}>
              Start a Project <span className="button__arrow" aria-hidden="true">↗</span>
            </Button>
          </div>
        </nav>

        <button
          className="navbar__toggle"
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </Container>
    </header>
  );
}
