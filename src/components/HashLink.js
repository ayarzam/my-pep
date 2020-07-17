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
      asyncTimer: null,
      checkActive: true
    };

    // this.checkActive = this.checkActive.bind(this);
    this.scrollToHash = this.scrollToHash.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', () => {
      if (this.state.checkActive) {
        this.checkActive()
      }
    });
  }

  checkActive() {
    console.log('has active class?: ', this.state.className, 'hash: ', this.state.hashId);
    if (this.state.className.match(/active/)) {
      setTimeout(() => {
        this.scrollToHash();
      }, 300);
      this.setState({ checkActive: false})
    }
  }

  scrollToHash() {
    let hashId = this.state.hashId;
    let behavior = this.state.behavior || "auto";

    console.log('scrolling...hashId: ',this.state.hashId,'behavior: ',this.state.behavior);

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
    console.log('click...current path: ', window.location.pathname, "target path: ", process.env.PUBLIC_URL + this.state.targetLink)
    
    // if (window.location.pathname !== process.env.PUBLIC_URL + this.state.targetLink) {
    //   let hashId = this.state.hashId ? this.state.hashId : '';
    //   console.log('redirected: ', hashId);
    //   if (hashId) {
    //     // window.location.href = window.location.origin + process.env.PUBLIC_URL + this.state.targetLink;
    //     window.location.hash = hashId;

    //   }
    //   else {
    //     // window.location.href = window.location.origin + process.env.PUBLIC_URL + this.state.targetLink;
    //     window.location.hash = '';
    //   }
    // }


    if (window.location.pathname === process.env.PUBLIC_URL + this.state.targetLink) {    
      setTimeout(() => {
        this.scrollToHash();
      }, 300);
    }
    else {
      console.log('redirected: ', process.env.PUBLIC_URL + this.state.targetLink + (this.state.hashId ? this.state.hashId : ''));
      setTimeout(() => {
        this.scrollToHash();
      }, 300);
    }
  }

  render() {
    let hashId = this.state.hashId ? this.state.hashId : '';
    const link = this.state.targetLink + hashId;
    console.log('render...Link to: ', link, 'className: ', this.state.className);

    return (
      <Link className={this.state.className} to={link} onClick={this.handleClick}>{this.state.label}
        {this.props.children}
      </Link>
    );
  }
}