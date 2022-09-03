import styles from './contact.module.css';
import { FaEnvelopeOpenText, FaLinkedin } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const Contact = () => {
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully',
        });
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        });
        e.target.reset();
      }
    );
  };

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
            <form onSubmit={handleOnSubmit}>
              <input name="name" type="text" placeholder="Name" required />
              <input name="email" type="email" placeholder="Email" required />
              <textarea
                name="message"
                cols="30"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
