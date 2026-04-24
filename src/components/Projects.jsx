import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import styles from './Projects.module.css';

const projectsList = [
  {
    title: "Robotic Testing Platform",
    description: "Built a React-based robotic testing platform for physical devices and POS systems, significantly reducing manual testing effort.",
    techList: ["React", "Redux", "Node.js"],
    github: "#",
    link: "#",
    colorStart: "#6ee7b7", // Used gradient colors similar to screenshot
    colorEnd: "#3b82f6"
  },
  {
    title: "Graphic Language System",
    description: "Developed a translation automation platform using Django REST, MongoDB, and React.js. Implemented approval workflows and real-time collaboration.",
    techList: ["Django REST", "MongoDB", "React", "WebSockets"],
    github: "#",
    link: "#",
    colorStart: "#34d399", 
    colorEnd: "#059669"
  },
  {
    title: "Expense Tracker",
    description: "Financial dashboard featuring JWT authentication, expense analytics, monthly filtering, and dark mode UI communicating with a Django REST API.",
    techList: ["Next.js", "Redux", "Tailwind CSS"],
    github: "https://github.com/alfin-joseph/expense_tracker_fe",
    link: "https://expense-tracker-fe-teal-theta.vercel.app/",
    colorStart: "#818cf8",
    colorEnd: "#4f46e5"
  }
];

const Projects = () => {
  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Recent <span>Projects</span>
        </motion.h2>

        <div className={styles.projectsGrid}>
          {projectsList.map((project, index) => (
            <motion.div 
              key={index}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{
                background: `linear-gradient(135deg, ${project.colorStart} 0%, ${project.colorEnd} 100%)`
              }}
            >
              <div className={styles.cardInner}>
                <div className={styles.cardHeader}>
                  <div className={styles.folder}>
                    {/* Folder icon equivalent */}
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                  </div>
                  <div className={styles.projectLinks}>
                    <a href={project.github} target="_blank" rel="noreferrer"><FiGithub /></a>
                    <a href={project.link} target="_blank" rel="noreferrer"><FiExternalLink /></a>
                  </div>
                </div>
                
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <div className={styles.projectDescription}>
                  <p>{project.description}</p>
                </div>
                
                <ul className={styles.projectTechList}>
                  {project.techList.map((tech, i) => (
                    <li key={i}>{tech}</li>
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

export default Projects;
