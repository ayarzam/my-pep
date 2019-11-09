import React from 'react';
import Mailto from 'react-protected-mailto'

export default class Contact extends React.Component{
  render(){
    return (
      <div>
        <p>
          Phone: <Mailto tel="917-345-6194" />
          <br />
          Email:{" "}
          <Mailto
            email="***REMOVED***" obfuscate={true}
            headers={
              { subject: "Question from the website" }
            }
          >Contact Me! </Mailto>
        </p>
      </div>
    );
  }
}