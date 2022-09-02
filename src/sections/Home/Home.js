import styles from './home.module.css';

const Home = () => {
  return (
    <section id="welcome" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.description}>
          <div className={styles.title}>
            <h1>Luis Rodrigues</h1>
            <h2>Full Stack Developer</h2>
          </div>
          <div className={styles.intro}>
            <p>
              I am in love with the endless possibilities that web development
              gives us. Currently, I am focused on building projects using React
              to make it second nature.
            </p>
            <br />
            <p>Based in Manchester, UK.</p>
          </div>
        </div>
        <div className={styles.devImage}>
          <img src="/favicon.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
