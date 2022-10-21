import styles from "./Header.module.scss"

function Header() {
    return (
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
            <p>Crypto</p>
            <span className={styles.ellipse}></span>
        </div>
        <div className={styles.header__menu}>
            <ul>
            <li>Coins</li>
            <li>Featured</li>
            <li>Contact</li>
            <li>About</li>
            </ul>
        </div>
      </div>
    );
  }
  
  export default Header;