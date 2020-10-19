import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { axios_API_dispatch_product_hot } from '../../../actions';
import ItemHot from './ProductsItem/ItemHot';

const ProductsHot = props => {

    const { Products, _getProducts } = props;

    useEffect(() => {
        _getProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onShowProductsItem = products => {
        let result = null;
        result = products.map((product, index) => <ItemHot key={index} product={product} index={index} />)
        return result;
    }

    return (
        <>
            {/* product hot */}
            <button type="button" className="btn btn-success my-2 ml-3">Thêm Sản Phẩm Hot</button>
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
        Products: state.Products_Hot
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        _getProducts: () => {
            dispatch(axios_API_dispatch_product_hot())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsHot);