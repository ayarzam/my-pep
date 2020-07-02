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
                    <div>Bridging the gap between users and web products</div>
                    <div>UI/UX & Full-Stack Software Developer</div>
                </div>
            </div>
        );
    }
}

