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
            <li><a href="/#">Coins</a></li>
            <li><a href="/#">Featured</a></li>
            <li><a href="/#">Contact</a></li>
            <li><a href="/#">About</a></li>
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