import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const skillsList = [
  'Python', 'Django', 'Django REST Framework', 'FastAPI', 
  'React.js', 'Next js', 'Redux', 'JavaScript (ES6+)',
  'PostgreSQL', 'MongoDB', 'MySQL', 'Docker',
  'Git', 'CI/CD', 'WebSockets'
];

const Skills = () => {
  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My <span>Skills</span>
        </motion.h2>

        <div className={styles.skillsContainer}>
          {skillsList.map((skill, index) => (
            <motion.div 
              key={index}
              className={styles.skillBadge}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -5, borderColor: 'var(--accent)' }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
