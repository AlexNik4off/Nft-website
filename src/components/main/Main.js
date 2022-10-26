import styles from "./Main.module.scss"
import lionImg from "../../img/Lion.png"
import Featured from "../featured/Featured";
import Pricing from "../pricing/Pricing";
import Collection from "../collection/Collection";
import Testmonial from "../testmonial/Testmonial";
import BuyNow from "../buyNow/BuyNow";

function Main() {
    return (
        <>
      <div className={styles.main__container}>
        <div className={styles.main__content}>
            <h1>Descover And Finde Rare Nfts Picturs Or Games</h1>
            <button className={styles.button__sell}>SELL NFTS</button>
            <button className={styles.button__buy}>BUY NFTS</button>
        </div>
        <div>
            <img src={lionImg} alt="img" className={styles.lion__img}></img>
            <span className={styles.ellipse}></span>
        </div>
        <Featured />
        <Pricing />
        <Collection />
        <Testmonial />
        <BuyNow />
      </div>     
      </>
    );
  }
  
  export default Main;