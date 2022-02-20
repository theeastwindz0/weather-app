import React from 'react'
import styles from './Footer.module.css'
const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <div className={styles.Footer}>
    <p>Copyright &copy; {currentYear} All rights reserved</p>
    <p>Developed by Himanshu Chauhan</p>
  </div>
  );
}

export default Footer;
