import { Link } from 'react-router-dom';
import styles from './style.module.css';

function Error() {
  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <div>Error! Page not found!</div>
        <Link to='/'>Home</Link>
      </div>
    </div>
  );
}

export default Error;
