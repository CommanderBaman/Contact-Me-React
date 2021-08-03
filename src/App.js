import './reset.css'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NoMatch from './pages/404';
import styles from './app.module.css';
import wall from './images/wall.jpg';

function App() {
  return (
    <div className={styles.main}>
      <div className={styles.bgImageContainer}>
        <img src={wall} className={styles.bgImage} alt={'Wallpaper!'} />
      </div>
      <Router>
        <div className={styles.mainContainer}>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/contact'>
              <Contact />
            </Route>
            <Route path='*'>
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
