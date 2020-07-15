import React, { Component } from 'react';
import ContactForm from './ContactForm.js';
import { ReactComponent as Background } from '../images/svg/backgrounds/contact-background.svg';
import { ReactComponent as Arrow } from '../images/svg/decorations/arrow-doodle.svg';

export default class Contact extends Component {
  render() {
    return (
      <div id="contact-container">
        <div className="background">
          <Background />
        </div>
        <div className="content">
          <div className="contact-text">
            <h2>Contact Me</h2>
            <p>Feel free to reach out and connect!</p>
          </div>
          <ContactForm />
          <Arrow className="arrow-doodle"/>
        </div>
      </div>
    );
  }
}

