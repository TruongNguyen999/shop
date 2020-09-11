import React from 'react';
import HomePage from './page/HomePage/HomePage';
import ProductListPage from './page/ProductListPage/ProductListPage';
import PrdoductCartPage from './page/ProductCartPage/ProductCartPage';
import ProductDetailPage from './page/ProductDetailPage/ProductDetailPage';
import NotFoundPage from './page/NotFoundPage/NotFoundPage';
import ContactPage from './page/ContactPage/ContactPage';

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
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
]

export default routes;