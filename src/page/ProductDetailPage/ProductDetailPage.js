import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MessageProductRalated from '../../components/ConstType/MessageProductRalated';
import ProductRalated from '../../components/Content/ProductRalated';
import ProductRalatedItem from '../../components/Content/ProductRalatedItem';
import ProductDetailItem from './ProductDetailItem';
import { Product_Cart_dispatch } from './../../actions/index';
import { changeMessage_add_dispatch } from './../../actions/mesage';
import * as message from './../../contants/Message';

// branch -2
const ProductDetailPage = props => {

    const { productDetails, add_product, changeMessage } = props

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    const onShowratiing = ratting => {
        let result = []
        if (ratting && ratting > 0) {
            for (let i = 0; i < ratting; i++) {
                result.push(<i key={i} className='fa fa-star'></i>)
            }
            for (let j = 0; j < (5 - ratting); j++) {
                result.push(<i key={j + 5} className='fa fa-star-o'></i>)
            }
        }
        return result
    }

    const onShowImages = images => {
        let result = null
        if (images.length > 0) {
            result = images.map((image, index) => {
                return <ProductDetailItem key={index} image={image} />
            })
        }
        return result
    }

    const onShowProductDetail = involve => {
        let result = null
        if (involve.length > 0) {
            result = involve.map((e, index) => {
                return <ProductRalatedItem key={index} e={e} />
            })
        }
        return result
    }

    const onShowconfiguration = info => {
        let result = null;
        if (info.length > 0) {
            result = info.map((inf, index) => {
                return <li className="list-group-item" key={index}>{inf.name}</li>
            })
        }
        return result;
    }

    const onAddToCard = product => {
        add_product(product);
        changeMessage(message.MESSAGE_ADD)
    }

    if (productDetails.product_discount) {
        return (
            <>
                <div className="container-fluid padding product-detail">
                    <div className="row padding my-2">
                        <div className="col-md-5 text-center">
                            <a href={productDetails.product_discount.images} alt={productDetails.product_discount.name}>
                                <img className='img-fluid' width='350px' src={productDetails.product_discount.images} alt={productDetails.product_discount.name} />
                            </a>
                            <div>
                                <h4 className='title'>
                                    {productDetails.product_discount.name}
                                </h4>
                                <ul className='ratting mr-0'>
                                    <li>
                                        {onShowratiing(productDetails.product_discount.ratting)}
                                    </li>
                                </ul>
                                <p>Giá: {productDetails.product_discount.price} $</p>
                                <Link className='btn btn-outline-primary' to='/product-cart' onClick={() => onAddToCard(productDetails)}><i className='fa fa-shopping-cart'></i> Thêm Vào Giỏ Hàng</Link>
                            </div>
                            <hr className='my-4' />
                            <div className='card text-left'>
                                <h5><i className='text-danger'>Thông tin sản phẩm : </i><span className='text-secondary'>{productDetails.product_discount.details.decscription}</span> </h5>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h3 className='text-center text-danger'>{productDetails.product_discount.name}</h3>
                            <hr className='my-4' />
                            <ul className="list-group text-success">
                                {onShowconfiguration(productDetails.product_discount.details.configuration)}
                            </ul>
                            <hr className='my-4' />
                            <p className='text-primary'>{productDetails.product_discount.details.specialOffers}</p>
                            <hr className='my-4' />
                            <ul className='imageDeatil'>
                                <li>
                                    {onShowImages(productDetails.product_discount.details.involve)}
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <div className="alert alert-primary">
                                <h6 className='title caterory'><i className='fa fa-bars'></i> Danh Mục Sản Phẩm</h6>
                            </div>
                            <ul className="list-group bg-list">
                                <li className="list-group-item"><Link to='/samsung' className='category-list'>SamSung</Link></li>
                                <li className="list-group-item"><Link to='/apple' className='category-list'>Apple</Link></li>
                                <li className="list-group-item"><Link to='/oppo' className='category-list'>Oppo</Link></li>
                                <li className="list-group-item"><Link to='/xiaomi' className='category-list'>Xiaomi</Link></li>
                                <li className="list-group-item"><Link to='/huawei' className='category-list'>Huawei</Link></li>
                                <li className="list-group-item"><Link to='/lg' className='category-list'>LG</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <MessageProductRalated />
                <ProductRalated>
                    {onShowProductDetail(productDetails.product_discount.details.involve)}
                </ProductRalated>
            </>
        )
    }

    if (productDetails.product) {
        return (
            <>
                <div className="container-fluid padding product-detail">
                    <div className="row padding my-2">
                        <div className="col-md-5 text-center">
                            <a href={productDetails.product.images} alt={productDetails.product.name}>
                                <img className='img-fluid' width='350px' src={productDetails.product.images} alt={productDetails.product.name} />
                            </a>
                            <div>
                                <h4 className='title'>
                                    {productDetails.product.name}
                                </h4>
                                <ul className='ratting mr-0'>
                                    <li>
                                        {onShowratiing(productDetails.product.ratting)}
                                    </li>
                                </ul>
                                <p>Giá: {productDetails.product.price} $</p>
                                <Link className='btn btn-outline-primary' to='/product-cart' onClick={() => onAddToCard(productDetails)}><i className='fa fa-shopping-cart'></i> Thêm Vào Giỏ Hàng</Link>
                            </div>
                            <hr className='my-4' />
                            <div className='card text-left'>
                                <h5><i className='text-danger'>Thông tin sản phẩm : </i><span className='text-secondary'>{productDetails.product.details.decscription}</span> </h5>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h3 className='text-center text-danger'>{productDetails.product.name}</h3>
                            <hr className='my-4' />
                            <ul className="list-group text-success">
                                {onShowconfiguration(productDetails.product.details.configuration)}
                            </ul>
                            <hr className='my-4' />
                            <p className='text-primary'>{productDetails.product.details.specialOffers}</p>
                            <hr className='my-4' />
                            <ul className='imageDeatil'>
                                <li>
                                    {onShowImages(productDetails.product.details.involve)}
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <div className="alert alert-primary">
                                <h6 className='title caterory'><i className='fa fa-bars'></i> Danh Mục Sản Phẩm</h6>
                            </div>
                            <ul className="list-group bg-list">
                                <li className="list-group-item"><Link to='/samsung' className='category-list'>SamSung</Link></li>
                                <li className="list-group-item"><Link to='/apple' className='category-list'>Apple</Link></li>
                                <li className="list-group-item"><Link to='/oppo' className='category-list'>Oppo</Link></li>
                                <li className="list-group-item"><Link to='/xiaomi' className='category-list'>Xiaomi</Link></li>
                                <li className="list-group-item"><Link to='/huawei' className='category-list'>Huawei</Link></li>
                                <li className="list-group-item"><Link to='/lg' className='category-list'>LG</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <MessageProductRalated />
                <ProductRalated>
                    {onShowProductDetail(productDetails.product.details.involve)}
                </ProductRalated>
            </>
        )
    }

    if (productDetails.product_hot) {
        return (
            <>
                <div className="container-fluid padding product-detail">
                    <div className="row padding my-2">
                        <div className="col-md-5 text-center">
                            <a href={productDetails.product_hot.images} alt={productDetails.product_hot.name}>
                                <img className='img-fluid' width='350px' src={productDetails.product_hot.images} alt={productDetails.product_hot.name} />
                            </a>
                            <div>
                                <h4 className='title'>
                                    {productDetails.product_hot.name}
                                </h4>
                                <ul className='ratting mr-0'>
                                    <li>
                                        {onShowratiing(productDetails.product_hot.ratting)}
                                    </li>
                                </ul>
                                <p>Giá: {productDetails.product_hot.price} $</p>
                                <Link className='btn btn-outline-primary' to='/product-cart' onClick={() => onAddToCard(productDetails)}><i className='fa fa-shopping-cart'></i> Thêm Vào Giỏ Hàng</Link>
                            </div>
                            <hr className='my-4' />
                            <div className='card text-left'>
                                <h5><i className='text-danger'>Thông tin sản phẩm : </i><span className='text-secondary'>{productDetails.product_hot.details.decscription}</span> </h5>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h3 className='text-center text-danger'>{productDetails.product_hot.name}</h3>
                            <hr className='my-4' />
                            <ul className="list-group text-success">
                                {onShowconfiguration(productDetails.product_hot.details.configuration)}
                            </ul>
                            <hr className='my-4' />
                            <p className='text-primary'>{productDetails.product_hot.details.specialOffers}</p>
                            <hr className='my-4' />
                            <ul className='imageDeatil'>
                                <li>
                                    {onShowImages(productDetails.product_hot.details.involve)}
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <div className="alert alert-primary">
                                <h6 className='title caterory'><i className='fa fa-bars'></i> Danh Mục Sản Phẩm</h6>
                            </div>
                            <ul className="list-group bg-list">
                                <li className="list-group-item"><Link to='/samsung' className='category-list'>SamSung</Link></li>
                                <li className="list-group-item"><Link to='/apple' className='category-list'>Apple</Link></li>
                                <li className="list-group-item"><Link to='/oppo' className='category-list'>Oppo</Link></li>
                                <li className="list-group-item"><Link to='/xiaomi' className='category-list'>Xiaomi</Link></li>
                                <li className="list-group-item"><Link to='/huawei' className='category-list'>Huawei</Link></li>
                                <li className="list-group-item"><Link to='/lg' className='category-list'>LG</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <MessageProductRalated />
                <ProductRalated>
                    {onShowProductDetail(productDetails.product_hot.details.involve)}
                </ProductRalated>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        productDetails: state.ProductDetail
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        add_product: product => {
            dispatch(Product_Cart_dispatch(product))
        },
        changeMessage: message => {
            dispatch(changeMessage_add_dispatch(message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailPage);