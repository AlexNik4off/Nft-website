import styles from "./Featured.module.scss"

function Featured() {
    return (
        <div className={styles.featured__container}>
        <div className={styles.featured__title}>
        <h2>FEATURED ON</h2>
    </div>
    <div className={styles.featured__menu}>
        <ul>
            <li>Binance</li>
            <li>Latoken</li>
            <li>Btc</li>
            <li>Getio</li>
            <li>Ista</li>
        </ul>
    </div>
    <div className={styles.featured__hamburger}>
        <span className={styles.featured__hamburger__bar}></span>
        <span className={styles.featured__hamburger__bar}></span>
        <span className={styles.featured__hamburger__bar}></span>
    </div>
    </div>
    )
}

export default Featured;