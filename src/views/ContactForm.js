import React, { Component } from 'react';
import axios from "axios";

export default class ContactForm extends Component {
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
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        // try {
        //   const res = await axios.post("/backend", this.state);
        //   const emailMe = this.props.emailMe
        //   emailMe(res.data)

        // } catch (error) {
        //   console.log(error)
        // }

        console.log(this.state);

        this.resetForm();
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
            <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" value={this.state.email} aria-describedby="emailHelp" onChange={this.onEmailChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="6" value={this.state.message} onChange={this.onMessageChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }

}