import React from 'react';
import ProductRalatedItem from './ProductRalatedItem';

const ProductRalated = props => {
    return (
        <div className="container-fluid padding product_list">
            <div className="row padding">
                <ProductRalatedItem />
            </div>
        </div>
    );
}

export default ProductRalated;