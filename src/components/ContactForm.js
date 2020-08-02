import React, { Component } from 'react';
import axios from "axios";
import { ReactComponent as Arrow } from '../images/svg/decorations/arrow-doodle.svg';

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

    async handleSubmit(event) {
        event.preventDefault();
        try {
            const res = await axios.post('/api/send', this.state)
            if (res.data.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (res.data.status === 'fail') {
                alert("Message failed to send.")
            }
        } catch (error) {
            console.error("Contact form handleSubmit: ", error)
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
            <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
                <div className="form-group">
                    <label htmlFor="contact-form-name">Full Name</label>
                    <input id="contact-form-name" type="text" className="form-control" value={this.state.name} onChange={this.onNameChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="contact-form-email">Email address</label>
                    <input id="contact-form-email" type="email" className="form-control" value={this.state.email} onChange={this.onEmailChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="contact-form-message">Message</label>
                    <textarea id="contact-form-message" className="form-control" rows="6" value={this.state.message} onChange={this.onMessageChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Arrow className="arrow-doodle"/>
            </form>
        );
    }
}