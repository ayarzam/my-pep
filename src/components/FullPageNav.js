import React, { Component } from 'react';
import classNames from "classnames";
import HashLink from './HashLink';

export default class FullPageNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeNav: this.activeNav()
        };

        this.handleClick = this.handleClick.bind(this);
        this.checkPath = this.checkPath.bind(this);
    }

    // Return the active path; used to set the nav links as active or inactive
    activeNav() {
        let origin = window.location.origin;
        let basename = process.env.PUBLIC_URL;
        let href = window.location.href;

        let activePath = href.replace(new RegExp(origin + basename), ''); // replace href orgin with '' so we get the full path including hashes
        console.log('active nav path: ',activePath);

        return activePath === '' ? '/' : activePath;
    }
    
    // Set activeNav to the selected path
    handleClick(link) {
        this.setState({ activeNav: link });
    }

    // Return whether the className should be set to active
    checkPath(link) {
        const classes = classNames({
            'nav-link': true, // always add this class
            active: this.state.activeNav === link // active link is the same as the param passed in
        });

        console.log('check...active path: ', this.state.activeNav , 'link: ', link, this.state.activeNav === link);

        return classes;
    }

    render() {
        return (
            <div id="full-page-nav-container">
                <ul>
                    <li>
                        <HashLink key={this.checkPath('/')} className={this.checkPath('/')} to="/" behavior="smooth">
                            <div onClick={() => this.handleClick('/')}>
                                <span className="full-page-nav-title">Home</span>
                                <span className="nav-circle"></span>
                            </div>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink key={this.checkPath('/#about')} className={this.checkPath('/#about')} to="/" hashId="#about" behavior="smooth">
                            <div onClick={() => this.handleClick('/#about')}>
                                <span className="full-page-nav-title">About</span>
                                <span className="nav-circle"></span>
                            </div>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink key={this.checkPath('/#featured')} className={this.checkPath('/#featured')} to="/" hashId="#featured" behavior="smooth">
                            <div onClick={() => this.handleClick('/#featured')}>
                                <span className="full-page-nav-title">Featured</span>
                                <span className="nav-circle"></span>
                            </div>
                        </HashLink>
                    </li>
                    <li>                   
                        <HashLink key={this.checkPath('/#contact')} className={this.checkPath('/#contact')} to="/" hashId="#contact" behavior="smooth">
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