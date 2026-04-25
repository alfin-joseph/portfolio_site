import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.socialLinks}>
          <a href="https://github.com/alfin-joseph" target="_blank" rel="noreferrer"><FiGithub /></a>
          <a href="https://www.linkedin.com/in/alfin-joseph-88bab13bb" target="_blank" rel="noreferrer"><FiLinkedin /></a>
          <a href="mailto:alfinjoseph934@gmail.com"><FiMail /></a>
        </div>
        
        <div className={styles.contactInfo}>
          <p>Get in touch: <a href="mailto:alfinjoseph934@gmail.com" className="highlight">alfinjoseph934@gmail.com</a></p>
          <p>Phone: +91 7012482853</p>
        </div>

        <p className={styles.copyright}>
          Designed & Built by Alfin Joseph &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
