import styles from "../styles/Cart.module.css"
import Image from "next/image";


const Cart = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <table className={styles.table}>
                <tr className={styles.trTitle}>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Extras</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                <tr className={styles.tr}>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image src="/img/featured4.jpg" layout="fill" objectFit="cover" alt="" />
                        </div>
                    </td>
                    <td>
                        <span className={styles.name}>Chicken Fried Rice</span>
                    </td>
                    <td>
                        <span className={styles.extras}>
                            Small pepper
                        </span>
                    </td>
                    <td>
                        <span className={styles.price}>N3500</span>
                    </td>
                    <td>
                        <span className={styles.quantity}>2</span>
                    </td>
                    <td>
                        <span className={styles.total}>N7000</span>
                    </td>
                </tr>
                <tr className={styles.tr}>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image src="/img/featured4.jpg" layout="fill" objectFit="cover" alt="" />
                        </div>
                    </td>
                    <td>
                        <span className={styles.name}>Chicken Fried Rice</span>
                    </td>
                    <td>
                        <span className={styles.extras}>
                            Small pepper
                        </span>
                    </td>
                    <td>
                        <span className={styles.price}>N3500</span>
                    </td>
                    <td>
                        <span className={styles.quantity}>2</span>
                    </td>
                    <td>
                        <span className={styles.total}>N7000</span>
                    </td>
                </tr>
            </table>
        </div>
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
                    <b className={styles.totalTextTitle}>Delivery: </b> N0.00
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total: </b> N7000
                </div>
                <button className={styles.button}>CHECKOUT</button>
            </div>
        </div>
    </div>
  )
}

export default Cart