import React, { Component } from 'react';
import ContactForm from './Contact.js';
// import { ReactComponent as Background } from '../images/hero.svg';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="contact-text">
          <div>Contact Me</div>
          <div>Feel free to reach out and connect!</div>
        </div>
        <ContactForm />
      </div>
    );
  }
}

