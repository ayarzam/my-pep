import React, { Component } from 'react';
import Mailto from 'react-protected-mailto';

export default class Contact extends Component {
  render() {
    return (
      <div className='content'>
        <p>
          Phone: <Mailto tel="917-345-6194" />
          <br />
          Email:{" "}
          <Mailto
            email="***REMOVED***"
            headers={
              ({ subject: "Question from the website" })
            }
          />
        </p>
      </div>
    );
  }
}