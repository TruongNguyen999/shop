import React from 'react';
import { connect } from 'react-redux';

const ProductCartResult = props => {
    const { products } = props;

    const onshowSubTotal = products => {
        let result = 0;
        if (products && products.length > 0) {
            for (let i = 0; i < products.length; i++) {
                if (products[i].product_hot) {
                    result += products[i].product_hot.price * products[i].quantity;
                }
                if (products[i].product) {
                    result += products[i].product.price * products[i].quantity;
                }
                if (products[i].product_discount) {
                    result += products[i].product_discount.price * products[i].quantity;
                }
            }
            return result;
        }
        return result;
    }

    return (
        <tr>
            <td colSpan="3"></td>
            <td>
                <h4>
                    <strong>Tổng Tiền</strong>
                </h4>
            </td>
            <td>
                <h4>
                    <strong>
                        {onshowSubTotal(products)}$
                    </strong>
                </h4>
            </td>
            <td colSpan="3">
                <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                        <i className="fa fa-angle-right right"></i>
                </button>
            </td>
        </tr>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductCartResult);