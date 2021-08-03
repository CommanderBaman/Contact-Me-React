import CustomFontAwesomeIcon from '../../components/CustomFontAwesomeIcon';
import { Link } from 'react-router-dom';
import styles from './about.module.css';

function About() {
  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <Link to='/'>
          <CustomFontAwesomeIcon
            iconName='cross'
            customStyle={styles.closeIcon}
          />
        </Link>
        <h1>About</h1>
        <p>
          This website was made by Shubham Ojha for the UMIC Web Team selection.
          It was built in React!! It uses EmailJS, for sending mail and
          FontAwesome Icons, for design purposes.
        </p>
      </div>
    </div>
  );
}

export default About;
