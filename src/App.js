import React, { Component } from 'react';
import './css/App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollButton from './components/ScrollBtn';
import Header from './components/Header';
import Home from './views/Home';
import Works from './views/ProjectsGallery';
import Footer from './components/Footer';
import SinglePageView from './views/SinglePageView';

class App extends Component {
  render() {
    return (
      <div>
        <Header key={window.location.href}/>

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/works" render={ (routerProps) => <Works {...routerProps} />}></Route>
          <Route exact path="/works/:id" render={ (routerProps) => <SinglePageView {...routerProps} />} ></Route>
        </Switch>

        <ScrollButton targetId="root" behavior="smooth" iconType="arrow-up" />

        <Footer />
      </div>
    );
  }
}

export default App;
