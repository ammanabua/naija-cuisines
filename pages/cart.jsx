import styles from "../styles/Cart.module.css"
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { usePaystackPayment } from "react-paystack";


const Cart = () => {

    const [open, setOpen] = useState(false);


    //PAYSTACK HOOK IMPLEMENTATION
    const config = {
        reference: (new Date()).getTime().toString(),
        email: "user@example.com",
        amount: 20000,
        publicKey: 'pk_test_687a8ebd710403b4c2f5383c6c027d896bd074dc',
    };
    
    // you can call this function anything
    const onSuccess = (reference) => {
      // Implementation for whatever you want to do with reference and after success call.
      console.log(reference);
    };
  
    // you can call this function anything
    const onClose = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed')
    }
  
    
    const initializePayment = usePaystackPayment(config);

    //END OF PAYSTACK HOOK IMPLEMENTATION


    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);


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
                {cart.products.map((product) => (
                    <tr className={styles.tr} key={product._id}>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image src={product.img} layout="fill" objectFit="cover" alt="" />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>{product.title}</span>
                        </td>
                        <td>
                            <span className={styles.extras}>
                                {product.extras.map((extra) => (
                                    <span key={extra._id}>{extra.text}</span>
                                ))}
                            </span>
                        </td>
                        <td>
                            <span className={styles.price}>{product.price}</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>{product.quantity}</span>
                        </td>
                        <td>
                            <span className={styles.total}>{product.price * product.quantity}</span>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
        <div className={styles.right}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Cart Total</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Subtotal: </b> {cart.total}
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Discount: </b> N0.00
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Delivery: </b> N0.00
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total: </b> {cart.total}
                </div>
                <div className={styles.paymentMethods}>
                    
                    {open ? (
                        <div>
                            <button className={styles.paystackButton} onClick={() => {
                                initializePayment(onSuccess, onClose)
                            }}>Paystack</button>

                            <button className={styles.payButton}>Cash on Delivery</button>
                        </div>
                    ) : (
                        <button onClick={() => setOpen(true)} className={styles.button}>CHECKOUT</button>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart