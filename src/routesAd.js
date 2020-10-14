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
        main: ({ history }) => <Login history={history} />
    },
    {
        path: '/Admin',
        exact: false,
        main: ({ history, match }) => <Administration history={history} match={match} />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
]

export default routes