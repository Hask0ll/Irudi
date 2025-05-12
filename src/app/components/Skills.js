// src/app/components/Skills.js
'use client';

import styles from '../styles/skills.module.css';

export default function Skills() {
  // Compétences selon le CV, regroupées par catégories
  const skillsCategories = [
    {
      title: "Langages de programmation",
      skills: ["C++", "C#", ".NET", "JavaScript", "C", "Assembleur"]
    },
    {
      title: "Moteurs de jeu",
      skills: ["Unreal Engine", "Unity", "OpenGl", "Vulkan"]
    },
    {
      title: "Développement Web",
      skills: ["HTML/CSS", "React.js", "Next.js"]
    },
    {
      title: "Gestion de projet",
      skills: ["SCRUM", "Gestion d'équipe", "Planification de projet"]
    },
    {
      title: "Outils & Environnements",
      skills: ["Git", "GitHub", "Azure", "Docker", "Kubernetes", "Visual Studio", "Rider", "Miro", "Jira", "MongoDB", "Elastic", "Grafana"]
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Compétences</h2>
          <div className={styles.underline}></div>
        </div>
        
        <div className={styles.skillsTable}>
          {skillsCategories.map((category, index) => (
            <div key={index} className={styles.categorySection}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.skillsGrid}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className={styles.skillItem}>
                    <span className={styles.skillName}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}