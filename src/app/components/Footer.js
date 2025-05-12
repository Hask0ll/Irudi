// src/app/components/Footer.js
import Link from 'next/link';
import styles from '../styles/footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <Link href="/" className={styles.logo}>
              <span className={styles.name}>BARAT Dorian</span>
            </Link>
            <p className={styles.tagline}>Développeur C++</p>
          </div>
          
          <div className={styles.footerLinks}>
            <div className={styles.linkColumn}>
              <h3>Navigation</h3>
              <ul>
                <li><Link href="#hero">Accueil</Link></li>
                <li><Link href="#about">À propos</Link></li>
                <li><Link href="#skills">Compétences</Link></li>
                <li><Link href="#experience">Expérience</Link></li>
                <li><Link href="#projects">Projets</Link></li>
              </ul>
            </div>
            
            <div className={styles.linkColumn}>
              <h3>Contact</h3>
              <ul>
                <li>
                  <a href="mailto:votre.email@example.com">
                    dobarat.eu@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+33123456789">
                    +33 695522074
                  </a>
                </li>
                <li>Bordeaux, France</li>
              </ul>
            </div>
            
            <div className={styles.linkColumn}>
              <h3>Réseaux</h3>
              <ul>
                <li>
                  <a href="https://github.com/Hask0ll" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/dorian-barat-806a23206/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} Barat Dorian. Tous droits réservés.
          </p>
          <a href="#hero" className={styles.backToTop} aria-label="Retour en haut de page">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}