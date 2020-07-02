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
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/works" component={Works}></Route>
        </Switch>

        <Footer />
      </Router>
    );
  }
}

export default App;
