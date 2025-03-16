// src/app/components/Skills.js
'use client';

import { useState } from 'react';
import styles from '../styles/skills.module.css';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');
  
  const skills = {
    frontend: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3/SASS', level: 85 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'React.js', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'TypeScript', level: 75 },
    ],
    backend: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 80 },
      { name: 'Nest.js', level: 75 },
      { name: 'RESTful APIs', level: 85 },
      { name: 'GraphQL', level: 70 },
      { name: 'MongoDB', level: 75 },
      { name: 'PostgreSQL', level: 70 },
    ],
    tools: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'CI/CD', level: 75 },
      { name: 'Jest', level: 80 },
      { name: 'Webpack', level: 75 },
      { name: 'VS Code', level: 95 },
      { name: 'Figma', level: 65 },
    ]
  };

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Mes Compétences</h2>
          <div className={styles.underline}></div>
        </div>
        
        <div className={styles.skillsTabs}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'frontend' ? styles.active : ''}`}
            onClick={() => setActiveTab('frontend')}
          >
            Frontend
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'backend' ? styles.active : ''}`}
            onClick={() => setActiveTab('backend')}
          >
            Backend
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'tools' ? styles.active : ''}`}
            onClick={() => setActiveTab('tools')}
          >
            Outils & Autres
          </button>
        </div>
        
        <div className={styles.skillsContent}>
          <div className={`${styles.skillsTab} ${activeTab === 'frontend' ? styles.active : ''}`}>
            <div className={styles.skillsGrid}>
              {skills.frontend.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                  <div className={styles.skillInfo}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillPercentage}>{skill.level}%</span>
                  </div>
                  <div className={styles.progressBar}>
                    <div 
                      className={styles.progress} 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`${styles.skillsTab} ${activeTab === 'backend' ? styles.active : ''}`}>
            <div className={styles.skillsGrid}>
              {skills.backend.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                  <div className={styles.skillInfo}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillPercentage}>{skill.level}%</span>
                  </div>
                  <div className={styles.progressBar}>
                    <div 
                      className={styles.progress} 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`${styles.skillsTab} ${activeTab === 'tools' ? styles.active : ''}`}>
            <div className={styles.skillsGrid}>
              {skills.tools.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                  <div className={styles.skillInfo}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillPercentage}>{skill.level}%</span>
                  </div>
                  <div className={styles.progressBar}>
                    <div 
                      className={styles.progress} 
                      style={{ width: `${skill.level}%` }}
                    ></div>
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