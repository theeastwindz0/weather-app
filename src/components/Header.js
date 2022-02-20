import styles from "./Header.module.css";
import logo from '../Images/logo.png'
const Header = () => {
  return (<div className={styles.Header}>
      <img src={logo} alt='logo'></img>
  </div>);
};

export default Header;
