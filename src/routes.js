import React from 'react';
import HomePage from './page/HomePage/HomePage';
import ProductListPage from './page/ProductListPage/ProductListPage';
import PrdoductCartPage from './page/ProductCartPage/ProductCartPage';
import ProductDetailPage from './page/ProductDetailPage/ProductDetailPage';
import ContactPage from './page/ContactPage/ContactPage';
import ProductPage from './page/ProductPage/ProductPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/product-list',
        exact: false,
        main: () => <ProductListPage />
    },
    {
        path: '/product-cart',
        exact: false,
        main: ({ history }) => <PrdoductCartPage history={history} />
    },
    {
        path: '/product-detail',
        exact: false,
        main: () => <ProductDetailPage />
    },
    {
        path: '/contact',
        exact: false,
        main: () => <ContactPage />
    },
    {
        path: '/samsung',
        exact: false,
        main: () => <ProductPage />
    },
    {
        path: '/apple',
        exact: false,
        main: () => <ProductPage />
    },
    {
        path: '/oppo',
        exact: false,
        main: () => <ProductPage />
    },
    {
        path: '/xiaomi',
        exact: false,
        main: () => <ProductPage />
    },
    {
        path: '/huawei',
        exact: false,
        main: () => <ProductPage />
    },
    {
        path: '/lg',
        exact: false,
        main: () => <ProductPage />
    }
]

export default routes;