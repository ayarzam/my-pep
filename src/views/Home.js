import React, { Component } from 'react';

import Hero from './Hero.js';
import About from './About.js';
import Featured from './Featured.js';
import Contact from './Contact.js';

class Home extends Component {
  render() {
    return (
      <div>
        <section className="hero">
          <Hero />
        </section>

        <section className="about">
          <About />
        </section>

        <section className="featured">
          <Featured />
        </section>

        <section className="contact">
          <Contact />
        </section>
      </div>
    );
  }
}

export default Home;