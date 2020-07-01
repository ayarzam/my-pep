import React, { Component } from 'react';
import ContactForm from './ContactForm.js';
import { ReactComponent as Background } from '../images/contact-background.svg';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }

    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }
  
  async handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:3002/send", this.state)
      console.log("state before reset", this.state)
      if (res.data.status === 'success'){
            alert("Message Sent."); 
          this.resetForm()
      }else if(res.data.status === 'fail'){
           alert("Message failed to send.")
         }
      console.log("state after reset", this.state)
    }catch (error) {
      console.log(error)
    }
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      message: ''
    });
  }
  render() {
    return (
      <div className="contact-container">
        <div className="content">
          <div className="contact-text">
            <div>Contact Me</div>
            <div>Feel free to reach out and connect!</div>
          </div>
          <ContactForm />
        </div>
        <div className="background">
          <Background />
        </div>
      </div>
    );
  }
}

