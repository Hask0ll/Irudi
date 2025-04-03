// src/app/components/Skills.js
'use client';

import { useState } from 'react';
import styles from '../styles/skills.module.css';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('LowLevel');
  
  const skills = {
    Software: [
        { name: 'Unreal engine', level: 85 },
        { name: 'Unity', level: 30 },
    ],
    LowLevel: [
        { name: 'C++', level: 85 },
        { name: 'C#', level: 70 },
    ],
    frontend: [
      { name: 'HTML5', level: 50 },
      { name: 'CSS3/SASS', level: 50 },
      { name: 'JavaScript (ES6+)', level: 60 },
      { name: 'React.js', level: 70 },
      { name: 'Next.js', level: 70 },
      { name: 'Tailwind CSS', level: 50 },
      { name: 'TypeScript', level: 60 },
    ],
    backend: [
      { name: 'Node.js', level: 30 },
      { name: 'Nest.js', level: 70 },
      { name: 'MongoDB', level: 90 },
      { name: 'PostgreSQL', level: 20 },
    ],
    tools: [
      { name: 'Git/GitHub', level: 95 },
      { name: 'Docker', level: 40 },
      { name: 'CI/CD', level: 30 },
      { name: 'VS Code', level: 95 },
      { name: 'Visual studio', level: 95 },
      { name: 'JetBrains', level: 95 },
      { name: 'Azure Devops', level: 90 },
      { name: 'Figma', level: 20 },
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
          <button 
            className={`${styles.tabButton} ${activeTab === 'LowLevel' ? styles.active : ''}`}
            onClick={() => setActiveTab('LowLevel')}
          >
            Low-Level
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

          <div className={`${styles.skillsTab} ${activeTab === 'LowLevel' ? styles.active : ''}`}>
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
        </div>
      </div>
    </section>
  );
}