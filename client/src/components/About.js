import React, { Component } from 'react';
import HashLink from './HashLink';

import portrait from '../images/portrait.png';
import { ReactComponent as CodeLogos } from '../images/svg/backgrounds/coding-logos.svg';
import { ReactComponent as Flower1 } from '../images/svg/decorations/plant_7.svg';
import { ReactComponent as Flower2 } from '../images/svg/decorations/plant_5.svg';

export default class About extends Component {
  constructor() {
    super();

    this.scrollAppear = this.scrollAppear.bind(this);
  }

  componentDidMount() {
      window.addEventListener("scroll", this.scrollAppear);
  }

  scrollAppear() {
      let content = document.querySelectorAll('.anim-rise');

      content.forEach( (item) => {
          let itemPosition = item.getBoundingClientRect().top;
          let screenPosition = window.innerHeight / 1.3;

          if (itemPosition < screenPosition) {
              item.classList.add('appear');
          }
      });
  }

  render() {
    return (
      <div id="about-container">
        <div className="card">
          <Flower1 className="flower"></Flower1>
          <Flower2 className="flower"></Flower2>
          <div className="background">
            <div></div>
            <div></div>
            <CodeLogos />
          </div>
          <img alt="Profile" src={portrait}></img>
          <div className="about-text anim-rise">
            <h2>Hi, I’m <span className="colored-text">Ayarza Manwaring!</span></h2>
            <p>A Smith College alumni with a Master Degree in Experimental Psychology.
            After graduating from the Grace Hopper Program at Fullstack Academy’s coding
            bootcamp, I’ve combined my passion for researching human behavior with my
            interest in code development. I now foster interconnectedness between people
          by creating <span className="colored-text">immersive experiences</span>. I’m motivated to produce products that are
          accessible and <span className="colored-text">end-user focused</span>.</p>
            <p>Please feel free to reach out to me if you'd like to <HashLink className="colored-text" to="/" hashId="#contact" behavior="smooth" label="connect"></HashLink>!</p>
          </div>
        </div>
      </div>
    );
  }
}