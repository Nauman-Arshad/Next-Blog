import React from 'react'
import { useRouter} from 'next/router'
const Review = () => {
    const router = useRouter()
    const {productId , reviewId} = router.query
    return (
        <div>
            <h3>Review {reviewId}    product {productId}</h3>
        </div>
    )
}
export default Review
