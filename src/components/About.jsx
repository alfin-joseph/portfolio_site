import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';
import profileImg from '../assets/profile_image.jpg';

const About = () => {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Some Things <span>About</span> Me
        </motion.h2>

        <div className={styles.aboutContent}>
          <motion.div 
            className={styles.aboutText}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>
              I am <span className="highlight">Alfin Joseph</span>, currently working as a Full Stack Developer.
            </p>
            <p>
              I love working on scalable web applications and my tech stack includes <span className="highlight">Python, Django, FastAPI, React, Next.js, PostgreSQL and MongoDB</span>. I am also familiar with AWS and Docker.
            </p>
            <p>
              I am passionate about full-stack architecture, API design & integration, real-time applications (WebSockets) and enjoy solving complex problems. I love making side projects and learning about new technologies!
            </p>
          </motion.div>
          <motion.div 
            className={styles.aboutImage}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className={styles.imageWrapper}>
               <img src={profileImg} alt="Alfin Joseph" className={styles.avatarImg} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
