import { useState } from "react";
import styles from "./Header.module.scss"

function Header() {
  const [activeMenu, setActiveMenu] = useState(false)
    return (
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
            <p>Crypto</p>
            <span className={styles.ellipse}></span>
        </div>
        <div className={activeMenu ? styles.header__menu__active : styles.header__menu}>
            <ul>
            <li>Coins</li>
            <li>Featured</li>
            <li>Contact</li>
            <li>About</li>
            </ul>
        </div>
        <div className={styles.header__hamburger} onClick={() => setActiveMenu(!activeMenu)}>
          <span className={styles.header__hamburger__bar}></span>
          <span className={styles.header__hamburger__bar}></span>
          <span className={styles.header__hamburger__bar}></span>
        </div>
      </div>
    );
  }
  
  export default Header;