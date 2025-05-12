// src/app/components/About.js
import Image from 'next/image'; // Next.js inclut le composant Image
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
              {/* Image optimisée avec le composant Image de Next.js */}
              <Image 
                src="/images/profile.jpg" 
                alt="Dorian Barat" 
                width={350} 
                height={350} 
                className={styles.profileImage}
                priority
              />
            </div>
            <div className={styles.decoration}></div>
          </div>
          
          <div className={styles.bio}>
            <h3>Qui suis-je?</h3>
            <p>
              J'ai découvert la programmation par curiosité, je suis resté par passion.
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
            
            <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" className={styles.downloadButton}>
              Télécharger mon CV
              <svg xmlns="file:///C:/Users/dobar/Downloads/CV.pdf" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}