// src/app/page.js
import styles from "./styles/page.module.css";
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}