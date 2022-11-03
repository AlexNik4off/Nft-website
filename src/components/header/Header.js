import { useState } from "react";
import styles from "./Header.module.scss"

function Header() {
  const [activeMenu, setActiveMenu] = useState(false)
    return (
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
            <p>Crypto</p>
            {/* Пустые теги не оставляй, если у тебя нет содержимого, используй самозакрывающуюся версию <span /> */}
            <span className={styles.ellipse}></span>
        </div>
        {/* Насколько помню из БЭМ, active - это модификатор и отделять его нужно либо -- либо _ ?*/}
        {/* Кстати, раз ты используешь css-модули, можно не так строго следоавть бэму, у тебя все равно будет
        изоляция стилей из коробки ) */}
        <div className={activeMenu ? styles.header__menu__active : styles.header__menu}>
            <ul>
            <li><a href="/#">Coins</a></li>
            <li><a href="/#">Featured</a></li>
            <li><a href="/#">Contact</a></li>
            <li><a href="/#">About</a></li>
            </ul>
        </div>
        <div className={styles.header__hamburger} onClick={() => setActiveMenu(!activeMenu)}>
          {/* Пустой тег, думаю, для VSCode есть какой-нибудь плагин, он будет подсказывать */}
          <span className={styles.header__hamburger__bar}></span>
          <span className={styles.header__hamburger__bar}></span>
          <span className={styles.header__hamburger__bar}></span>
        </div>
      </div>
    );
  }
  
  export default Header;
