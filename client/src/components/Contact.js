import React, { Component } from 'react';
import ContactForm from './ContactForm';
import { ReactComponent as Background } from '../images/svg/backgrounds/contact-background.svg';

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
        </div>
      </div>
    );
  }
}

