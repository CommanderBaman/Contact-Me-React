import { Link } from 'react-router-dom';
import styles from './contact.module.css';
function Contact() {
  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        Contact
        <Link to='/'>Home</Link>
      </div>
    </div>
  );
}

export default Contact;
