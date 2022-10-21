import styles from "./Testmonial.module.scss"
import client1Img from "../../img/client1.png"
import client2Img from "../../img/client2.png"
import client3Img from "../../img/client3.png"
import ellipse from "../../img/Ellipse.png"
import vector from "../../img/Vector.png"

function Testmonial () {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>TESTMONIAL</h1>
                <h2>Read What Our Client Say</h2>
            </div>
            <div className={styles.client}>
            <div className={styles.client__profile}>
                <img src={client1Img} alt="img" className={styles.client1}></img>
                <img src={ellipse} alt="ellipse" className={styles.ellipse}></img>
                <img src={vector} alt="vector" className={styles.vector}></img>
                <h3>Ali Bouhtak</h3>
                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
            <div className={styles.client__profile}>
            <img src={client2Img} alt="img" className={styles.client2}></img>
                <img src={ellipse} alt="ellipse" className={styles.ellipse}></img>
                <img src={vector} alt="vector" className={styles.vector}></img>
                <h3>Reyna Skye</h3>
                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
            <div className={styles.client__profile}>
            <img src={client3Img} alt="img" className={styles.client3}></img>
                <img src={ellipse} alt="ellipse" className={styles.ellipse}></img>
                <img src={vector} alt="vector" className={styles.vector}></img>
                <h3>Othman Ahadoun</h3>
                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
            </div>
        </div>
    )
}

export default Testmonial;