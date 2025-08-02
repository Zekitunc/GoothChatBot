import styles from '../HomePage/ContactPage.module.css';
import HomeNav from '../../components/Home/HomeNav';
import Contact from '../../components/Contact/Contact'


const ContactPage = () => {
  return(
  <div className={styles.ContactPage}>
        <div className={styles.navbar}><HomeNav/></div>
        <div className={styles.Contact}><Contact/></div>
  </div>
  )
};

export default ContactPage;
