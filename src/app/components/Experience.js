// src/app/components/Experience.js
'use client';

import { useState } from 'react';
import styles from '../styles/experience.module.css';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('work');
  
  const experiences = {
    work: [
      {
        title: "Développeur Full Stack",
        company: "Nom de l'entreprise",
        location: "Ville, Pays",
        period: "Janvier 2023 - Présent",
        description: [
          "Développement et maintenance d'applications web modernes avec React, Next.js et Node.js",
          "Collaboration avec l'équipe de design pour transformer des maquettes en interfaces réactives",
          "Optimisation des performances et de l'accessibilité des applications",
          "Participation à la définition d'architectures techniques évolutives"
        ]
      },
      {
        title: "Développeur Frontend",
        company: "Nom de l'entreprise précédente",
        location: "Ville, Pays",
        period: "Juin 2021 - Décembre 2022",
        description: [
          "Création d'interfaces utilisateur réactives et accessibles avec React",
          "Intégration avec des APIs RESTful",
          "Tests unitaires et d'intégration avec Jest et React Testing Library",
          "Revue de code et mentorat des développeurs juniors"
        ]
      },
      {
        title: "Développeur Web Junior",
        company: "Nom de l'entreprise de début",
        location: "Ville, Pays",
        period: "Janvier 2020 - Mai 2021",
        description: [
          "Développement de fonctionnalités frontend et backend pour des applications web",
          "Maintenance et amélioration de sites existants",
          "Correction de bugs et optimisation des performances",
          "Participation aux réunions client et aux sessions de planification"
        ]
      }
    ],
    education: [
      {
        title: "Master en Informatique",
        institution: "Université / École",
        location: "Ville, Pays",
        period: "2018 - 2020",
        description: [
          "Spécialisation en développement web et applications mobiles",
          "Projet de fin d'études: application web de gestion de projets",
          "Mention Bien"
        ]
      },
      {
        title: "Licence en Informatique",
        institution: "Université / École",
        location: "Ville, Pays",
        period: "2015 - 2018",
        description: [
          "Fondamentaux de la programmation, structures de données et algorithmes",
          "Introduction aux bases de données et au développement web",
          "Mention Très Bien"
        ]
      }
    ],
    certifications: [
      {
        title: "AWS Certified Developer - Associate",
        institution: "Amazon Web Services",
        period: "Octobre 2023",
        description: [
          "Compétences validées en développement et maintenance d'applications sur AWS"
        ]
      },
      {
        title: "Professional Scrum Master I (PSM I)",
        institution: "Scrum.org",
        period: "Mai 2022",
        description: [
          "Compréhension approfondie de la méthodologie Scrum et du rôle de Scrum Master"
        ]
      },
      {
        title: "MongoDB Certified Developer",
        institution: "MongoDB University",
        period: "Janvier 2021",
        description: [
          "Expertise dans la conception et l'optimisation de bases de données MongoDB"
        ]
      }
    ]
  };

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Expérience & Éducation</h2>
          <div className={styles.underline}></div>
        </div>
        
        <div className={styles.tabs}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'work' ? styles.active : ''}`} 
            onClick={() => setActiveTab('work')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            Expérience Professionnelle
          </button>
          
          <button 
            className={`${styles.tabButton} ${activeTab === 'education' ? styles.active : ''}`} 
            onClick={() => setActiveTab('education')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10v6M6 10v6M18 10v6M14 16h.01M10 16h.01"></path>
              <path d="M2 10h20M6 6h12a4 4 0 0 1 4 4H2a4 4 0 0 1 4-4z"></path>
            </svg>
            Formation
          </button>
          
          <button 
            className={`${styles.tabButton} ${activeTab === 'certifications' ? styles.active : ''}`} 
            onClick={() => setActiveTab('certifications')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="5" width="16" height="16" rx="2"></rect>
              <path d="M16 2v4M8 2v4M3 10h18"></path>
            </svg>
            Certifications
          </button>
        </div>
        
        <div className={styles.content}>
          <div className={`${styles.tabContent} ${activeTab === 'work' ? styles.active : ''}`}>
            <div className={styles.timeline}>
              {experiences.work.map((exp, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelinePoint}>
                    <div className={styles.timelineDot}></div>
                    <div className={styles.timelineLine}></div>
                  </div>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineHeader}>
                      <h3 className={styles.timelineTitle}>{exp.title}</h3>
                      <p className={styles.timelineCompany}>{exp.company}</p>
                      <p className={styles.timelineLocation}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        {exp.location}
                      </p>
                      <p className={styles.timelinePeriod}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        {exp.period}
                      </p>
                    </div>
                    <div className={styles.timelineDescription}>
                      <ul>
                        {exp.description.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`${styles.tabContent} ${activeTab === 'education' ? styles.active : ''}`}>
            <div className={styles.timeline}>
              {experiences.education.map((edu, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelinePoint}>
                    <div className={styles.timelineDot}></div>
                    <div className={styles.timelineLine}></div>
                  </div>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineHeader}>
                      <h3 className={styles.timelineTitle}>{edu.title}</h3>
                      <p className={styles.timelineCompany}>{edu.institution}</p>
                      <p className={styles.timelineLocation}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        {edu.location}
                      </p>
                      <p className={styles.timelinePeriod}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        {edu.period}
                      </p>
                    </div>
                    <div className={styles.timelineDescription}>
                      <ul>
                        {edu.description.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`${styles.tabContent} ${activeTab === 'certifications' ? styles.active : ''}`}>
            <div className={styles.timeline}>
              {experiences.certifications.map((cert, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelinePoint}>
                    <div className={styles.timelineDot}></div>
                    <div className={styles.timelineLine}></div>
                  </div>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineHeader}>
                      <h3 className={styles.timelineTitle}>{cert.title}</h3>
                      <p className={styles.timelineCompany}>{cert.institution}</p>
                      <p className={styles.timelinePeriod}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        {cert.period}
                      </p>
                    </div>
                    <div className={styles.timelineDescription}>
                      <ul>
                        {cert.description.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}