import React from 'react';

const ProductListHot = props => {
    return (
        <div className="container-fluid padding product_list">
            <div className="row padding">
                {props.children}
            </div>
        </div>
    );
}

export default ProductListHot;