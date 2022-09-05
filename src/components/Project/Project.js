import styles from './project.module.css';

import { GoDeviceMobile, GoDeviceDesktop, GoMarkGithub } from 'react-icons/go';

const Project = ({ skill }) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <img src="./images/portfolioImg.jpg" alt="" />
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam ipsa
          quia voluptatem soluta reprerum pariatur, voluptas facilis earum? Vel
          error sunt earum sequi.
        </p>
        <div className={styles.iconsContainer}>
          
          <GoDeviceMobile className={styles.icons}></GoDeviceMobile>
          <GoDeviceDesktop className={styles.icons}></GoDeviceDesktop>
          <GoMarkGithub className={styles.icons}></GoMarkGithub>
        </div>
      </div>
      <div className={styles.innerContainer}>
        <img src="./images/holdpic.jpg" alt="" />
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam ipsa
          quia voluptatem soluta reprerum pariatur, voluptas facilis earum? Vel
          error sunt earum sequi.
        </p>
        <div>00 00 00</div>
      </div>
      <div className={styles.innerContainer}>
        <img src="./images/portfolioImg.jpg" alt="" />
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam ipsa
          quia voluptatem soluta reprerum pariatur, voluptas facilis earum? Vel
          error sunt earum sequi.
        </p>
        <div>00 00 00</div>
      </div>
    </div>
  );
};

export default Project;
