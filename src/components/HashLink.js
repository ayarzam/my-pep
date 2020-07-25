import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HashLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: props.className,
      targetLink: props.to,
      hashId: props.hashId,
      behavior: props.behavior,
      label: props.label || '',
      handler: props.handler,
      asyncTimer: null,
      checkActive: true
    };

    this.checkActive = this.checkActive.bind(this);
    this.scrollToHash = this.scrollToHash.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // On page load, scroll to component who's class is active
  componentDidMount() {
    window.addEventListener('load', () => {
      if (this.state.checkActive) {
      this.checkActive();
      }
    });
  }

  checkActive() {
    if (this.state.className.match(/active/)) {
      setTimeout(() => {
        this.scrollToHash();
      }, 300);
      this.setState({ checkActive: false})
    }
  }

  // Scroll to specified targetId using provided hashId and behavior; else scroll to top of page
  scrollToHash() {
    let hashId = this.state.hashId;
    let behavior = this.state.behavior || "auto";

    if (hashId !== null && hashId !== undefined && hashId.trim().length > 0) {
      let targetDiv = document.getElementById(hashId.replace(/#/, ''));
      targetDiv.scrollIntoView({ behavior: behavior });
    } else {
      window.scrollTo({ top: 0, behavior: behavior })
    }
  }

  // Handle click on link
  handleClick() {
    // check if the parent component passed in a function to be executed
    if (this.state.handler) {
      this.state.handler();
    }

    setTimeout(() => {
      this.scrollToHash();
    }, 300);
  }

  render() {
    let hashId = this.state.hashId ? this.state.hashId : '';
    const link = this.state.targetLink + hashId;

    return (
      <Link className={this.state.className} to={link} onClick={this.handleClick}>{this.state.label}
        {this.props.children}
      </Link>
    );
  }
}