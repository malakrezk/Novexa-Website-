import { useEffect, useState } from 'react';
import Button from '../ui/Button';
import Container from './Container';
import './Navbar.css';

const navigation = ['Home', 'Services', 'Solutions', 'Work', 'About'];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <Container className="navbar__inner">
        <a className="navbar__wordmark" href="#home" aria-label="Novexa home" onClick={closeMenu}>
          NOVEXA
        </a>

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

        <nav
          className={`navbar__nav ${isMenuOpen ? 'navbar__nav--open' : ''}`}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          <div className="navbar__links">
            {navigation.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                {item}
              </a>
            ))}
          </div>
          <div className="navbar__actions">
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <Button type="button" onClick={closeMenu}>Start a Project</Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
