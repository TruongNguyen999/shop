import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductCartResult = props => {
    const { products, messages } = props;
    const [status, setStatus] = useState(false);

    useEffect(() => {
        if (products.length > 0) setStatus(true);
    }, [products])

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
        <>
            <tr>
                <td colSpan='2'>
                    {messages ? <><div className="alert alert-success container-fluid message-danger" role="alert">{messages}</div></> : ''}
                </td>
                <td>
                    <Link to='/' className="btn btn-outline-secondary">Mua Tiếp</Link>
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
                    <a className="btn btn-primary" data-toggle="modal" href={(!status) ? '' : '#modal-id'}>Thanh Toán</a>
                </td>
            </tr>
        </>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCartResult);