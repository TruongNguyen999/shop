import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

  return (
    <Router>
      {onShowContent(routes)}
    </Router>
  );
}

export default App;
