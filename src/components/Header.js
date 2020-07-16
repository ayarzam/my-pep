import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import HashLink from './HashLink';

function Header() {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Link className="navbar-brand" to="/">
                    <img className='logo align-top' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjYdir4W4R7Wy0pwAMxNTfRfxdsCoLViVeueRqeEuwk0zYo1Ox' alt="" />{' '}
                    <span className='logo-text'>Ayarza<b>Manwaring</b></span>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="m-auto nav-link" to="/">Resume</Link>
                        <Link className="m-auto nav-link" to="/works">Works</Link>
                        <HashLink className="m-auto nav-link" to="/" hashId="#about" behavior="smooth" label="About"></HashLink>
                        <div className="btn-background">
                            <HashLink className="m-auto nav-link" to="/" hashId="#contact" behavior="smooth" label="Contact"></HashLink>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default Header;