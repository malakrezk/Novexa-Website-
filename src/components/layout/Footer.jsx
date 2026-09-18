import Container from './Container';
import { footerLinks, socialLinks } from '../../data/homeContent';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__wordmark">NOVEXA</span>
            <p>Digital Solutions Built for What&apos;s Next.</p>
          </div>

          <div className="footer__columns">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div className="footer__column" key={heading}>
                <h4>{heading}</h4>
                <ul>
                  {links.map((link) => (
                    <li key={link}><a href="#top">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <span>&copy; {year} Novexa. All rights reserved.</span>
          <div className="footer__social">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
