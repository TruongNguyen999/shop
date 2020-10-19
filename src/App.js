import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import routes from './routesAd';

const App = props => {

  const onShowContent = routes => {
    let result = null;
    if (routes && routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route key={index} path={route.path} component={route.main} exact={route.exact} />
      })
    }
    return <Switch>{result}</Switch>
  }

  const LinkTo = {
    position: 'fixed',
    left: '5px',
    top: '95%',
    zIndex: '999',
    color: '#4b327c',
    textDecoration: 'none'
};

return (
  <Router>
    <Link to="/login" style={LinkTo}><i className="fa fa-lock" aria-hidden="true"></i> Login</Link>
    {onShowContent(routes)}
  </Router>
);
}

export default App;
