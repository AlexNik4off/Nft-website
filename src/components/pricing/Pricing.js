import styles from "./Pricing.module.scss"
import pricingImg from "../../img/Pricing.png"

function Pricing() {
    return (
        <div className={styles.pricing__container}>
            <div>
                <img src={pricingImg} alt="img" className={styles.pricing__img}></img>
            </div>
            <div className={styles.pricing__content}>
                <h2>Be one of the first 3 people to buy this <span className={styles.nft}>NFT</span></h2>
                <p className={styles.bonus}>and get a 10$ bonus along with the purchase</p>
                <p className={styles.current__price}>The Price Of This Nfts : <span className={styles.discount}>30$</span> - 18$</p>
                <button className={styles.buy__button}>Buy Now</button>
                <table className={styles.pricing__stats}>
                    <tr>
                        <th>Collection</th>
                        <th>Artists</th>
                        <th>Community</th>
                    </tr>
                    <tr>
                        <td>450k+</td>
                        <td>320k</td>
                        <td>15k</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Pricing;