import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter as Router, NavLink } from "react-router-dom"

function Header() {
    return (
        <header>
            <Router basename={`${process.env.PUBLIC_URL}/`}> 
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="/">
                    <img className='logo align-top' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjYdir4W4R7Wy0pwAMxNTfRfxdsCoLViVeueRqeEuwk0zYo1Ox' alt="" />{' '}
                    <span className='logo-text'>Ayarza<b>Manwaring</b></span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="m-auto" to="/">Resume</Nav.Link>
                        <Nav.Link className="m-auto" to="works">Works</Nav.Link>
                        {/* <Nav.Link className="m-auto" href="/about">About</Nav.Link> */}
                        <Link className="m-auto nav-link" smooth to="/#about">About</Link>

                        <div className="btn-background">
                            {/* <Nav.Link className="m-auto" href="/contact">Contact</Nav.Link> */}
                            <Link className="m-auto nav-link" smooth to="/#contact">Contact</Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Router>
        </header>
    );
}

export default Header;