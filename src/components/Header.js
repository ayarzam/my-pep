import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { HashLink as HLink } from 'react-router-hash-link';
import { Link } from "react-router-dom"

function Header() {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Link className="logo-container" to="/">
                    <img className='logo align-top' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjYdir4W4R7Wy0pwAMxNTfRfxdsCoLViVeueRqeEuwk0zYo1Ox' alt="" />{' '}
                    <span className='logo-text'>Ayarza<b>Manwaring</b></span>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="m-auto nav-link" to="/">Resume</Link>
                        <Link className="m-auto nav-link" to="/works">Works</Link>
                        {/* <Nav.Link className="m-auto" href="/about">About</Nav.Link> */}
                        <HLink className="m-auto nav-link" smooth to="/#about">About</HLink>

                        <div className="btn-background">
                            {/* <Nav.Link className="m-auto" href="/contact">Contact</Nav.Link> */}
                            <HLink className="m-auto nav-link" smooth to="/#contact">Contact</HLink>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default Header;