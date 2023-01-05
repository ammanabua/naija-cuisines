import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/Services.module.css"

const Services = () => {
  return (
    <div className={styles.container}>
        <div className={styles.overlay}>
            
        </div>
        <div className={styles.wrapper}>
            <h1 className={styles.header}>
                Services
            </h1>
            <div className={styles.service}>
                <div className={styles.serviceItem}>
                    <div className={styles.image}>
                        <Link href="/services" passHref>
                            <Image className={styles.img} src="/img/delivery.png" alt="" width="200" height="200" />
                        </Link> 
                    </div>
                    <div className={styles.title}>
                        <h3>Food Delivery & Takeout</h3>
                    </div>
                </div>
                <div className={styles.serviceItem}>
                    <div className={styles.image}>
                        <Link href="/services" passHref>
                            <Image className={styles.img} src="/img/restaurant.png" alt="" width="200" height="200" />
                        </Link> 
                    </div>
                    <div className={styles.title}>
                        <h3>Event Management</h3>
                    </div>
                </div>
                <div className={styles.serviceItem}>
                    <div className={styles.image}>
                        <Link href="/services" passHref>
                            <Image className={styles.img} src="/img/catering.png" alt="" width="200" height="200" />
                        </Link> 
                    </div>
                    <div className={styles.title}>
                        <h3>Catering & Outdoor Services</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services