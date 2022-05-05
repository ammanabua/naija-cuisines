import styles from "../styles/Cart.module.css"
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";

import { usePaystackPayment } from "react-paystack";
import { useRouter } from "next/router";
import { reset } from "../redux/cartSlice"
import OrderDetail from "../components/OrderDetail";


const Cart = () => {
    
    const cart = useSelector((state) => state.cart);
    const [open, setOpen] = useState(false);
    const [cash, setCash] = useState(false);


    const dispatch = useDispatch();
    const router = useRouter()

    const createOrder = async (data) => {
        try{
            const res = await axios.post("http://localhost:3000/api/orders", data);

            if (res.status === 201) {
                dispatch(reset());
                router.push(`/orders/${res.data._id}`)
            }
        } catch(err) {
            console.log(err)
        }
    }


    //PAYSTACK HOOK IMPLEMENTATION
    const config = {
        reference: (new Date()).getTime().toString(),
        email: "user@example.com",
        amount: cart.total,
        publicKey: 'pk_test_687a8ebd710403b4c2f5383c6c027d896bd074dc',
    };
    
    // you can call this function anything
    const onSuccess = (reference) => {
      // Implementation for whatever you want to do with reference and after success call.
        const shipping = {
            name:{
                full_name: "Jimmy Carter"
            },
            address: {
                address_line_1: "Ezimba Street"
            }
        }
        console.log(reference);

        createOrder({
            customer:shipping.name.full_name,
            address: shipping.address.address_line_1,
            phone: "09059646709",
            total: cart.total,
            method: 0,
        
        })

      console.log(reference);
    };
  
    // you can call this function anything
    const onClose = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed')
    }
  
    
    const initializePayment = usePaystackPayment(config);

    //END OF PAYSTACK HOOK IMPLEMENTATION


  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <table className={styles.table}>
                <tbody>
                    <tr className={styles.trTitle}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </tbody>
                <tbody>
                    {cart.products.map((product) => (
                        <tr className={styles.tr} key={product._id}>
                            <td>
                                <div className={styles.imgContainer}>
                                    <Image className={styles.img} src={product.img} layout="fill" objectFit="cover" alt="" />
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
                </tbody>
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

                            <button className={styles.payButton} onClick={() => setCash(true)}>Cash on Delivery</button>
                        </div>
                    ) : (
                        <button onClick={() => setOpen(true)} className={styles.button}>CHECKOUT</button>
                    )}
                </div>
            </div>
        </div>
        {cash && (
            <OrderDetail total={cart.total} createOrder={createOrder} />
        )}
    </div>
  );
};

export default Cart