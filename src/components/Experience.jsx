import React from 'react';
import { motion } from 'framer-motion';
import styles from './Experience.module.css';

const experienceData = [
  {
    role: "Frontend Developer",
    company: "SGBI Pvt. Ltd",
    location: "Kochi",
    date: "July 2024 – December 2025",
    points: [
      "Developed a production-grade React.js application for a robotics testing platform.",
      "Implemented complex Redux-based state management for multi-module architecture.",
      "Built responsive UIs ensuring seamless experience across devices and browsers.",
      "Collaborated with backend and QA teams to deliver high-quality releases on time."
    ]
  },
  {
    role: "Full-Stack Developer",
    company: "Missan IT Solutions",
    location: "Chennai",
    date: "October 2022 – March 2024",
    points: [
      "Designed and implemented full-stack web applications using React.js and Django REST.",
      "Integrated APIs and databases ensuring secure and scalable architecture.",
      "Provided ongoing maintenance, debugging, and client support.",
      "Documented development processes and promoted internal knowledge sharing."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Where I've <span>Worked</span>
        </motion.h2>

        <div className={styles.timeline}>
          {experienceData.map((exp, index) => (
            <motion.div 
              key={index} 
              className={styles.timelineItem}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3 className={styles.role}>{exp.role} <span>@ {exp.company}</span></h3>
                <p className={styles.date}>{exp.date} | {exp.location}</p>
                <ul className={styles.details}>
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
