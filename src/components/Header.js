import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HashLink from './HashLink';
import classNames from "classnames";
import logo from '../images/logo.png';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            activeNav: this.activeNav()
        };

        this.handleClick = this.handleClick.bind(this);
        this.checkPath = this.checkPath.bind(this);
        this.setExpanded = this.setExpanded.bind(this);
    }

    // Return the active path; used to set the nav links as active or inactive
    activeNav() {
        let origin = window.location.origin;
        let basename = process.env.PUBLIC_URL;
        let href = window.location.href;

        let activePath = href.replace(new RegExp(origin + basename), ''); // replace href orgin with '' so we get the full path including hashes
        console.log('activePath: ' + activePath)

        return activePath === '' ? '/' : activePath;
    }

    // Set activeNav to the selected path
    handleClick(link) {
        this.setState({ activeNav: link });
        console.log('click: ',link,' , new activeNav: ' + this.state.activeNav)

        this.setExpanded(false); //closes mobile menu if open
    }

    // Return whether the className should be set to active
    checkPath(link) {
        const classes = classNames({
            'm-auto': true, // always add this class
            'nav-link': true, // always add this class
            active: this.state.activeNav === link // active link is the same as the param passed in
        });

        console.log('link: ', link, ' , class active: ', this.state.activeNav === link)

        return classes;
    }

    setExpanded(val) {
        this.setState({ expanded: val})
    }

    render () {
        return (
            <header>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" expanded={this.state.expanded}>
                    <div className="header-bar">
                        <Link className="navbar-brand" to="/">
                            <img className='logo align-top' src={logo} alt="" />{' '}
                            <span className='logo-text'>Ayarza<b>Manwaring</b></span>
                        </Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => this.setExpanded(this.state.expanded ? false : true)}/>
                    </div>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link className="m-auto non-active" href="https://drive.google.com/file/d/1T8CfhEW-WbSvh4YppH8e-2KLSQH_MZBr/view" target="_blank" onClick={() => this.setExpanded(false)}>Resume</Nav.Link>
                            <Link className={this.checkPath('/works')} to="/works" onClick={() => this.handleClick('/works')}>Works</Link>
                            <HashLink key={this.checkPath('/#about')} className={this.checkPath('/#about')} to="/" hashId="#about" behavior="smooth" label="About" handler={() => this.handleClick('/#about')}></HashLink>
                            <div className="btn-background">
                                <HashLink key={this.checkPath('/#contact')} className={this.checkPath('/#contact')} to="/" hashId="#contact" behavior="smooth" label="Contact" handler={() => this.handleClick('/#contact')}></HashLink>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        );
    }
}