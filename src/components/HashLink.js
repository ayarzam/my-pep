import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
    let hashId = this.state.hashId;
    let behavior = this.state.behavior || "auto";

    console.log(this.state.hashId);
    console.log(this.state.behavior);

    if (hashId !== null && hashId !== undefined && hashId.trim().length > 0) {
      console.log(hashId)
      let targetDiv = document.getElementById(hashId.replace(/#/, ''));
      targetDiv.scrollIntoView({ behavior: behavior });
    } else {
      window.scrollTo({ top: 0, behavior: behavior })
    }
  }

  render() {
    console.log(this.state.className)
    const link = this.state.targetLink + this.state.hashId;
    console.log(link)

    return (
    <Link className={this.state.className} to={link} onClick={this.handleClick}>{this.state.label}
      {this.props.children}
    </Link>
    );
  }
}