import React, { Component } from 'react';
import './css/App.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollButton from './components/ScrollBtn.js';

import Header from './components/Header';
import Home from './views/Home';
import Works from './views/ProjectsGallery';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/works" render={ (routerProps) => <Works {...routerProps} />} ></Route>
        </Switch>

        <ScrollButton targetId="root" behavior="smooth" iconType="arrow-up" />

        <Footer />
      </div>
      
    );
  }
}

export default App;
