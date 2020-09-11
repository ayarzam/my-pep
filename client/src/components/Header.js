import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import HashLink from './HashLink';
import classNames from "classnames";
import logo from '../images/logo.png';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeNav: this.props.history.location.pathname + this.props.history.location.hash,
            expanded: false
        };
        
        this.monitorHistory = this.monitorHistory.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.setExpanded = this.setExpanded.bind(this);
        this.checkPath = this.checkPath.bind(this);
        this.isActive = this.isActive.bind(this);
    }

    componentDidMount() {
        this.monitorHistory();
    }
    
    // Look for history changes
    monitorHistory() {
        const history = this.props.history;

        history.listen((location) => {
            const change = location.pathname + location.hash
            if (this.state.activeNav !== change) {
                this.setState({ activeNav: change })
            }
        });
    }

    // setExpanded state to false
    handleClick(link) {
        if (this.state.expanded) {
            this.setExpanded(false);
        }
    }

    setExpanded(val) {
        this.setState({ expanded: val });
    }

    // Return whether the className should be set to active
    checkPath(link) {
        const classes = classNames({
            'nav-link': true, // always add this class
            active: this.isActive(link) // active link is the same as the param passed in
        });

        return classes;
    }

    isActive(link) {
        return this.state.activeNav === link;
    }

    render () {
        return (
            <header>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" expanded={this.state.expanded}>
                    <div className="header-bar">
                        <Nav.Link key={ `home ${ this.isActive('/') } ` } className="navbar-brand" href="/" onClick={() => this.handleClick('/')}>
                            <img className='logo' src={logo} alt="" />{' '}
                            <span className='logo-text align-middle'>Ayarza<b>Manwaring</b></span>
                        </Nav.Link>
                        <Navbar.Toggle aria-controls="header-navbar-nav" onClick={() => this.setExpanded(this.state.expanded ? false : true)}/>
                    </div>
                    <Navbar.Collapse id="header-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="https://drive.google.com/file/d/1-fjnGDKAAxtTdJd8uWpgDyncSZE4_S73/view"  target="_blank" rel="noreferrer" onClick={() => this.setExpanded(false)}>Resume</Nav.Link>
                            <Nav.Link key={ `works ${ this.isActive('/works') }` } className={this.checkPath('/works')} href="/works" onClick={() => this.handleClick('/works')}>Works</Nav.Link>
                            <HashLink key={ `about ${ this.isActive('/#about') }` } className={this.checkPath('/#about')} to="/" hashId="#about" behavior="smooth" label="About" handler={() => this.handleClick('/#about')}></HashLink>
                            <HashLink key={ `contact ${ this.isActive('/#contact') }` } className={this.checkPath('/#contact')} to="/" hashId="#contact" behavior="smooth" label="Contact" handler={() => this.handleClick('/#contact')}></HashLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        );
    }
}