import React from 'react'

function ProductCard({item}) {
    const {productName, productQty, productWeight} = item
    return (
        <div>
            <p>{productName}</p>
        </div>
    )
}

export default ProductCard
