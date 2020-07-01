import React, { Component } from 'react';
import './css/App.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './views/Home';
import About from './views/About';
import Projects from './views/Projects';
import Contact from './views/Contact';


class App extends Component {
  render() {
    return (
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/works" component={Projects}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>

        <Footer />
      </Router>
    );
  }
}

export default App;
