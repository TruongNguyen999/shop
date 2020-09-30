import React from 'react';
import Main from './page/Main/Main';
import Login from './page/Administration/Login';
import Administration from './page/Administration/Administration';
import NotFoundPage from './page/NotFoundPage/NotFoundPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Main />
    },
    {
        path: '/Login',
        exact: false,
        main: () => <Login />
    },
    {
        path: '/Admin',
        exact: false,
        main: () => <Administration />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
]

export default routes