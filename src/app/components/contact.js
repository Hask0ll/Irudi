import styles from "../styles/contact.module.css";

export default function Contact() {
    return (
      <section className={styles.contact}>
        <div className={styles.container}>
          <h2 className={styles.contactTitle}>Contact</h2>
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <h3>Restons en contact</h3>
              <p>N'hésitez pas à me contacter pour discuter de vos projets ou pour toute autre question.</p>
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Email :</span>
                  <a href="mailto:votre@email.com">votre@email.com</a>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>LinkedIn :</span>
                  <a href="https://linkedin.com/in/votre-profil" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/votre-profil
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>GitHub :</span>
                  <a href="https://github.com/votre-profil" target="_blank" rel="noopener noreferrer">
                    github.com/votre-profil
                  </a>
                </div>
              </div>
            </div>
            
            <form className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nom</label>
                <input type="text" id="name" name="name" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="subject">Sujet</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              
              <button type="submit" className={styles.submitButton}>
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }