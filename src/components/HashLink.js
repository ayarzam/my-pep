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
      asyncTimer: null
    };

    this.checkActive = this.checkActive.bind(this);
    this.scrollToHash = this.scrollToHash.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', this.checkActive);
  }

  checkActive() {
    console.log('has active class?: ', this.state.className, 'hash: ', this.state.hashId);
    if (this.state.className.match(/active/)) {
      this.scrollToHash();
    }
  }

  scrollToHash() {
    let hashId = this.state.hashId;
    let behavior = this.state.behavior || "auto";

    console.log('hashId: ',this.state.hashId);
    console.log('behavior: ',this.state.behavior);

    if (hashId !== null && hashId !== undefined && hashId.trim().length > 0) {
      let targetDiv = document.getElementById(hashId.replace(/#/, ''));
      console.log(targetDiv);
      targetDiv.scrollIntoView({ behavior: behavior });
    } else {
      window.scrollTo({ top: 0, behavior: behavior })
    }
  }

  // If a targetId was supplied, scroll to target; else scroll to top of page
  handleClick() {
    // if target path is not the same as the current path, redirect user
    console.log('current path: ', window.location.pathname, "target path: ", process.env.PUBLIC_URL + this.state.targetLink)
    
    if (window.location.pathname !== process.env.PUBLIC_URL + this.state.targetLink) {
      console.log('redirected');
      window.location.href = window.location.origin + process.env.PUBLIC_URL + this.state.targetLink + this.state.hashId;
    }
    else {
      this.scrollToHash();
    }
  }

  render() {
    const link = this.state.targetLink + this.state.hashId;
    console.log('Link to: ', link);
    console.log('className: ', this.state.className);

    return (
      <Link className={this.state.className} to={link} onClick={this.handleClick}>{this.state.label}
        {this.props.children}
      </Link>
    );
  }
}