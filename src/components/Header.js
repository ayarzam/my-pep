import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import HashLink from './HashLink';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          expanded: false
        };
    }

    setExpanded(val) {
        console.log('expanded',this.state.expanded,'new val: ',val)
        this.setState({ expanded: val})
    }

    render () {
        return (
            <header>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" expanded={this.state.expanded}>
                    <Link className="navbar-brand" to="/">
                        <img className='logo align-top' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjYdir4W4R7Wy0pwAMxNTfRfxdsCoLViVeueRqeEuwk0zYo1Ox' alt="" />{' '}
                        <span className='logo-text'>Ayarza<b>Manwaring</b></span>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => this.setExpanded(this.state.expanded ? false : true)}/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link className="m-auto nav-link" href="https://drive.google.com/file/d/1T8CfhEW-WbSvh4YppH8e-2KLSQH_MZBr/view" onClick={() => this.setExpanded(false)}>Resume</Nav.Link>
                            <Link className="m-auto nav-link" to="/works" onClick={() => this.setExpanded(false)}>Works</Link>
                            <HashLink className="m-auto nav-link" to="/" hashId="#about" behavior="smooth" label="About" handler={() => this.setExpanded(false)}></HashLink>
                            <div className="btn-background">
                                <HashLink className="m-auto nav-link" to="/" hashId="#contact" behavior="smooth" label="Contact" handler={() => this.setExpanded(false)}></HashLink>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        );
    }
}