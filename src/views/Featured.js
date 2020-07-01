import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Featured extends Component {
    render() {
        return (
            <div className="featured-container">
                <div className="featured-text">
                    <div>Featured Works</div>
                    <div>Web products that keep the user in mind</div>
                </div>
                <div className="featured-project">
                    <div className="card">

                    </div>
                </div>
                <div className="featured-project">
                    <div className="card">

                    </div>
                </div>
                <div className="featured-project">
                    <div className="card">

                    </div>
                </div>
                <div className="see-more">
                    <div className="card">
                        <div className="see-more-text">
                            Want to see more? <Link to="/projects" className="colored-text">Click Here!</Link>
                        </div>
                        <div className="background">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}