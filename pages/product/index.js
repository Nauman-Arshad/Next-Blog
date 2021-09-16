import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const productList = ({productId}) => {
    return (
        <>
        <h3> My products</h3>

        <div className={styles.grid , styles.card}>
           <Link href='/product/watch'>
               <a>Watch</a>
           </Link>
        </div>
        <div className={styles.grid , styles.card}>
           <Link href='/product/dress'>
               <a>
                   Dress Faction
               </a>
           </Link>
        </div>
        <div className={styles.grid , styles.card}>
           <Link href='/product/Shoes'>
               <a>Shoes    </a>
           </Link>
        </div>
        <div className={styles.grid , styles.card}>
           <Link href={`/product/${productId}`} replace>
               <a> product {productId}  </a>
           </Link>
        </div>
        <Link href='/'>
               <a>Back To Home</a>
           </Link>
        </>
    )
}

export default productList
