import React, { Component } from 'react';
import './css/App.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './views/Home';
import About from './views/About';
import Projects from './views/Projects';
import Contact from './views/Contact';
import { Navbar, Nav, Dropdown, ButtonGroup } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/projects" component={Projects}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>

        <header>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="/">
              <img className='logo align-top' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjYdir4W4R7Wy0pwAMxNTfRfxdsCoLViVeueRqeEuwk0zYo1Ox' alt="" />{' '}
              React-Bootstrap
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link className="m-auto" href="/about">About</Nav.Link>
                <Dropdown className="m-auto" as={ButtonGroup}>
                  <Nav.Link href="/projects">Projects</Nav.Link>

                  <Dropdown.Toggle split variant="transparent" id="dropdown-split-btn" />
                  <Dropdown.Menu id="dropdown-menu">
                    <Dropdown.Item eventKey="1">Project1</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Project2</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Project3</Dropdown.Item>
                    <Dropdown.Divider className="nav-divider" />
                    <Dropdown.Item eventKey="4">Github</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Nav.Link className="m-auto" href="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
      </Router>
    );
  }
}

export default App;
