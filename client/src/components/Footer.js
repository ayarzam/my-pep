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
                        <span className='logo-text'>&copy; 2020 Ayarza<b>Manwaring</b></span>
                        <span className="collab">In collaboration with<span className="heart"> ❤ </span><Nav.Link className="social-logo" href="https://www.shinellmanwaring.com/" target="_blank">Shinell Manwaring</Nav.Link></span>
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