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
                            <Image className={styles.img} src="/img/delivery.png" alt="" width="100" height="100" />
                        </Link> 
                    </div>
                    
                    <h3 className={styles.title}>Food Delivery & Takeout</h3>
                    <p className={styles.text}>
                        We allow for food order and delivery within Abuja city limits.
                    </p>
                    
                </div>
                <div className={styles.serviceItem}>
                    <div className={styles.image}>
                        <Link href="/services" passHref>
                            <Image className={styles.img} src="/img/restaurant.png" alt="" width="100" height="100" />
                        </Link> 
                    </div>
                    
                    <h3 className={styles.title}>Event Management</h3>
                    <p className={styles.text}>
                        We curate exceptional experiences for your events
                    </p>
                
                </div>
                <div className={styles.serviceItem}>
                    <div className={styles.image}>
                        <Link href="/services" passHref>
                            <Image className={styles.img} src="/img/catering.png" alt="" width="100" height="100" />
                        </Link> 
                    </div>
                    
                    <h3 className={styles.title}>Catering & Outdoor Services</h3>
                    <p className={styles.text}>
                        We handle food and services for all your outdoor activities.
                    </p>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services