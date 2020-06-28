import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      <div className='content'>
        <div>
          <img alt="Me" src='https://media.licdn.com/dms/image/C5603AQGWlDKs0xonxg/profile-displayphoto-shrink_200_200/0?e=1583366400&v=beta&t=fjmXGnmmXpCWi7Dgd0nU_BHG0yFXDJUqXf_8Nm-zK4c' />
        </div>
        <div className='content'>
          <h3>Hello! </h3>
          <h3>Welcome to my portfolio. My name is Ayarza Manwaring and I recently finished a CS coding bootcamp.</h3>
        </div>
        <Link to="/projects"><h1>Check out my projects</h1></Link>
      </div>
    );
  }
}

export default Home;