import React, { Component } from 'react';

import Hero from '../components/Hero.js';
import About from '../components/About.js';
import Featured from '../components/Featured.js';
import Contact from '../components/Contact.js';
import FullPageNav from '../components/FullPageNav'

class Home extends Component {
  render() {
    return (
      <div id="home-container">
        <FullPageNav />
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="featured">
          <Featured />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    );
  }
}

export default Home;