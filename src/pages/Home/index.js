import { Link } from 'react-router-dom';
import styles from './home.module.css';

function Home() {
  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <div className={styles.deets}>
          <div className={styles.name}>Shubham Ojha</div>
          <div className={styles.title}>Web developer</div>
        </div>
        <nav className={styles.routes}>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About this site</Link>
            </li>
            <li>
              <Link to='/contact'>Contact Me</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Home;