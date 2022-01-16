import {useRouter} from 'next/router';

const SubProductReview = () => {
    const router = useRouter();
    const sub_productid = router.query["sub-productid"]
    const productid = router.query["productid"]
    return <div>
        Sub-product review.
        productid : {productid}
        sub-productid : {sub_productid}
    </div>
}

export default SubProductReview