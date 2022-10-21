import styles from "./Footer.module.scss"

function Footer () {
    return (
        <div className={styles.container}>
                <p className={styles.logo}>Crypto</p>
                <table className={styles.table}>
                    <tr>
                        <th>Nfts</th>
                        <th>Market</th>
                        <th>Contact</th>
                    </tr>
                    <tr>
                        <td>Home</td>
                        <td>Browse Nfts</td>                                           
                        <td>Email</td>                                      
                                                                    
                                             
                    </tr>
                    <tr>
                        <td>About</td> 
                        <td>Buy Nfts</td>
                        <td>LenkedIn</td>
                        
                    </tr>
                    <tr>
                        <td>Sell Nfts</td> 
                        <td>Sell Nfts</td>
                        <td>Instagram</td>
                        
                    </tr>
                    <tr>
                        <td>Buy Nfts</td> 
                        <td></td>
                        <td>Twitter</td>
                    </tr>
                </table>
                <div>
                        <p className={styles.join}>Join Our Newslatter</p>
                        <button className={styles.button}>Your Email<button className={styles.inner__button}>Submit</button></button>
                </div>
        </div>
    )
}

export default Footer