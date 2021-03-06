import React from 'react';
import Mailto from 'react-protected-mailto'

export default class Contact extends React.Component{
  render(){
    return (
      <div className='content'>
        <p> 
          Phone: <Mailto tel="917-345-6194" />
          <br />
          Email:{" "}
          <Mailto
            email="ayarza.manwaring@gmail.com"
            headers={
              ({ subject: "Question from the website" })
            }
          />
        </p>
      </div>
    );
  }
}