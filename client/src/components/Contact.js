import React, { Component } from 'react';
import ContactForm from './ContactForm';
import { ReactComponent as Background } from '../images/svg/backgrounds/contact-background.svg';

export default class Contact extends Component {
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
      <div id="contact-container">
        <div className="background">
          <Background />
        </div>
        <div className="content">
          <div className="contact-text anim-rise">
            <h2>Contact Me</h2>
            <p>Feel free to reach out and connect!</p>
          </div>
          <ContactForm />
        </div>
      </div>
    );
  }
}

