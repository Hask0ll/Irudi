import styles from "./styles/page.module.css";
import Contact from './components/contact.js';

export default function Home() {
  return (
    <div className={styles.page}>
       <nav className={styles.nav}>
        <div className={`${styles.container} ${styles.navContainer}`}>
            <a href="#" className={styles.logo}>Portfolio</a>
            <div className={styles.navLinks}>
                <a href="#accueil" className={styles.navLink}>Accueil</a>
                <a href="#projets" className={styles.navLink}>Projets</a>
                <a href="#apropos" className={styles.navLink}>À propos</a>
                <a href="#contact" className={styles.navLink}>Contact</a>
            </div>
        </div>
    </nav>

    <section className={styles.hero}>
        <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Bienvenue sur mon portfolio</h1>
            <p className={styles.heroDescription}>Développeur Full Stack spécialisé en Nest.js</p>
            <a href="#contact" className={styles.ctaButton}>Me contacter</a>
        </div>
    </section>

    <section className={styles.featuredWork}>
        <div className={styles.container}>
            <h2 className={styles.featuredWorkTitle}>Projets récents</h2>
            <div className={styles.workGrid}>
                <div className={styles.workItem}>
                    <h3 className={styles.workItemTitle}>Projet 1</h3>
                    <p className={styles.workItemDescription}>Description du projet avec les technologies utilisées et les défis relevés.</p>
                </div>
                <div className={styles.workItem}>
                    <h3 className={styles.workItemTitle}>Projet 2</h3>
                    <p className={styles.workItemDescription}>Description du projet avec les technologies utilisées et les défis relevés.</p>
                </div>
                <div className={styles.workItem}>
                    <h3 className={styles.workItemTitle}>Projet 3</h3>
                    <p className={styles.workItemDescription}>Description du projet avec les technologies utilisées et les défis relevés.</p>
                </div>
            </div>
        </div>
    </section>
    <Contact />
    </div>
  );
}