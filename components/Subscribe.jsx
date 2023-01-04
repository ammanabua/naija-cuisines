import React from 'react'
import styles from '../styles/Subscribe.module.css'

const Subscribe = () => {
  return (
    <section className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.title}>
                    Subscribe to our newsletter and stay on top of new deals!
                </div>
                <div className={styles.inputForm}>
                    <input type="email" className={styles.input} />
                    <button htmlFor="" className={styles.btn}>Enter</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Subscribe