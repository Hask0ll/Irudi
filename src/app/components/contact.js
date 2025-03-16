// src/app/components/Contact.js
'use client';

import { useState } from 'react';
import styles from '../styles/contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;
    
    if (!formData.name.trim()) {
      tempErrors.name = 'Le nom est requis';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      tempErrors.email = 'L\'email est requis';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email invalide';
      isValid = false;
    }
    
    if (!formData.subject.trim()) {
      tempErrors.subject = 'Le sujet est requis';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      tempErrors.message = 'Le message est requis';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Le message doit contenir au moins 10 caractères';
      isValid = false;
    }
    
    setErrors(tempErrors);
    return isValid;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulation d'envoi de formulaire
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Votre message a été envoyé avec succès! Je vous contacterai dans les plus brefs délais.'
      });
      
      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Dans un cas réel, vous enverriez les données à votre backend ou service de formulaire
      console.log('Form data:', formData);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Me Contacter</h2>
          <div className={styles.underline}></div>
        </div>
        
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <div className={styles.contactInfoItem}>
              <div className={styles.contactIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className={styles.contactDetail}>
                <h4>Téléphone</h4>
                <p>+33 123 456 789</p>
              </div>
            </div>
            
            <div className={styles.contactInfoItem}>
              <div className={styles.contactIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className={styles.contactDetail}>
                <h4>Email</h4>
                <p>votre.email@example.com</p>
              </div>
            </div>
            
            <div className={styles.contactInfoItem}>
              <div className={styles.contactIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className={styles.contactDetail}>
                <h4>Localisation</h4>
                <p>Votre Ville, Pays</p>
              </div>
            </div>
            
            <div className={styles.socialLinks}>
              <a href="https://github.com/votre-username" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://linkedin.com/in/votre-nom" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://twitter.com/votre-username" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className={styles.contactForm}>
            {formStatus.submitted ? (
              <div className={`${styles.formMessage} ${formStatus.success ? styles.success : styles.error}`}>
                <p>{formStatus.message}</p>
                <button 
                  className={styles.resetButton} 
                  onClick={() => setFormStatus({ submitted: false, success: false, message: '' })}
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Nom <span className={styles.required}>*</span></label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? styles.inputError : ''}
                  />
                  {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email <span className={styles.required}>*</span></label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? styles.inputError : ''}
                  />
                  {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="subject">Sujet <span className={styles.required}>*</span></label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? styles.inputError : ''}
                  />
                  {errors.subject && <span className={styles.errorMessage}>{errors.subject}</span>}
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message <span className={styles.required}>*</span></label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? styles.inputError : ''}
                  ></textarea>
                  {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
                </div>
                
                <button type="submit" className={styles.submitButton}>
                  Envoyer le message
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}