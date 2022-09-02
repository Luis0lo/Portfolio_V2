import styles from './about.module.css';

const About = () => {
  return (
    <section id="about" className={styles.container}>
      <div className={styles.content}>
        <h1>About Me</h1>
        <div className={styles.textContent}>
          <p>
            Hi! My interest in web development started back in 2019 when I
            decided to create a website for a family company.
          </p>
          <br />
          <p>
            In 2021 had the privilege to be selected for a 16 weeks Full-Stack
            Development Bootcamp with School Of Code. It was terrific, from
            understanding the proccess of <b>Computational Thinking</b> breaking
            down problems up to using <b>Pair-Programiming</b> and <b>Agile</b>{' '}
            methodologies during <b>teamwork</b> projects to plan and build a
            full-stack app for the final project.
          </p>
        </div>
        <div className={styles.skillsContainer}>
          <h2>Skills</h2>
          <div className={styles.skillsTable}>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>SQL</li>
            </ul>
            <ul>
              <li>REACT</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Bootsatrap</li>
            </ul>
            <ul>
              <li>Jest</li>
              <li>Cypress</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
        <div className={styles.blockquote}>
          <q>
            Dripping water hollows out stone, not through force but through
            persistence.
          </q>
          -<cite>Ovid</cite>
          <p>Perseverance is what distinguish me the most.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
