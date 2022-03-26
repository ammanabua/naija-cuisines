import styles from "../../styles/Order.module.css"
import Image from "next/image";


const Order = () => {

    const status = 0;

    const statusClass = (index) => {
        if(index - status < 1 ) return styles.done;
        if(index - status === 1 ) return styles.inProgress;
        if(index - status > 1 ) return styles.undone;
    }
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.row}>
                <table className={styles.table}>
                    <tr className={styles.trTitle}>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Telephone</th>
                        <th>Address</th>
                        <th>Total</th>
                    </tr>
                    <tr className={styles.tr}>
                        <td>
                            <span className={styles.id}>3454532343234</span>
                        </td>
                        <td>
                            <span className={styles.name}>
                                Jane Doe
                            </span>
                        </td>
                        <td>
                            <span className={styles.phone}>
                                +2348059692283
                            </span>
                        </td>
                        <td>
                            <span className={styles.address}>2310 Chestnut Street</span>
                        </td>
                        <td>
                            <span className={styles.total}>N7000</span>
                        </td>
                    </tr>
                </table>
            </div>
            <div className={styles.row}>
                <div className={statusClass(0)}>
                    <Image src="/img/paid.png" width={30} height={30} alt="" />
                    <span>Payment</span>
                    <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/img/check.png" width={20} height={20} alt="" />     
                    </div>
                </div>
                <div className={statusClass(1)}>
                    <Image src="/img/prepare.png" width={30} height={30} alt="" />
                    <span>Preparing</span>
                    <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/img/check.png" width={20} height={20} alt="" />     
                    </div>
                </div>
                <div className={statusClass(2)}>
                    <Image src="/img/shipping.png" width={30} height={30} alt="" />
                    <span>In transit</span>
                    <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/img/check.png" width={20} height={20} alt="" />     
                    </div>
                </div>
                <div className={statusClass(3)}>
                    <Image src="/img/paid.png" width={30} height={30} alt="" />
                    <span>Delivered</span>
                    <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/img/check.png" width={20} height={20} alt="" />     
                    </div>
                </div>
            </div>
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
                <button disabled className={styles.button}>PAID</button>
            </div>
        </div>
    </div>
  )
}

export default Order