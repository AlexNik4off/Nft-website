import styles from "./Collection.module.scss"
import collectionImgOne from "../../img/Collection1.png"
import collectionImgTwo from "../../img/Collection2.png"

function Collection() {
    return (
        <div className={styles.collection__container}>
            <div className={styles.collection__content}>
                <h2>Carry Out The Mission Find Yours Now!!</h2>
                <button className={styles.collection__button}>View Our Nfts</button>
            </div>
            <div className={styles.collection__imgs}>
                <span className={styles.polygon}></span>
                <img src={collectionImgTwo} alt="img" className={styles.imgTwo}></img>
                <img src={collectionImgOne} alt="img" className={styles.imgOne}></img>
            </div>
        </div>
    )
}

export default Collection;