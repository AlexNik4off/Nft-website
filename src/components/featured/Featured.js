import styles from "./Featured.module.scss"

function Featured() {
    return (
        <div className={styles.featured__container}>
        <div className={styles.featured__title}>
        <h2>FEATURED ON</h2>
    </div>
    <div className={styles.featured__menu}>
        <ul>
            <li><a href="/#">Binance</a></li>
            <li><a href="/#">Latoken</a></li>
            <li><a href="/#">Btc</a></li>
            <li><a href="/#">Getio</a></li>
            <li><a href="/#">Ista</a></li>
        </ul>
    </div>
    </div>
    )
}

export default Featured;