import React from 'react';

const ProductList = (props) => {
    return (
        <>
            {/* <hr className="my-4" width="90%" /> */}
            <div className="container-fluid padding product_list">
                <div className="row padding">
                    {props.children}
                </div>
            </div>
        </>
    );
}

export default ProductList;