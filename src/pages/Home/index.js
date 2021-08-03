import CustomFontAwesomeIcon from '../../components/CustomFontAwesomeIcon'
import { Link } from 'react-router-dom'
import avatar from '../../images/avatar.jpg'
import styles from './home.module.css'

function Home() {
  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <img src={avatar} className={styles.displayPic} alt='Shubham Ojha' />
        <div className={styles.deets}>
          <h1 className={styles.name}>Shubham Ojha</h1>
          <h2 className={styles.title}>Web developer</h2>
        </div>
        <hr className={styles.separator} />
        <nav className={styles.routes}>
          <ul>
            <li className={styles.route}>
              <Link to='/about'>About this site</Link>
            </li>
            <li className={styles.route}>
              <Link to='/contact'>Contact Me</Link>
            </li>
          </ul>
        </nav>
        <hr className={styles.separator} />
        <div className={styles.socialContainer}>
          <a href='https://www.facebook.com/shubham.ojha.90/'>
            <CustomFontAwesomeIcon
              iconName={'facebook'}
              customStyle={styles.icon}
            />
          </a>
          <a href='https://www.linkedin.com/in/shubham-ojha-80b52a1a9/'>
            <CustomFontAwesomeIcon
              iconName={'linkedin'}
              customStyle={styles.icon}
            />
          </a>
          <a href='https://github.com/CommanderBaman'>
            <CustomFontAwesomeIcon
              iconName={'github'}
              customStyle={styles.icon}
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
