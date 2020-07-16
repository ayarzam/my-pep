import React, { Component } from 'react';
import classNames from "classnames";
import HashLink from './HashLink';

export default class FullPageNav extends Component {
    constructor(props) {
        super(props);

        this.state = {
          activeNav: this.setActiveNav()
        };

        this.setActiveNav = this.setActiveNav.bind(this)
        this.handleClick = this.handleClick.bind(this);
        this.checkPath = this.checkPath.bind(this);
    }
    
    setActiveNav() {
        let origin = window.location.origin;
        let basename = process.env.PUBLIC_URL;

        let href = window.location.href;

        return href.replace(new RegExp(origin + basename), ''); // replace href orgin with '' so we get the full path including hashes
    }

    handleClick(link) {
        this.setState({ activeNav: link });
    }

    checkPath(link) {
        const classes = classNames({
            'nav-link': true, // always add this class
            active: this.state.activeNav === link // active link is the same as the param passed in
        });

        console.log('active path: ', this.state.activeNav , 'link: ', link, this.state.activeNav === link);


        return classes;
    }

    render() {
        return (
            <div id="full-page-nav-container">
                <ul>
                    <li>
                        <HashLink className={this.checkPath('/')} to="/" behavior="smooth">
                            <div onClick={() => this.handleClick('/')}>
                                <span className="full-page-nav-title">Home</span>
                                <span className="nav-circle"></span>
                            </div>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink className={this.checkPath('/#about')} to="/" hashId="#about" behavior="smooth">
                            <div onClick={() => this.handleClick('/#about')}>
                                <span className="full-page-nav-title">About</span>
                                <span className="nav-circle"></span>
                            </div>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink className={this.checkPath('/#featured')} to="/" hashId="#featured" behavior="smooth">
                            <div onClick={() => this.handleClick('/#featured')}>
                                <span className="full-page-nav-title">Featured</span>
                                <span className="nav-circle"></span>
                            </div>
                        </HashLink>
                    </li>
                    <li>                   
                        <HashLink className={this.checkPath('/#contact')} to="/" hashId="#contact" behavior="smooth">
                            <div onClick={() => this.handleClick('/#contact')}>
                                <span className="full-page-nav-title">Contact</span>
                                <span className="nav-circle"></span>
                            </div>
                        </HashLink>
                    </li>
                </ul>
            </div>
        );
    }
}