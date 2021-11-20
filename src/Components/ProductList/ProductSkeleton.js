import React from 'react'
import { SkeletonContainer, SkeletonImg, SkeletonCategory, SkeletonName, SkeletonSKU, SkeletonPrice } from './styled'

const ProductSkeleton = () => {
    return (
        <SkeletonContainer>
            <SkeletonCategory />
            <SkeletonImg />
            <SkeletonName />
            <SkeletonSKU />
            <SkeletonPrice />
        </SkeletonContainer>
    )
}

export default ProductSkeleton
