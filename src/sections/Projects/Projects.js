import { useState } from 'react';
import Project from '../../components/Project/Project';
import styles from './projects.module.css';
import projects from '../../libs/portfolioData';

const Projects = () => {
  const [selectedSkill, setSkill] = useState('All');
  const [data, setData] = useState(projects);

  const skills = [
    'All',
    'CSS',
    'React',
    'Personal',
    'Teamwork',
    'Bootstrap',
    'Chakra UI',
    'MongoDB',
    'PostgreSQL',
    'Auth',
    'Node.js',
    'Redux',
    'Styled-components',
  ];

  const handleButtonClickFilter = (skill) => {
    setSkill(skill);
    if (skill === 'All') {
      setData(projects);
    } else {
      console.log(skill);
      setData(projects.filter((project) => project.tech.includes(skill)));
    }
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
                {skill}{' '}
                <span
                  className={
                    selectedSkill === skill ? styles.displayAmount : styles.hideAmount
                  }
                >
                  {data.length}
                </span>
              </button>
            ))}
          </div>
          <div className={styles.projectCard}>
            <Project projects={data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
