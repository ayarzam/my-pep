import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './views/Home';
import Works from './views/ProjectsGallery';
import SinglePageView from './views/SinglePageView';
import Footer from './components/Footer';
import ScrollButton from './components/ScrollBtn';

class App extends Component {
  render() {
    return (
      <div>
        <Header history={this.props.history}/>

        <Switch>
          <Route exact path="/" history={this.props.history} component={Home}></Route>
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
