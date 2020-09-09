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

    const { axiosAPI, products, axiosAPI_product_hot, products_hot, axiosAPI_product_discount, products_discount } = props;

    useEffect(() => {
        axiosAPI();
        axiosAPI_product_hot();
    }, [axiosAPI, axiosAPI_product_hot])

    useEffect(() => {
        axiosAPI_product_discount();
    }, [axiosAPI_product_discount])

    const onShowProductList = products => {
        let result = null;
        if (products && products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem key={index} product={product} />
            })
        }
        return result;
    }

    const onShowProductListHot = products => {
        let result = null;
        if (products && products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItemHot key={index} product={product} />
            })
        }
        return result;
    }

    const onShowProductListDiscount = products => {
        let result = null;
        if (products && products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItemDiscount key={index} product={product} />
            })
        }
        return result;
    }

    return (
        <>
            <Slies />
            <MessageType />
            <ProductList>
                {onShowProductList(products)}
            </ProductList>
            <SlidesProduct />
            <MessageProductHot />
            <ProductListHot>
                {onShowProductListHot(products_hot)}
            </ProductListHot>
            <MessageProductDiscount />
            <ProductsListDiscount>
                {onShowProductListDiscount(products_discount)}
            </ProductsListDiscount>
        </>
    );
}

const mapStateToProps = state => {
    return {
        products: state.Products,
        products_hot: state.Products_Hot,
        products_discount: state.Products_Discount
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