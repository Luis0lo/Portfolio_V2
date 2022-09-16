import styles from './project.module.css';

import { GoDeviceDesktop, GoMarkGithub, GoEye } from 'react-icons/go';
import DisplayModal from '../DisplayModal/DisplayModal';

const Project = ({ projects }) => {
  return (
    <div className={styles.container}>
      {projects &&
        projects.map((project) => (
          <div key={project.title} className={styles.innerContainer}>
            <img src={project.imageUrl} alt={project.imageAlt} />
            <div className={styles.infoContainer}>
              <hr />
              <h3>{project.title}</h3>
              <p>{project.introduction}</p>
              <div className={styles.iconsContainer}>
                {project.mobile && (
                  <DisplayModal websiteUrl={project.websiteUrl} />
                )}
                {project.desktop && (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className={`${styles.projectsBtn} ${styles.desktopButton}`}
                    >
                      <GoDeviceDesktop
                        className={`${styles.icons} ${styles.desktopIcons}`}
                      ></GoDeviceDesktop>
                      view
                    </button>
                  </a>
                )}

                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className={`${styles.projectsBtn} ${styles.viewProjectEye}`}
                  >
                    <GoEye
                      className={`${styles.icons}`}
                    ></GoEye>
                    view
                  </button>
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className={styles.projectsBtn}>
                    <GoMarkGithub className={styles.icons}></GoMarkGithub>
                    code
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Project;
