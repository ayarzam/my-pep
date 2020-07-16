import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class HashLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: props.className,
      targetLink: props.to,
      hashId: props.hashId || '',
      behavior: props.behavior,
      label: props.label || ''
    };

    this.handleClick = this.handleClick.bind(this);
  }

  // If a targetId was supplied, scroll to target; else scroll to top of page
  handleClick() {
    // if target path is not the same as the current path, redirect user
    console.log('current path: ', window.location.pathname, "target path: ", process.env.PUBLIC_URL + this.state.targetLink)
    
    if (window.location.pathname !== process.env.PUBLIC_URL + this.state.targetLink) {
      // window.location.href = window.location.origin + process.env.PUBLIC_URL + this.state.targetLink + this.state.hashId;
      this.renderRedirect();
      console.log('redirected');
    }
    else {
      let hashId = this.state.hashId;
      let behavior = this.state.behavior || "auto";

      console.log('hashId: ',this.state.hashId);
      console.log('behavior: ',this.state.behavior);

      if (hashId !== null && hashId !== undefined && hashId.trim().length > 0) {
        console.log(hashId)
        let targetDiv = document.getElementById(hashId.replace(/#/, ''));
        targetDiv.scrollIntoView({ behavior: behavior });
      } else {
        window.scrollTo({ top: 0, behavior: behavior })
      }
    }
  }

  renderRedirect() {
    return <Redirect to={this.state.targetLink} />;
  }

  render() {
    const link = this.state.targetLink + this.state.hashId;
    console.log(link);

    return (
      <Link className={this.state.className} to={link} onClick={this.handleClick}>{this.state.label}
        {this.props.children}
      </Link>
    );
  }
}