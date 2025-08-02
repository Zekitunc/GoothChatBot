import styles from './AboutPage.module.css';
import HomeNav from '../../components/Home/HomeNav';
import About from '../../components/About/About'


const AboutPage = () => {
  return(
  <div className={styles.AboutPage}>
        <div className={styles.navbar}><HomeNav/></div>
        <div className = {styles.About}><About/></div>
  </div>
  )
};

export default AboutPage;
