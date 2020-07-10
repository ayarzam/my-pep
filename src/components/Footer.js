import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

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
                            <FaLinkedin />
                        </Nav.Link>
                        <Nav.Link className="logo m-auto" href="https://github.com/ayarzam">
                            <FaGithub />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </footer>
    );
}

export default Footer;