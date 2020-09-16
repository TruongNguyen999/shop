import React from 'react';

const ProductList = (props) => {
    return (
        <>
            <div className="container-fluid padding product_list">
                <div className="row padding">
                    {props.children}
                </div>
            </div>
        </>
    );
}

export default ProductList;