import Modal from 'react-modal';
import { GoDeviceMobile } from 'react-icons/go';
import { IoIosClose } from 'react-icons/io';

import { useState } from 'react';
import styles from './displayModal.module.css';

Modal.setAppElement('#root');

const DisplayModal = ({ websiteUrl }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <button onClick={() => setModalIsOpen(true)}>
        <GoDeviceMobile
          className={`${styles.icons} ${styles.desktopIcons}`}
        ></GoDeviceMobile>
      </button>
      <Modal
        className={styles.modalStyles}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            // backgroundColor: 'grey'
          },
          content: {
            top: '20%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -20%)',
            backgroundColor: 'black',
            color: 'white',
            padding: '1rem 0.1rem  0.2rem 0.1rem',
          },
        }}
      >
        <div>
          <div className={styles.modalHeader}>
            <h3>Mobile View</h3>
            <button onClick={() => setModalIsOpen(false)}>
              <IoIosClose color="red" size="1.5rem"></IoIosClose>
            </button>
          </div>

          <div className={styles.iframeContainer}>
            <iframe title="serena" src={websiteUrl}
            ></iframe>
          </div>
          <div></div>
        </div>
      </Modal>
    </div>
  );
};

export default DisplayModal;
