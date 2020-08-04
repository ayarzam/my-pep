import React, { Component } from 'react';
import { ReactComponent as Background } from '../images/svg/backgrounds/hero-background.svg';
import { ReactComponent as Flower1 } from '../images/svg/decorations/plant_1.svg';

export default class Hero extends Component {
    render() {
        return (
            <div id="hero-container">
                <Flower1 className="flower"></Flower1>
                <div className="background">
                    <Background />
                </div>
                <div className="hero-text">
                    <h1>Bridging the gap between users and web products</h1>
                    <p>UI/UX & Full-Stack Software Developer</p>
                </div>
            </div>
        );
    }
}

