import React, { Component } from "react";
import classNames from 'classnames';
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

export default class ScrollBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetId: props.targetId,
      behavior: props.behavior,
      iconType: props.iconType,
      showButton: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillMount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Detect when the scroll up button should appear
  handleScroll() {
    var showButton = this.state.showButton;

    if (!showButton) {
      if (window.scrollY > 90) {
        this.setState({
          showButton: true,
        });
      }
    } else {
      if (window.scrollY < 90) {
        this.setState({
          showButton: false,
        });
      }
    }
  }

  // If a targetId was supplied, scroll to target; else scroll to top of page
  handleClick() {
    let targetId = this.state.targetId;
    let behavior = this.state.behavior || "auto";

    if (targetId !== null && targetId !== undefined && targetId.trim().length > 0) {
      let targetDiv = document.getElementById("" + targetId);
      targetDiv.scrollIntoView({ behavior: behavior });
    } else {
      window.scrollTo({ top: 0, behavior: behavior })
    }
  }

  render() {
    const classes = classNames({
        "scroll-btn": true, // we always want this class
        active: this.state.showButton, // only add this class if the state says so
    });

    const arrows = {
        "arrow-up" : <FaArrowUp />,
        "arrow-down" : <FaArrowDown />
    };

    return (
      <button className={classes} onClick={this.handleClick}>
        {arrows[this.state.iconType]}
      </button>
    );
  }
}
