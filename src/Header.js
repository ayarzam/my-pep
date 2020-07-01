import React from 'react';
import { Navbar, Nav, Dropdown, ButtonGroup } from 'react-bootstrap';

function Header() {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="/">
                    <img className='logo align-top' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjYdir4W4R7Wy0pwAMxNTfRfxdsCoLViVeueRqeEuwk0zYo1Ox' alt="" />{' '}
                    <span className='logo-text'>Ayarza<b>Manwaring</b></span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        {/* <Dropdown className="m-auto" as={ButtonGroup}>
                            <Nav.Link href="/projects">Projects</Nav.Link>

                            <Dropdown.Toggle split variant="transparent" id="dropdown-split-btn" />
                            <Dropdown.Menu id="dropdown-menu">
                            <Dropdown.Item eventKey="1">Project1</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Project2</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Project3</Dropdown.Item>
                            <Dropdown.Divider className="nav-divider" />
                            <Dropdown.Item eventKey="4">Github</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> */}
                        <Nav.Link className="m-auto" activeClassName="active" href="/">Resume</Nav.Link>
                        <Nav.Link className="m-auto" activeClassName="active" href="/projects">Works</Nav.Link>
                        <Nav.Link className="m-auto" activeClassName="active" href="/about">About</Nav.Link>
                        <div className="btn-background">
                            <Nav.Link className="m-auto" href="/contact">Contact</Nav.Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default Header;