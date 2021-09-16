import React from 'react'
import { useRouter } from 'next/dist/client/router'
import styles from '../../../styles/Home.module.css'
const ProductDetail = () => {
    const router =useRouter()
   const productId= router.query.productId
    return (
        <div className={styles.grid}>
            <h3 className={styles.card}>product deploy {productId}</h3>
        </div>
    )
}

export default ProductDetail
