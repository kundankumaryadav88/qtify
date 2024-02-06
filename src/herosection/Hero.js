// Hero.js
import React from 'react';
import headphonesImage from '../vibrating-headphone 1.png'; // Replace with the correct path
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.text}>
        <p>100 Thousand Songs, ad-free</p>
        <p>Over thousands podcast episodes</p>
      </div>
      <img src={headphonesImage} alt="Headphones" className={styles.image} />
    </div>
  );
};

export default Hero;
