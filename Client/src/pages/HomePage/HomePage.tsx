import styles from './HomePage.module.css';
import React from 'react';
import HomeNav from '../../components/Home/HomeNav';
import HomeSlider from '../../components/Home/HomeSlider.jsx';
import ChatService from '../../services/ChatService.jsx';
import Footer from '../../components/Home/Footer.jsx';
import MiddleHome from '../../components/Home/middlePart.jsx';

const HomePage = () => {
  return(
  <div className={styles.HomePage}>
    <div className={styles.navbar}><HomeNav/></div>
    <div className={styles.Slider}><HomeSlider/></div>  
    <div className={styles.Chat}><ChatService/></div>  
    <div className={styles.Middle}><MiddleHome/></div>
    <div className={styles.Footer}><Footer/></div>
  </div>
  )
};

export default HomePage;
