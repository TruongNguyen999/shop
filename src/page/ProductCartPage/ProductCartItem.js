import React from 'react';
import { connect } from 'react-redux';
import { axios_API_dispatch_product_delete, axios_API_disptch_update_product_card } from '../../actions';

const ProductCartItem = props => {

    const { product, deleteProduct, updateProduct } = props

    const ToTal = (price, quantity) => {
        let result = 0;
        result = price * quantity;
        return result;
    }

    const DeleteProduct = product => {
        deleteProduct(product)
    }

    const onUpdateProductInCart = (product, quantity) => {
        if (quantity > 0) {
            updateProduct(product, quantity)
        }
    }

    if (product.product_hot) return (
        <>
            <tr>
                <th scope="row">
                    <img src={product.product_hot.images}
                        alt={product.product_hot.name} className="img-fluid z-depth-0" />
                </th>
                <td className='name'>
                    <h5>
                        {product.product_hot.name}
                    </h5>
                </td>
                <td>
                    {product.product_hot.price}$
                </td>
                <td className="center-on-small-only">
                    <span className="qty">
                        {product.quantity}
                    </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={() => onUpdateProductInCart(product, product.quantity - 1)}
                        >
                            <a
                                href
                            >
                                —
                            </a>
                        </label>
                        <label
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={() => onUpdateProductInCart(product, product.quantity + 1)}
                        >
                            <a
                                href
                            >
                                +
                        </a>
                        </label>
                    </div>
                </td>
                <td>
                    {ToTal(product.product_hot.price, product.quantity)}$
            </td>
                <td>
                    <button type="button"
                        className="btn btn-sm btn-primary waves-effect waves-light"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Remove item"
                        onClick={() => DeleteProduct(product)}
                    >
                        X
                </button>
                </td>
            </tr>
        </>
    )
    if (product.product) return (
        <>
            <tr>
                <th scope="row">
                    <img src={product.product.images}
                        alt={product.product.name} className="img-fluid z-depth-0" />
                </th>
                <td className='name'>
                    <h5>
                        {product.product.name}
                    </h5>
                </td>
                <td>
                    {product.product.price}$
                    </td>
                <td className="center-on-small-only">
                    <span className="qty">
                        {product.quantity}
                    </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={() => onUpdateProductInCart(product, product.quantity - 1)}
                        >
                            <a
                                href
                            >
                                —
                                </a>
                        </label>
                        <label
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={() => onUpdateProductInCart(product, product.quantity + 1)}
                        >
                            <a
                                href
                            >
                                +
                            </a>
                        </label>
                    </div>
                </td>
                <td>
                    {ToTal(product.product.price, product.quantity)}$
                </td>
                <td>
                    <button type="button"
                        className="btn btn-sm btn-primary waves-effect waves-light"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Remove item"
                        onClick={() => DeleteProduct(product)}
                    >
                        X
                    </button>
                </td>
            </tr>
        </>
    )
    if (product.product_discount) return (
        <>
            <tr>
                <th scope="row">
                    <img src={product.product_discount.images}
                        alt={product.product_discount.name} className="img-fluid z-depth-0" />
                </th>
                <td className='name'>
                    <h5>
                        {product.product_discount.name}
                    </h5>
                </td>
                <td>
                    {product.product_discount.price}$
                    </td>
                <td className="center-on-small-only">
                    <span className="qty">
                        {product.quantity}
                    </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={() => onUpdateProductInCart(product, product.quantity - 1)}
                        >
                            <a
                                href
                            >
                                —
                                </a>
                        </label>
                        <label
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={() => onUpdateProductInCart(product, product.quantity + 1)}
                        >
                            <a
                                href
                            >
                                +
                            </a>
                        </label>
                    </div>
                </td>
                <td>
                    {ToTal(product.product_discount.price, product.quantity)}$
                </td>
                <td>
                    <button type="button"
                        className="btn btn-sm btn-primary waves-effect waves-light"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Remove item"
                        onClick={() => DeleteProduct(product)}
                    >
                        X
                    </button>
                </td>
            </tr>
        </>
    )
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        deleteProduct: (product) => {
            dispatch(axios_API_dispatch_product_delete(product))
        },
        updateProduct: (product, quantity) => {
            dispatch(axios_API_disptch_update_product_card(product, quantity))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCartItem);