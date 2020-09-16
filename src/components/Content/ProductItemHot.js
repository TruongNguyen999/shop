import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { axios_API_dispatch_product_detail, Product_Cart_dispatch } from '../../actions'
import * as message from './../../contants/Message'
import { changeMessage_add_dispatch } from '../../actions/mesage'

const ProductItemHot = props => {

    const { product, addToCard, changeMessage, setProduct } = props

    const onShowRatting = ratting => {
        let result = []
        if (ratting && ratting > 0) {
            for (let i = 0; i < ratting; i++) {
                result.push(<i key={i} className="fa fa-star"></i>)
            }
            for (let j = 0; j < (5 - ratting); j++) {
                result.push(<i key={j + 5} className="fa fa-star-o"></i>)
            }
        }
        return result
    }

    const onAddToCart = product => {
        addToCard(product)
        changeMessage(message.MESSAGE_ADD)
    }

    const setProductDetail = product => {
        setProduct(product)
    }

    return (
        <div className="col-md-3">
            <div className="card text-center">
                <span>
                    <img
                        src={product.product_hot.new}
                        alt={product.product_hot.name}
                        className="img-fluid img-new"
                    />
                </span>
                <div className="card-img">
                    <Link to='/product-detail' onClick={() => setProductDetail(product)}>
                        <img
                            src={product.product_hot.images}
                            alt={product.product_hot.name}
                            className="img-fluid"
                        />
                    </Link>
                </div>
                <div className="card-body text-center">
                    <h6 className="card-title">{product.product_hot.name}</h6>
                    <p>Giá: {product.product_hot.price} $</p>
                    <ul className="rating">
                        <li>
                            {onShowRatting(product.product_hot.ratting)}
                        </li>
                    </ul>
                    <Link
                        to='/product-cart'
                        onClick={() => onAddToCart(product)}
                        className="btn btn-ounline-primary">
                        <i className="fa fa-shopping-cart"></i> Mua
                    </Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        addToCard: (product) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductItemHot)