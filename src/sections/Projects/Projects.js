import { useState } from 'react';
import Project from '../../components/Project/Project';
import styles from './projects.module.css';

const Projects = () => {
  const [selectedSkill, setSkill] = useState('All');

  const skills = [
    'All',
    'React',
    'Personal',
    'Teamwork',
    'Javascript',
    'Front end',
    'Back end',
    'Express',
    'Node.js',
  ];

  const handleButtonClickFilter = (skill) => {
    setSkill(skill);
  };

  return (
    <section id="projects" className={styles.container}>
      <div className={styles.content}>
        <h2>My Projects</h2>
        <div className={styles.innerContainer}>
          <div className={styles.selectSkill}>
            {skills.map((skill) => (
              <button
                className={selectedSkill === skill ? styles.active : undefined}
                onClick={() => handleButtonClickFilter(skill)}
                key={skill}
              >
                {skill}
              </button>
            ))}
          </div>
          <div className={styles.projectCard}>
            <Project skill={selectedSkill} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
