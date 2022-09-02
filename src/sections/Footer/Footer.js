import styles from './footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className={styles.container}>
      <p>&#169; {currentYear} - Luis Rodrigues</p>
    </footer>
  );
};

export default Footer;
