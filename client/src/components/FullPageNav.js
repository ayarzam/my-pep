import React, { Component } from 'react';
import classNames from "classnames";
import HashLink from './HashLink';

export default class FullPageNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeNav: this.props.history.location.pathname + this.props.history.location.hash
        };
        
        this.monitorHistory();

        this.monitorHistory = this.monitorHistory.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.checkPath = this.checkPath.bind(this);
    }
    
    // Look for history changes
    monitorHistory() {
        const history = this.props.history;

        history.listen((location) => {
            console.log(location);
            this.setState({ activeNav: location.pathname + location.hash })
        });
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

        return classes;
    }

    render() {
        return (
            <div id="full-page-nav-container">
                <ul>
                    <li>
                        <HashLink key={`home-${this.checkPath('/')}`} className={this.checkPath('/')} to="/" behavior="smooth">
                            <div onClick={() => this.handleClick('/')}>
                                <span className="full-page-nav-title">Home</span>
                                <span className="nav-circle"></span>
                            </div>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink key={`about-${this.checkPath('/#about')}`} className={this.checkPath('/#about')} to="/" hashId="#about" behavior="smooth">
                            <div onClick={() => this.handleClick('/#about')}>
                                <span className="full-page-nav-title">About</span>
                                <span className="nav-circle"></span>
                            </div>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink key={`featured-${this.checkPath('/#featured')}`} className={this.checkPath('/#featured')} to="/" hashId="#featured" behavior="smooth">
                            <div onClick={() => this.handleClick('/#featured')}>
                                <span className="full-page-nav-title">Featured</span>
                                <span className="nav-circle"></span>
                            </div>
                        </HashLink>
                    </li>
                    <li>                   
                        <HashLink key={`contact-${this.checkPath('/#contact')}`} className={this.checkPath('/#contact')} to="/" hashId="#contact" behavior="smooth">
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