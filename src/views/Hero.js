import React, { Component } from 'react';
import { ReactComponent as Background } from '../images/hero.svg';

export default class Hero extends Component {
    render() {
        return (
            <div>
                <Background />
                <div className="hero-text">
                    <div>Bridging the gap between users and web products</div>
                    <div>UI/UX & Full-Stack Software Developer</div>
                </div>
            </div>
        );
    }
}

