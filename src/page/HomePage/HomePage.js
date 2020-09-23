import React, { useEffect } from 'react';
import Slies from './../../components/Slies/Slies';
import ProductList from './../../components/Content/ProductList';
import { connect } from 'react-redux';
import { axios_API_dispatch, axios_API_dispatch_product_hot, axios_API_dispatch_product_discount } from './../../actions/index';
import ProductItem from '../../components/Content/ProductItem';
import MessageType from '../../components/ConstType/MessageType';
import MessageProductHot from '../../components/ConstType/MessageProductHot';
import MessageProductDiscount from '../../components/ConstType/MessageProductDiscount';
import ProductListHot from '../../components/Content/ProductListHot';
import ProductItemHot from '../../components/Content/ProductItemHot';
import ProductsListDiscount from '../../components/Content/ProductListDiscount';
import ProductItemDiscount from './../../components/Content/ProductItemDiscount';
import SlidesProduct from '../../components/Slies/SlidesProduct';

const HomePage = (props) => {

    const {
        axiosAPI,
        products,
        axiosAPI_product_hot,
        products_hot,
        axiosAPI_product_discount,
        products_discount, seeMore,
        searchPrice,
        fillterName,
        fillterNameHot,
        fillterNameDiscount
    } = props;

    useEffect(() => {
        axiosAPI();
        axiosAPI_product_hot();
    }, [axiosAPI, axiosAPI_product_hot])

    useEffect(() => {
        axiosAPI_product_discount();
    }, [axiosAPI_product_discount])

    const onShowProductList = (products, seeMore, searchPrice, fillterName) => {
        let result = null
        if (fillterName.name) {
            products = products.filter(filte => {
                return filte.product.name.toLowerCase().indexOf(fillterName.name.toLowerCase()) !== -1
            })
        }
        if (products && products.length > 0) {
            result = products.map((product, index) => {
                if (searchPrice !== 1 && searchPrice !== 2) {
                    if (index < seeMore) {
                        return <ProductItem key={index} product={product} />
                    }
                }
                if (searchPrice === 1) {
                    if (product.product.price <= 500) {
                        if (index < seeMore) {
                            return <ProductItem key={index} product={product} />
                        }
                    }
                }
                if (searchPrice === 2) {
                    if (product.product.price > 500) {
                        if (index < seeMore) {
                            return <ProductItem key={index} product={product} />
                        }
                    }
                }
                return null
            })
        }

        return result;
    }

    const onShowProductListHot = (products_hot, searchPrice, fillterNameHot) => {
        let result = null;
        if (fillterNameHot) {
            products_hot = products_hot.filter(product => product.product_hot.name.toLowerCase().indexOf(fillterNameHot.name.toLowerCase()) !== -1)
        }
        if (products_hot && products_hot.length > 0) {
            result = products_hot.map((product, index) => {
                if (searchPrice !== 3 && searchPrice !== 4) {
                    return <ProductItemHot key={index} product={product} />
                }
                if (searchPrice === 3) {
                    if (product.product_hot.price <= 500) {
                        return <ProductItemHot key={index} product={product} />
                    }
                }
                if (searchPrice === 4) {
                    if (product.product_hot.price > 500) {
                        return <ProductItemHot key={index} product={product} />
                    }
                }
                return ''
            })
        }
        return result;
    }

    const onShowProductListDiscount = (products_discount, searchPrice, fillterNameDiscount) => {
        let result = null;
        if (fillterNameDiscount) {
            products_discount = products_discount.filter(product => product.product_discount.name.toLowerCase().indexOf(fillterNameDiscount.name.toLowerCase()) !== -1)
        }
        if (products_discount && products_discount.length > 0) {
            result = products_discount.map((product, index) => {
                if (searchPrice !== 5 && searchPrice !== 6) {
                    return <ProductItemDiscount key={index} product={product} />
                }
                if (searchPrice === 5) {
                    if (product.product_discount.price <= 500) {
                        return <ProductItemDiscount key={index} product={product} />
                    }
                }
                if (searchPrice === 6) {
                    if (product.product_discount.price > 500) {
                        return <ProductItemDiscount key={index} product={product} />
                    }
                }
                return ''
            })
        }
        return result;
    }

    return (
        <>
            <Slies />
            <MessageType />
            <ProductList>
                {onShowProductList(products, seeMore, searchPrice, fillterName)}
            </ProductList>
            <SlidesProduct />
            <MessageProductHot />
            <ProductListHot>
                {onShowProductListHot(products_hot, searchPrice, fillterNameHot)}
            </ProductListHot>
            <MessageProductDiscount />
            <ProductsListDiscount>
                {onShowProductListDiscount(products_discount, searchPrice, fillterNameDiscount)}
            </ProductsListDiscount>
        </>
    );
}

const mapStateToProps = state => {
    return {
        products: state.Products,
        products_hot: state.Products_Hot,
        products_discount: state.Products_Discount,
        seeMore: state.SeeMore,
        searchPrice: state.SearchPrice,
        fillterName: state.FillterName,
        fillterNameHot: state.FillterNameHot,
        fillterNameDiscount: state.FillterNameDiscount
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        axiosAPI: () => {
            dispatch(axios_API_dispatch());
        },
        axiosAPI_product_hot: () => {
            dispatch(axios_API_dispatch_product_hot())
        },
        axiosAPI_product_discount: () => {
            dispatch(axios_API_dispatch_product_discount())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);