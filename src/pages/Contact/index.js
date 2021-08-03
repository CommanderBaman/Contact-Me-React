import CustomFontAwesomeIcon from '../../components/CustomFontAwesomeIcon'
import { Link } from 'react-router-dom'
import creds from './creds.json'
import emailjs from 'emailjs-com'
import styles from './contact.module.css'
import { useState } from 'react'

function Contact() {
  const onFormSubmit = (event) => {
    event.preventDefault()

    console.log(
      `Sending message via ${name}'s email: ${email}\nMessage is: ${message}`
    )

    emailjs
      .send(
        creds.EMAILJS_SERVICE_ID,
        creds.EMAILJS_TEMPLATE_ID,
        {
          message,
          name,
          email
        },
        creds.EMAILJS_USER_ID
      )
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text)
          alert(`Successfully delivered to ${name}`)
        },
        function (error) {
          console.log('FAILED...', error)
          alert('Failed to deliver message!')
        }
      )

    setMsg('')
    setName('')
    setEmail('')
    event.target.reset()
  }

  const [message, setMsg] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

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
          <label htmlFor='name' className={styles.formLabelContainer}>
            <span className={styles.formLabelText}>Your Name</span>
            <input
              type='text'
              name='name'
              id='name'
              className={styles.formInput}
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>

          <label htmlFor='email' className={styles.formLabelContainer}>
            <span className={styles.formLabelText}>Your Email</span>
            <input
              type='email'
              name='email'
              id='email'
              className={styles.formInput}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>

          <label htmlFor='message' className={styles.formLabelContainer}>
            <span className={styles.formLabelText}>Your Message</span>
            <textarea
              name='message'
              id='message'
              className={styles.formInput}
              rows={6}
              value={message}
              onChange={(event) => setMsg(event.target.value)}
            />
          </label>

          <input type='submit' value='Send' className={styles.submitButton} />
        </form>
      </div>
    </div>
  )
}

export default Contact
