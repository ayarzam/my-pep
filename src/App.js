import React, { Component } from 'react';
import './css/App.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './views/Home';
import Works from './views/Projects';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <Router basename={`${process.env.PUBLIC_URL}/`}>
        <Header />

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/works" render={ (routerProps) => <Works {...routerProps} />} ></Route>
        </Switch>

        <Footer />
      </Router>
    );
  }
}

export default App;
