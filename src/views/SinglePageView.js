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

    this.renderSidebarLinks = this.renderSidebarLinks.bind(this);
    this.renderSidebarContent = this.renderSidebarContent.bind(this);
  }

  async componentDidMount() {
    const projectId = this.props.match.params.id;
    const url = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API_URI + '/api/works' : '/api/works';
    const response = await axios.get(`${url}/${projectId}`);
    this.setState({ project: response.data });
  }

  renderSidebarLinks(element, title) {
    if (this.state.project[element]) {
      return (
        <div className="single-project-link">
          <div className="sidebar-content-title">{title}</div>
          <Nav.Link href={this.state.project[element]} target="_blank" rel="noreferrer">
            {element === 'deployed' ? <FaLink /> : <FaGitAlt />}
            <span>{this.state.project[element]}</span>
          </Nav.Link>
        </div>
      )
    }
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
              {this.renderSidebarLinks('deployed', 'Homepage:')}
              {this.renderSidebarLinks('github', 'Repository:')}
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