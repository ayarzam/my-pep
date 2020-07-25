import React, { Component } from "react";
import axios from "axios";
import { Nav } from "react-bootstrap";
import { FaLink } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

export default class SinglePageView extends Component {
  constructor() {
    super();
    this.state = {
      project: {}
    };
  }

  async componentDidMount() {
    const projectId = this.props.match.params.id;
    const response = await axios.get(
      `/api/works/${projectId}`
    );
    console.log("response", response);
    this.setState({ project: response.data });
  }

  renderSidebarContent(element, title) {
    if (this.state.project[element]) {
      return (
          <div className="sidebar-content-container">
            <div className="sidebar-content-title">{title}</div>
            <ul className="sidebar-content">
            {this.state.project[element].map( (elem, index) => {
              return(
                <li key={index}>{elem}</li>
              )
            })}
            </ul>
        </div>
      )
    }
  }

  render() {
    return (
      <div id="single-project-container" key={this.state.project.id}>
        <div className="single-project-header">
          <img
            src={this.state.project.img}
            alt={this.state.project.project_title}/>
          <div></div>
          <h1>{this.state.project.project_title}</h1>
        </div>

        <div className="single-project-content-container">
          <div className="single-project-content">
            <div className="main-content-container">
                <div className="main-content-title"><b>Group Members: </b>{this.state.project.team}</div>
            </div>
            <div className="main-content-container">
                <div className="main-content">{this.state.project.long_description}</div>
            </div>
            
          </div>
          <div className="single-project-sidebar">
            <div className="sidebar-content-container">
              <div className="single-project-blurb">
                <div className="sidebar-content-title">TL;DR</div>
                <div>{this.state.project.description}</div>
              </div>
              <div className="single-project-homepage-link">
                <div className="sidebar-content-title">Homepage:</div>
                <Nav.Link href={this.state.project.deployed}>
                  <FaLink />
                  <span>yachtshopper.herokuapp.com/</span>
                </Nav.Link>
              </div>
              <div className="single-project-repository-link">
                <div className="sidebar-content-title">Repository:</div>
                <Nav.Link href={this.state.project.github}>
                  <FaGitAlt />
                  <span>github.com/yachtworld/yachtshopper</span>
                </Nav.Link>
              </div>
              <hr></hr>
            </div>
            <div className="sidebar-content-container">
              <div className="sidebar-content-title">Duration:</div>
              <div>{this.state.project.duration}</div>
            </div>
            {this.renderSidebarContent('role', 'Role:')}
            {this.renderSidebarContent('frontend_technologies', 'Frontend Stack:')}
            {this.renderSidebarContent('backend_technologies', 'Backend Stack:')}
            {this.renderSidebarContent('testing_suite', 'Testing Suite:')}
          </div>
        </div>
      </div>
    )
  }
}