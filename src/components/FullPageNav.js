import React, { Component } from 'react';
import { HashLink as HLink } from 'react-router-hash-link';

export default class FullPageNav extends Component {
    constructor(props) {
        super(props);

        this.state = {
          activeNav: setActiveNav()
        };

        function setActiveNav() {
            let origin = window.location.origin;
            let basename = process.env.PUBLIC_URL;

            let href = window.location.href;
    
            return href.replace(new RegExp(origin + basename), ''); // replace href orgin with '' so we get the full path including hashes
        }

        this.handleClick = this.handleClick.bind(this);
        this.checkPath = this.checkPath.bind(this);
    }

    handleClick(link) {
        this.setState({ activeNav: link });
    }

    checkPath(link) {
        let active = this.state.activeNav;

        console.log('active path: ', active , 'link: ', link, active === link);

        return active === link;
    }

    render() {
        return (
            <div id="full-page-nav-container">
                <ul>
                    <li>
                        <HLink className={ `nav-link ${this.checkPath('/') || this.checkPath('/#root') ? "active" : ""}` } smooth to="/#root">
                            <div onClick={() => this.handleClick('/#root')}>
                                <span className="full-page-nav-title">Home</span>
                                <span className="nav-circle"></span>
                            </div>
                        </HLink>
                    </li>
                    <li>
                        <HLink className={ `nav-link ${this.checkPath('/#about') ? "active" : ""}` } smooth to="/#about">
                            <div onClick={() => this.handleClick('/#about')}>
                                <span className="full-page-nav-title">About</span>
                                <span className="nav-circle"></span>
                            </div>
                        </HLink>
                    </li>
                    <li>
                        <HLink className={ `nav-link ${this.checkPath('/#featured') ? "active" : ""}` } smooth to="/#featured">
                            <div onClick={() => this.handleClick('/#featured')}>
                                <span className="full-page-nav-title">Featured</span>
                                <span className="nav-circle"></span>
                            </div>

                        </HLink>
                    </li>
                    <li>                   
                        <HLink className={ `nav-link ${this.checkPath('/#contact') ? "active" : ""}` } smooth to="/#contact">
                            <div onClick={() => this.handleClick('/#contact')}>
                                <span className="full-page-nav-title">Contact</span>
                                <span className="nav-circle"></span>
                            </div>
                        </HLink>
                    </li>
                </ul>
            </div>
        );
    }
}