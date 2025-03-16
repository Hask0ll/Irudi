// src/app/components/Projects.js
'use client';

import { useState } from 'react';
import styles from '../styles/projects.module.css';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const projectsData = [
    {
      id: 1,
      title: "Last Pulse",
      description: "Jeu vidéo platformer puzzle réaliser au cours de ma dernière année de master en collaboration avec plusieurs filières utilent à la conception d'un jeu vidéo.",
      image: "/projects/project1.jpg", // Remplacez par vos images
      categories: ["Games"],
      technologies: ["C++", "Unreal engine", "Project management"],
      demoLink: "https://demo-link.com",
      githubLink: "https://github.com/OutcastsGameStudio/LP",
      featured: true
    },
    {
      id: 2,
      title: "Novium",
      description: "Jeu vidéo duel en temps réel avec customisation de decks de cartes.",
      image: "/projects/project2.jpg",
      categories: ["Games"],
      technologies: ["Unreal engine", "C++"],
      demoLink: "https://demo-link.com",
      githubLink: "https://github.com/Hask0ll/Novium",
      featured: true
    },
    {
      id: 3,
      title: "Nebula Engine",
      description: "Moteur custom avec OpenGl",
      image: "/projects/project3.jpg",
      categories: ["Engine"],
      technologies: ["C++", "OpenGl", "ImGui", "Gtest", "Cmake", "Visual Studio", "Matrice"],
      demoLink: "https://demo-link.com",
      githubLink: "https://github.com/Hask0ll/NebulaEngine",
      featured: false
    },
    {
      id: 4,
      title: "Boids System",
      description: "Implémentation du système de Boids dans unreal engine",
      image: "/projects/project4.jpg",
      categories: ["Game system"],
      technologies: ["C++", "unreal engine"],
      demoLink: "https://demo-link.com",
      githubLink: "https://github.com/Hask0ll/BeBoids",
      featured: false
    },
    {
      id: 5,
      title: "Vulkan Engine",
      description: "Implémentation d'une fenêtre vulkan à l'aide du guide vulkan",
      image: "/projects/project5.jpg",
      categories: ["Engine"],
      technologies: ["C++", "Vulkan", "Shadering"],
      demoLink: "https://demo-link.com",
      githubLink: "https://github.com/Hask0ll/VulkanEngine",
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous' },
    { id: 'Games', name: 'Games' },
    { id: 'Engine', name: 'Engine' },
    { id: 'Game system', name: 'Game system' },
    { id: 'Other', name: 'Other' },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.categories.includes(activeCategory));

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Mes Projets</h2>
          <div className={styles.underline}></div>
        </div>
        
        <div className={styles.filterButtons}>
          {categories.map(category => (
            <button 
              key={category.id}
              className={`${styles.filterButton} ${activeCategory === category.id ? styles.active : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className={styles.projectsGrid}>
          {filteredProjects.map(project => (
            <div key={project.id} className={`${styles.projectCard} ${project.featured ? styles.featured : ''}`}>
              <div className={styles.projectImageContainer}>
                <div className={styles.projectImagePlaceholder}>
                  {/* Remplacez par votre image avec la balise Image de Next.js */}
                  <div className={styles.projectImage}>
                    <span>{project.title}</span>
                  </div>
                </div>
                <div className={styles.projectLinks}>
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    <span>Demo</span>
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
              
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.projectTechnologies}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.projectTech}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}