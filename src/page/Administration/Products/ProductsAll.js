import React from 'react';
import Products from './Products';
import ProductsDisCount from './ProductsDisCount';
import ProductsHot from './ProductsHot';

const ProductsAll = props => {
    return (
        <>
            <Products />
            <ProductsDisCount />
            <ProductsHot />
        </>
    );
}

export default ProductsAll;