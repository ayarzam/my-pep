import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logo from '../images/logo.png';

function Footer() {
    return (
        <footer>
            <Navbar bg="light" variant="light">
                <Link className="navbar-brand" to="/">
                    <img className='logo align-top' src={logo} alt="" />{' '}
                    <span className='logo-text'>Ayarza<b>Manwaring</b></span>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="logo m-auto" href="https://www.linkedin.com/in/ayarza-manwaring/" target="_blank" rel="noreferrer">
                            <FaLinkedin />
                        </Nav.Link>
                        <Nav.Link className="logo m-auto" href="https://github.com/ayarzam" target="_blank" rel="noreferrer">
                            <FaGithub />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </footer>
    );
}

export default Footer;