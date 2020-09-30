import React, { useEffect } from 'react';
import Menu from './../../components/Menu/Menu';
import Footer from './../../components/Footer/Footer';
import MutoTop from './../../components/Footer/MutoTop';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './../../routes';
import Contact from './../../components/Contact/Contact';

const Main = ({ match }) => {

  useEffect(() => {
    console.log(match);
  }, [match])

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
      <Menu />
      {onShowContent(routes)}
      <Footer />
      <Contact />
      <MutoTop />
    </Router>
  );
}

export default Main;
