import React, { Component } from 'react';
import ContactForm from './ContactForm.js';
import { ReactComponent as Background } from '../images/contact-background.svg';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <div className="content">
          <div className="contact-text">
            <div>Contact Me</div>
            <div>Feel free to reach out and connect!</div>
          </div>
          <ContactForm />
        </div>
        <div className="background">
          <Background />
        </div>
      </div>
    );
  }
}

