import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import styles from './Hero.module.css';
import resumePdf from '../assets/Alfin Joseph full stack  developer.pdf';

const Hero = () => {
  return (
    <section id="home" className={`section ${styles.hero}`}>
      <div className={`container ${styles.heroContainer}`}>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className={styles.greeting}>Hi, my name is</p>
          <h1 className={styles.name}>Alfin Joseph.</h1>
          <h2 className={styles.subtitle}>I build scalable web applications.</h2>
          <p className={styles.description}>
            I'm a Results-driven Software Engineer and Solution Builder with 3 years of experience specializing in Python, Django, FastAPI, and React.js. I'm focused on building accessible, human-centered products and internal automation platforms.
          </p>
          
          <div className={styles.actions}>
            <a href="https://github.com/alfin-joseph" target="_blank" rel="noreferrer" className={styles.socialLink}><FiGithub /></a>
            <a href="https://www.linkedin.com/in/alfin-joseph-88bab13bb" target="_blank" rel="noreferrer" className={styles.socialLink}><FiLinkedin /></a>
            <a href="mailto:alfinjoseph934@gmail.com" className={styles.socialLink}><FiMail /></a>
            <a href={resumePdf} download="Alfin_Joseph_Resume.pdf" className="btn-primary" style={{ marginLeft: '1rem' }}>
              Resume <FiDownload style={{ marginLeft: '5px' }}/>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
