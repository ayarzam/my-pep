import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logo from '../images/logo.png';

function Footer() {
    return (
        <footer>
            <Navbar bg="light" variant="light">
                <span className="navbar-brand" href="/">
                    <img className='logo' src={logo} alt="" />{' '}
                    <span className="copyright">
                        <p className='logo-text'>&copy; 2020 Ayarza<b>Manwaring</b></p>
                        <p className="collab">In collaboration with<p className="heart"> ❤ </p>Shinell Manwaring</p>
                    </span>
                </span>
                <Nav className="ml-auto">
                    <Nav.Link className="social-logo" href="https://www.linkedin.com/in/ayarza-manwaring/" aria-label="linkedin" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </Nav.Link>
                    <Nav.Link className="social-logo" href="https://github.com/ayarzam" aria-label="github" target="_blank" rel="noreferrer">
                        <FaGithub />
                    </Nav.Link>
                </Nav>
            </Navbar>
        </footer>
    );
}

export default Footer;