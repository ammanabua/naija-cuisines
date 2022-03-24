import styles from "../../styles/Order.module.css"
import Image from "next/image";


const Order = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}></div>
        <div className={styles.right}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Cart Total</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Subtotal: </b> N7000
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Discount: </b> N0.00
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total: </b> N7000
                </div>
                <button disabled className={styles.button}>PAID</button>
            </div>
        </div>
    </div>
  )
}

export default Order