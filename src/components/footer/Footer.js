import styles from "./Footer.module.scss"

function Footer () {
    return (
        <div className={styles.footer__container}>
                <p className={styles.footer__logo}>Crypto</p>
                <table className={styles.footer__table}>
                    <tr>
                        <th>Nfts</th>
                        <th>Market</th>
                        <th>Contact</th>
                    </tr>
                    <tr>
                        {/* это тоже по идее ссылки */}
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
                        <p className={styles.footer__join}>Join Our Newslatter</p>
                        <button className={styles.footer__button}>Your Email<button className={styles.inner__button}>Submit</button></button>
                </div>
        </div>
    )
}

export default Footer
