import React, { useEffect } from 'react';
import ProductList from '../../components/Content/ProductList';
import { connect } from 'react-redux';
import { axios_API_dispatch } from './../../actions/index';
import ProductItem from './../../components/Content/ProductItem';

const ProductListPage = (props) => {

    const { axiosAPI, products } = props;

    useEffect(() => {
        axiosAPI();
        window.scrollTo(0, 0);
    }, [axiosAPI])

    const onShowProductList = products => {
        let result = null;
        if (products && products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem key={index} product={product} />
            })
        }
        return result;
    }
    return (
        <ProductList>
            {onShowProductList(products)}
        </ProductList>
    );
}

const mapStateToProps = state => {
    return {
        products: state.Products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        axiosAPI: async () => {
            dispatch(axios_API_dispatch());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);