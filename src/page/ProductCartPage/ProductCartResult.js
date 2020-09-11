import React from 'react';
import { connect } from 'react-redux';
import { changeMessagePay_Dispatch } from '../../actions/mesage';
import * as message from './../../contants/Message';
import { axios_API_clear_dispatch } from '../../actions';

const ProductCartResult = props => {
    const { products, payProduct, messages, clearCard, history } = props;

    const payMent = () => {
        if (confirm('Bạn hãy xác nhận mua hàng!')) { //eslint-disable-line
            payProduct(message.MESSAGE_PAY)
            clearCard()
        }
    }

    const buyMore = history => {
       history.goBack();
    }

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
            <td colSpan='2'>
                {messages ?
                    <><div className="alert alert-success container-fluid message-danger" role="alert">
                        {messages}
                    </div></> : ''}
            </td>
            <td>
            <button type="button" onClick={() => buyMore(history)} className="btn btn-outline-secondary">Mua Tiếp</button>
            </td>
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
                <button type="button" onClick={() => payMent()} className="btn btn-primary waves-effect waves-light">Thanh Toán <i className="fa fa-angle-right right"></i>
                </button>
            </td>
        </tr>
    );
}

const mapStateToProps = state => {
    return {
        products: state.CartProduct,
        messages: state.MessagePay
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        payProduct: message => {
            dispatch(changeMessagePay_Dispatch(message))
        },
        clearCard: () => {
            dispatch(axios_API_clear_dispatch())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCartResult);