import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { ReactComponent as Linkedin } from '../images/svg/logos/linkedin-logo.svg';
import { ReactComponent as Github } from '../images/svg/logos/github-logo.svg';
import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer>
            <Navbar bg="light" variant="light">
                <Link className="navbar-brand" to="/">
                    <img className='logo align-top' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjYdir4W4R7Wy0pwAMxNTfRfxdsCoLViVeueRqeEuwk0zYo1Ox' alt="" />{' '}
                    <span className='logo-text'>Ayarza<b>Manwaring</b></span>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="logo m-auto" href="https://www.linkedin.com/in/ayarza-manwaring/">
                            <Linkedin />
                        </Nav.Link>
                        <Nav.Link className="logo m-auto" href="https://github.com/ayarzam">
                            <Github />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </footer>
    );
}

export default Footer;