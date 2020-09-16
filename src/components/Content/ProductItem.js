import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { axios_API_dispatch_product_detail, Product_Cart_dispatch } from '../../actions';
import * as message from './../../contants/Message';
import { changeMessage_add_dispatch } from '../../actions/mesage';

const ProductItem = props => {

    const { product, add_product, changeMessage, setProduct } = props;

    const onShowRatting = ratting => {
        let result = [];
        if (ratting > 0) {
            for (let i = 1; i <= ratting; i++) {
                result.push(<i key={i} className="fa fa-star"></i>)
            }
            for (let j = 1; j <= (5 - ratting); j++) {
                result.push(<i key={j + 5} className="fa fa-star-o"></i>)
            }
        }
        return result;
    }

    const onAddToCart = (product) => {
        add_product(product);
        changeMessage(message.MESSAGE_ADD)
    }

    const setProductDetail = product => {
        setProduct(product)
    }

    return (
        <div className="col-md-3">
            <div className="card text-center">
                <div className="card-img">
                    <Link to='product-detail' onClick={() => setProductDetail(product)}>
                        <img src={product.product.images} alt={product.product.name} className="img-fluid" />
                    </Link>
                </div>
                <div className="card-body text-center">
                    <h6 className="card-title">{product.product.name}</h6>
                    <p>Giá: {product.product.price} $</p>
                    <ul className="rating">
                        <li>
                            {onShowRatting(product.product.ratting)}
                        </li>
                    </ul>
                    <Link to='/product-cart' onClick={() => onAddToCart(product)} className="btn btn-ounline-primary"><i className="fa fa-shopping-cart"></i> Mua</Link>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = props => {
    return {

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        add_product: product => {
            dispatch(Product_Cart_dispatch(product))
        },
        changeMessage: message => {
            dispatch(changeMessage_add_dispatch(message))
        },
        setProduct: product => {
            dispatch(axios_API_dispatch_product_detail(product))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);