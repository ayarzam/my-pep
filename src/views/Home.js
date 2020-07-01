import React, { Component } from 'react';

import Hero from './Hero.js';
import About from './About.js';
import Featured from './Featured.js';
import Contact from './Contact.js';

class Home extends Component {
  render() {
    return (
      <div>
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