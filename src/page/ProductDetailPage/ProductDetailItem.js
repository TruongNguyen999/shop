import React from 'react';

const ProductDetailItem = ({ image }) => {
    if (image.product) {
        return (
            <>
                <img src={image.product.images} alt={image.product.name} width='80px' />
            </>
        )
    }

    if(image.product_discount){
        return (
            <>
                <img src={image.product_discount.images} alt={image.product_discount.name} width='80px' />
            </>
        )
    }

    if(image.product_hot){
        return (
            <>
                <img src={image.product_hot.images} alt={image.product_hot.name} width='80px' />
            </>
        )
    }
}

export default ProductDetailItem;