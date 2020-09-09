import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Product_Cart_dispatch } from '../../actions';

const ProductItemDiscount = props => {

    const { product, addToCard } = props

    const onShowRatting = ratting => {
        let result = [];
        if (ratting > 0) {
            for (let i = 0; i < ratting; i++) {
                result.push(<i key={i} className="fa fa-star"></i>)
            }
            for (let j = 0; j < (5 - ratting); j++) {
                result.push(<i key={j + 5} className="fa fa-star-o"></i>)
            }
        }
        return result;
    }

    const onAddToCart = product => {
        addToCard(product);
    }

    return (
        <div className="col-md-3">
            <div className="card text-center">
                <span>
                    <img
                        src={product.product_discount.new}
                        alt={product.product_discount.name}
                        className="img-fluid img-new"
                    />
                </span>
                <div className="card-img">
                    <Link to='/product-detail'>
                        <img
                            src={product.product_discount.images}
                            alt={product.product_discount.name}
                            className="img-fluid"
                        />
                    </Link>
                </div>
                <div className="card-body text-center">
                    <h6 className="card-title">
                        {product.product_discount.name}
                    </h6>
                    <p>Giá: <del>750 $</del> - {product.product_discount.price} $</p>
                    <ul className="rating">
                        <li>
                            {onShowRatting(product.product_discount.ratting)}
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
    );
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        addToCard: (product) => {
            dispatch(Product_Cart_dispatch(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItemDiscount);