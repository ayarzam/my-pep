import React, { Component } from 'react';
import portrait from '../images/portrait.png';
import { ReactComponent as CodeLogos } from '../images/coding-logos.svg';

export default class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="card">
          <img alt="Profile" src={portrait}></img>
          <div className="about-text">
            <div>Hi, I’m <span className="colored-text">Ayarza Manwaring!</span></div>
            <div>A Smith College alumni with a Master Degree in Experimental Psychology.
            After graduating from the Grace Hopper Program at Fullstack Academy’s coding
            bootcamp, I’ve combined my passion for researching human behavior with my
            interest in code development. I now foster interconnectedness between people
          by creating <span className="colored-text">immersive experiences</span>. I’m motivated to produce products that are
          accessible and <span className="colored-text">end-user focused</span>.</div>
            <div>Please feel free to reach out to me if you'd like to <span className="colored-text">connect</span>!</div>
          </div>
          <div className="background">
            <CodeLogos />
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}