import styles from './project.module.css';

import { GoDeviceMobile, GoDeviceDesktop, GoMarkGithub } from 'react-icons/go';

const Project = ({ projects }) => {
  return (
    <div className={styles.container}>
      {projects &&
        projects.map((project) => (
          <div key={project.title} className={styles.innerContainer}>
            <img src={project.imageUrl} alt={project.imageAlt} />
            <div className={styles.infoContainer}>
              <h3>{project.title}</h3>
              <p>{project.introduction}</p>
              <div className={styles.iconsContainer}>
                {project.onlyMobile && (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GoDeviceMobile className={styles.icons}></GoDeviceMobile>
                  </a>
                )}

                {!project.onlyMobile && (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GoDeviceDesktop className={styles.icons}></GoDeviceDesktop>
                  </a>
                )}

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GoMarkGithub className={styles.icons}></GoMarkGithub>
                </a>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Project;
