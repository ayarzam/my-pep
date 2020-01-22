import React from 'react';

import{BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { Navbar, Nav, Container } from 'react-bootstrap'
import './App.css';


class App extends React.Component{
  render(){
    return(
      <Router>
        <div className='content'>
            <Navbar expand='lg' bg="dark" variant="dark">
              <Navbar.Brand href="#home">
                 {/* <img
                  alt=""
                  src="/logo.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '} */}
                React Bootstrap
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>  */}
                </Nav>
              </Navbar.Collapse>
            </Navbar>

          {/* <nav className='navBar'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Portfolio</Link>
            <Link to="/contact">Contact Me</Link>
            <p> 
          Phone: <Mailto tel="917-345-6194" />
          <br />
          Email:{" "}
          {<Mailto
            email="***REMOVED***"
            headers={
              ({ subject: "Question from the website" })
            }
          />}
        </p>
          </nav> */}
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
