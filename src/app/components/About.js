// src/app/components/About.js
import styles from '../styles/about.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>À propos de moi</h2>
          <div className={styles.underline}></div>
        </div>
        
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <div className={styles.imgPlaceholder}>
              {/* Remplacez ceci par votre image avec la balise Image de Next.js */}
              <div className={styles.avatar}>
                <span>Votre Photo</span>
              </div>
            </div>
            <div className={styles.decoration}></div>
          </div>
          
          <div className={styles.bio}>
            <h3>Qui suis-je?</h3>
            <p>
              Bonjour ! Je suis [Votre Nom], développeur web passionné par la création d'expériences numériques
              intuitives et élégantes. Avec [X années] d'expérience dans le développement web, je me spécialise
              dans la création d'applications web modernes utilisant les dernières technologies.
            </p>
            <p>
              Mon parcours m'a permis de développer une solide expertise en [Votre spécialisation]
              et j'ai eu l'opportunité de travailler sur divers projets allant des sites vitrines aux
              applications complexes à forte charge.
            </p>
            <p>
              En dehors du code, je m'intéresse à [Vos centres d'intérêt] et je suis toujours en quête
              d'apprentissage de nouvelles technologies et méthodologies.
            </p>
            
            <div className={styles.personalInfo}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Nom:</span>
                <span className={styles.infoValue}>Barat</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Email:</span>
                <span className={styles.infoValue}>dobarat.eu@gmail.com</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Âge:</span>
                <span className={styles.infoValue}>25 ans</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Localisation:</span>
                <span className={styles.infoValue}>Bordeaux, France</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Disponibilité:</span>
                <span className={styles.infoValue}>Disponible début octobre.</span>
              </div>
            </div>
            
            <a href="public/CV.pdf" target="_blank" rel="noopener noreferrer" className={styles.downloadButton}>
              Télécharger mon CV
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}