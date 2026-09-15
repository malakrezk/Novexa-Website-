import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';
import Container from './Container';
import { navLinks } from '../../data/homeContent';
import './Navbar.css';


const navigation = [
  { label: 'Home',      href: '/#home' },
  { label: 'Services',  to: '/services' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Work',      to: '/work' },
  { label: 'About',     to: '/about' },
];
export default function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {

    const handleScroll = () => setIsScrolled(window.scrollY > 12);
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

        <Link className="navbar__wordmark" to="/" aria-label="Novexa home" onClick={closeMenu}>
          NOVEXA
        </Link>

        <nav
          className={`navbar__nav ${isMenuOpen ? 'navbar__nav--open' : ''}`}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          <div className="navbar__links">

            {navigation.map((item) =>
              item.to ? (
                <Link
                  key={item.label}
                  to={item.to}
                  className={location.pathname === item.to ? 'navbar__link--active' : ''}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              )
            )}
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
