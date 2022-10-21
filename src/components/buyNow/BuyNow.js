import styles from "./BuyNow.module.scss"

function BuyNow () {
    return (
        <div className={styles.container}>
            <div className={styles.main__content}>
                <h2>Be Part Of The Project</h2>
                <button className={styles.button}>BUY NOW</button>
            </div>
        </div>
    )
}

export default BuyNow