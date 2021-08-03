import CustomFontAwesomeIcon from '../../components/CustomFontAwesomeIcon'
import { Link } from 'react-router-dom'
import styles from './contact.module.css'
function Contact() {
  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <Link to='/'>
          <CustomFontAwesomeIcon
            iconName='cross'
            customStyle={styles.closeIcon}
          />
        </Link>
        <h1>Contact Form</h1>
      </div>
    </div>
  )
}

export default Contact
