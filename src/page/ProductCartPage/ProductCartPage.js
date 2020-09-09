import React from 'react';
import { connect } from 'react-redux';
import ProductCartItem from './ProductCartItem';
import ProductCartResult from './ProductCartResult';

const PrdoductCartPage = (props) => {

    const { products } = props;

    const onShowProductItem = products => {
        let result = null;
        if(products && products.length > 0){
            result = products.map((product, index) => {
                return <ProductCartItem key={index} product={product} />
            })
        }
        return result;
    }

    return (
        <section className="section">
            <div className="table-responsive">
                <table className="table product-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Sản Phẩm</th>
                            <th>Giá</th>
                            <th>Số Lượng</th>
                            <th>Tổng Cộng</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {onShowProductItem(products)}
                        <ProductCartResult />
                    </tbody>
                </table>
            </div>
        </section>
    );
}

const mapStateToProps = state => {
    return {
        products: state.CartProduct
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrdoductCartPage);