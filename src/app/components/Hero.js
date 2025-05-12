// src/app/components/Hero.js
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/hero.module.css';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const phrases = [
    'PROGRAMMER',
  ];

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isTyping) {
      if (typedText !== currentPhrase) {
        const timeout = setTimeout(() => {
          setTypedText(currentPhrase.substring(0, typedText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setIsTyping(true);
          setTypedText('');
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    }
  }, [typedText, currentPhraseIndex, isTyping, phrases]);

  return (
    <section id="hero" className={styles.hero}>
      {/* Particules décoratives - Ajout de particules supplémentaires */}
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.name}>
            <span>BARAT</span>
            <span>Dorian</span>
          </h1>
          <div className={styles.roleWrapper}>
            <span className={styles.role}>{typedText}</span>
            <span className={styles.cursor}>|</span>
          </div>
          <p className={styles.description}>
            Graduate with an RNCP level 7 qualification, C++ and Unreal Engine developer
          </p>
          <div className={styles.buttons}>
            <Link href="#projects" className={styles.primaryButton}>
              My Projects
            </Link>
            <Link href="#about" className={styles.secondaryButton}>
              Contact Me
            </Link>
          </div>
        </div>
        
        <div className={styles.socialLinks}>
          <a href="https://github.com/Hask0ll" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/dorian-barat-806a23206/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="mailto:dobarat.eu@gmail.com" className={styles.socialLink}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>
      </div>
      
      <div className={styles.scrollDown}>
        <span>EXPLORER</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>
    </section>
  );
}