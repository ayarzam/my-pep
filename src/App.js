import React from 'react';

import{BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import './App.css';

class App extends React.Component{
  render(){
    return(
      <Router>
        <div className='content'>
          {/* <nav className='navBar'> */}
            {/* <Link to="/">Home</Link> */}
            {/* <Link to="/about">About</Link> */}
            {/* <Link to="/projects">Portfolio</Link> */}
            {/* <Link to="/contact">Contact Me</Link> */}
            {/* <p>  */}
          {/* Phone: <Mailto tel="917-345-6194" /> */}
          {/* <br /> */}
          {/* Email:{" "} */}
          {/* <Mailto
            email="***REMOVED***"
            headers={
              ({ subject: "Question from the website" })
            }
          /> */}
        {/* </p> */}
          {/* </nav> */}
          <main>
            {/* <h1> This is the Home Page</h1> */}
          </main>
             <Switch>
            <Route exact path="/" render={routeProps => <Home {...routeProps} />} />
            <Route exact path="/about" render={routeProps => <About {...routeProps} />}/>
            <Route exact path="/projects" render={routeProps => <Projects {...routeProps} />} />
            <Route exact path="/contact" render={routeProps => <Contact {...routeProps} />} />
            </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
