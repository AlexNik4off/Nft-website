import styles from "./BuyNow.module.scss"

function BuyNow () {
    return (
        <div className={styles.buyNow__container}>
            <div className={styles.buyNow__content}>
                <h2>Be Part Of The Project</h2>
                <button className={styles.buyNow__button}>BUY NOW</button>
            </div>
        </div>
    )
}

export default BuyNow