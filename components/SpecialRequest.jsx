import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from "../styles/SpecialRequest.module.css"

const SpecialRequest = () => {
  return (
    <section className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.left}>
                
            </div>
            <div className={styles.right}>
                <div className={styles.article}>
                    <div className={styles.articleHead}>
                    Special Orders
                    </div>
                    <div className={styles.articleText}>
                    <p className={styles.text} >
                        Do you have special dietary requirements? <br />Tell us how you want your meal cooked, and with what.
                        <br />
                    </p>

                    <form className={styles.form}>
                        <div className={styles.formHead}>
                            <h1 className={styles.formTitle}>Place an order</h1>
                        </div>
                        <div className={styles.formItem}>
                            <input className={styles.input} type="text" placeholder='Name' />
                            
                            
                            <input type="tel" name="telephone" placeholder='Phone Number' id="" className={styles.input} />
                        </div>

                        <div className={styles.formItem}>
                            <input type="text" name="" id="" placeholder='Meal' className={styles.input} />
                            <input type="text" name="" id="" placeholder='Extras' className={styles.input} />
                        </div>
                        <textarea className={styles.input} name="" id="" cols="30" rows="5" placeholder='Instructions'></textarea>
                        <button type='submit' className={styles.btn}>Submit</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SpecialRequest;