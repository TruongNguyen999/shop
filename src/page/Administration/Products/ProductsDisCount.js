import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { axios_API_dispatch_product_discount } from '../../../actions';
import ItemDiscount from './ProductsItem/ItemDiscount';

const ProductsDisCount = props => {

    const { Products, _getProducts } = props;

    useEffect(() => {
        _getProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onShowProductsItem = products => {
        let result = null;
        result = products.map((product, index) => <ItemDiscount key={index} product={product} index={index} />)
        return result;
    }

    return (
        <>
            {/* produt discount */}
            <button type="button" className="btn btn-success my-2 ml-3">Thêm Sản Phẩm DisCount</button>
            <table className="table table-hover ml-3">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Products ? onShowProductsItem(Products) : 'Load...'}
                </tbody>
            </table>
        </>
    );
}

const mapStateToProps = state => {
    return {
        Products: state.Products_Discount
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        _getProducts: () => {
            dispatch(axios_API_dispatch_product_discount())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsDisCount);