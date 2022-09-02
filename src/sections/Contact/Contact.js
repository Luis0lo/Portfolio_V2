import styles from './contact.module.css';
import { FaEnvelopeOpenText, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <div className={styles.content}>
        <h1>Open To Work</h1>
        <div className={styles.innerContainer}>
          <div className={styles.callToAction}>
            <p>Did you like my projects?</p>
            <p>Let’s work together!</p>
            <div className={styles.contactIcons}>
              <a
                href="https://www.linkedin.com/in/withluis/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className={styles.icons} title="Linkedin" />
              </a>

              <a href="mailto:luiscvrodrigues@gmail.com">
                <FaEnvelopeOpenText className={styles.icons} title="Email" />
              </a>
            </div>
          </div>
          <div className={styles.contactForm}>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea name="" id="" cols="30" rows="5">
                Message
              </textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
