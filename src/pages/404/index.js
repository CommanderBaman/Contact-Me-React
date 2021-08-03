import CustomFontAwesomeIcon from '../../components/CustomFontAwesomeIcon';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

function Error() {
  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <Link to='/'>
          <CustomFontAwesomeIcon
            iconName='cross'
            customStyle={styles.closeIcon}
          />
        </Link>
        <div>Error! Page not found!</div>
      </div>
    </div>
  );
}

export default Error;
