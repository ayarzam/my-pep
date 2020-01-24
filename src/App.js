import React from 'react';

import{BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { Navbar, Nav, Dropdown, SplitButton } from 'react-bootstrap'
import './App.css';


class App extends React.Component{
  render(){
    return(
      <Router basename={process.env.PUBLIC_URL}>
        <div className='content'>
          <Navbar id="navbar" expand={'md' || 'lg' || 'xl'} bg="dark" variant="dark">
            <div id="navbar-contents">
              <Link to="/">
                <Navbar.Brand>
                  <img className='logo d-inline-block align-top' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjYdir4W4R7Wy0pwAMxNTfRfxdsCoLViVeueRqeEuwk0zYo1Ox' alt=""/>{' '}
                  React Bootstrap
                </Navbar.Brand>
              </Link>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              </div>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Link to='/about'>About</Link>
                  {/* <Nav.Link href="/about">About</Nav.Link> */}
                  
                  <div className="dropdown">
                    <Link to='/projects'> Portfolio
                    <SplitButton
                          key='down'
                          id='dropdown-button-drop-down'
                          drop='down'
                          variant="secondary"
                          title='Portfolio'
                          href="/projects"
                        >
                          <Dropdown.Item eventKey="1">Project1</Dropdown.Item>
                          <Dropdown.Item eventKey="2">Project2</Dropdown.Item>
                          <Dropdown.Item eventKey="3">Project3</Dropdown.Item>
                          <Dropdown.Divider className="nav-divider"/>
                          <Dropdown.Item eventKey="4">Github</Dropdown.Item>
                        </SplitButton>{' '}
                    </Link>
                        
                  </div>
                  <Link to='/contact'>Contact</Link>
                  {/* <Nav.Link href="/contact">Contact</Nav.Link> */}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          
          <main>
            {/* <h1> This is the Home Page</h1> */}
          </main>
             <Switch>
            <Route exact path="/" render={routeProps => <Home {...routeProps} />} />
            <Route exact path="/about" render={routeProps => <About {...routeProps} />}/>
            <Route exact path="/projects" render={routeProps => <Projects {...routeProps} />} />
            <Route exact path="/contact" render={routeProps => <Contact {...routeProps} />} />
            </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
