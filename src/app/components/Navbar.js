// src/app/components/Navbar.js
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experiences', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.name}>BARAT Dorian</span>
          <span className={styles.title}>PROGRAMMER</span>
        </Link>

        {/* Desktop menu */}
        <div className={styles.desktopMenu}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={styles.navLink}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button 
          className={styles.mobileMenuButton} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href} 
            className={styles.mobileNavLink}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}