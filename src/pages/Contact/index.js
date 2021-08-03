import CustomFontAwesomeIcon from '../../components/CustomFontAwesomeIcon'
import { Link } from 'react-router-dom'
import styles from './contact.module.css'
function Contact() {
  const onFormSubmit = (event) => {
    event.preventDefault()
    console.log(event.target)
    event.target.reset()
  }
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
        <form onSubmit={onFormSubmit} className={styles.formContainer}>
          <div>
            <label htmlFor='name' className={styles.formLabelContainer}>
              <span className={styles.formLabelText}>Name</span>
              <input name='name' id='name' className={styles.formInput} />
            </label>
          </div>
          <div>
            <label htmlFor='email' className={styles.formLabelContainer}>
              <span className={styles.formLabelText}>Email</span>
              <input name='email' id='email' className={styles.formInput} />
            </label>
          </div>
          <div>
            <label htmlFor='message' className={styles.formLabelContainer}>
              <span className={styles.formLabelText}>Message</span>
              <textarea
                name='message'
                id='message'
                className={styles.formInput}
                rows={6}
              />
            </label>
          </div>

          <input
            type='submit'
            value='Send'
            className={styles.submitButton}
          />
        </form>
      </div>
    </div>
  )
}

export default Contact
