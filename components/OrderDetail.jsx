import React, { useState } from 'react'
import styles from "../styles/OrderDetail.module.css"

const OrderDetail = ({ total, createOrder }) => {

    const [open, setOpen] = useState(true);
    
    const [customer, setCustomer] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const handleClick = () => {
        createOrder({ customer, phone, address, total, method: 1 });
    }

    const handleClose = () => {
        setOpen(false);
    }

  return (
    <div className= {styles.container}>
        <div className={styles.wrapper}>
            <h1 className={styles.title}>You will pay N7000 after delivery</h1>
            <button className={styles.close} onClick={handleClose} >Close</button>
            <div className={styles.item}>
                <label className={styles.label} htmlFor="">Name Surname</label>
                <input 
                    type="text" 
                    placeholder='John Doe' 
                    className={styles.input} 
                    onChange={(e) => setCustomer(e.target.value)} 
                />
            </div>
            <div className={styles.item}>
                <label className={styles.label} htmlFor="phone">Phone Number</label>
                <input 
                    type="tel" 
                    name="phone"
                    placeholder='08033945687' 
                    className={styles.input} 
                    onChange={(e) => setPhone(e.target.value)} 
                />
            </div>
            <div className={styles.item}>
                <label className={styles.label} htmlFor="">Address</label>
                <input 
                    type="text" 
                    placeholder='4020, Nile Street Avenue' 
                    className={styles.textarea} 
                    onChange={(e) => setAddress(e.target.value)} 
                />
            </div>
            <button className={styles.button} onClick={handleClick}>
                Place Order
            </button>
        </div>
    </div>
  )
}

export default OrderDetail