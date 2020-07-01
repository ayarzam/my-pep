import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Hero} from '../images/hero.svg';
import portrait from '../images/portrait.png';
import {ReactComponent as CodeLogos} from '../images/coding-logos.svg';
import ContactForm from './Contact.js';

// const Home = () => {
//   return (
//     <div className='content'>
//       <h1>This is the Home Page</h1>
//     </div>
//   )
// }
// export default Home
class Home extends Component {
  render() {
    return (
      <div>
        <section className="hero">
            <Hero />
            <div className="hero-text">
              <div>Bridging the gap between users and web products</div>
              <div>UI/UX & Full-Stack Software Developer</div>
            </div>
        </section>

        <section className="about">
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
              <div>Please feel free to reach out to me if you'd like to connect.</div>
            </div>
            <div className="background">
              <CodeLogos />
              <div></div>
              <div></div>
            </div>
          </div>
        </section>

        <section className="featured">
          <div>
            <img alt="Me" src='https://media.licdn.com/dms/image/C5603AQGWlDKs0xonxg/profile-displayphoto-shrink_200_200/0?e=1583366400&v=beta&t=fjmXGnmmXpCWi7Dgd0nU_BHG0yFXDJUqXf_8Nm-zK4c' />
          </div>
          <div className='content'>
            <h3>Hello! </h3>
            <h3>Welcome to my portfolio. My name is Ayarza Manwaring and I recently finished a CS coding bootcamp.</h3>
          </div>
          <Link to="/projects"><h1>Check out my projects</h1></Link>
        </section>

        <section className="contact">
          <div className="contact-text">
            <div>Contact Me</div>
            <div>Feel free to reach out and connect!</div>
          </div>
          <ContactForm />
        </section>
      </div>
    );
  }
}

export default Home;