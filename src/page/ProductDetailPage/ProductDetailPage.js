import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MessageProductRalated from '../../components/ConstType/MessageProductRalated';
import ProductRalated from '../../components/Content/ProductRalated';
import ProductDetailItem from './ProductDetailItem';

const ProductDetailPage = props => {

    const { productDetails } = props

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

    if (productDetails.product_discount) {
        return (
            <>
                <div className="container-fluid padding product-detail">
                    <div className="row padding my-2">
                        <div className="col-md-5 text-center">
                            <a href>
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
                                <button className='btn btn-outline-primary'><i className='fa fa-shopping-cart'></i> Thêm Vào Giỏ Hàng</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h1>{productDetails.product_discount.name}</h1>
                            <hr className='my-2' />
                            <p><i>Thông tin sản phẩm : </i>{productDetails.product_discount.details.decscription} </p>
                            <hr className='my-2' />
                            <h4>{productDetails.product_discount.details.configuration}</h4>
                            <hr className='my-2' />
                            <p>{productDetails.product_discount.details.specialOffers}</p>
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
                <ProductRalated />
            </>
        )
    }

    if (productDetails.product) {
        return (
            <>
                <div className="container-fluid padding product-detail">
                    <div className="row padding my-2">
                        <div className="col-md-5 text-center">
                            <a href>
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
                                <button className='btn btn-outline-primary'><i className='fa fa-shopping-cart'></i> Thêm Vào Giỏ Hàng</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h1>{productDetails.product.name}</h1>
                            <hr className='my-2' />
                            <p><i>Thông tin sản phẩm : </i>{productDetails.product.details.decscription} </p>
                            <hr className='my-2' />
                            <h4>{productDetails.product.details.configuration}</h4>
                            <hr className='my-2' />
                            <p>{productDetails.product.details.specialOffers}</p>
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
                <ProductRalated />
            </>
        )
    }

    if (productDetails.product_hot) {
        return (
            <>
                <div className="container-fluid padding product-detail">
                    <div className="row padding my-2">
                        <div className="col-md-5 text-center">
                            <a href>
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
                                <button className='btn btn-outline-primary'><i className='fa fa-shopping-cart'></i> Thêm Vào Giỏ Hàng</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h1>{productDetails.product_hot.name}</h1>
                            <hr className='my-2' />
                            <p><i>Thông tin sản phẩm : </i>{productDetails.product_hot.details.decscription} </p>
                            <hr className='my-2' />
                            <h4>{productDetails.product_hot.details.configuration}</h4>
                            <hr className='my-2' />
                            <p>{productDetails.product_hot.details.specialOffers}</p>
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
                <ProductRalated />
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

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailPage);