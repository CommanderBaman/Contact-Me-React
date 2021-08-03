import { Link } from 'react-router-dom';
import styles from './about.module.css';

function About() {
  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        About
        <Link to='/'>Home</Link>
      </div>
    </div>
  );
}

export default About;
