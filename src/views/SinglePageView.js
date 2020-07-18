import React, { Component } from "react";
import axios from "axios";
import { Nav } from "react-bootstrap";
import { FaLink } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import works from '../works.json'

export default class SinglePageView extends Component {
  constructor() {
    super();
    this.state = {
      project: {}
    };
  }

  // async componentDidMount() {
  //   const projectId = this.props.match.params.id;
  //   const response = await axios.get(
  //     `http://localhost:8080/api/works/${projectId}`
  //   );
  //   console.log("response", response);
  //   this.setState({ project: response.data });
  // }

  renderSidebarContent(element, title) {
    if (works[element]) {
      console.log(works[element])
      return (
          <div className="sidebar-content-container">
            <div className="sidebar-content-title">{title}</div>
            <ul className="sidebar-content">
            {works[element].map( (elem, index) => {
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
    console.log(works)
    console.log(works.map(project =>{
      return project.id
    }))
    // console.log(Object.keys(works.id))
    return (
      <div id="single-project-container" key={works.id}>
        <div className="single-project-header">
          <img
            src={works.img}
            alt={works.project_title}/>
          <div></div>
          <h1>{works.project_title}</h1>
        </div>

        <div className="single-project-content-container">
          <div className="single-project-content">
            <div className="main-content-container">
                <div className="main-content-title"><b>Group Members: </b>{works.team}</div>
            </div>
            <div className="main-content-container">
                <div className="main-content">{works.long_description}</div>
            </div>
            
          </div>
          <div className="single-project-sidebar">
            <div className="sidebar-content-container">
              <div className="single-project-blurb">
                <div className="sidebar-content-title">TL;DR</div>
                <div>{works.description}</div>
              </div>
              <div className="single-project-homepage-link">
                <div className="sidebar-content-title">Homepage:</div>
                <Nav.Link href={works.deployed}>
                  <FaLink />
                  <span>yachtshopper.herokuapp.com/</span>
                </Nav.Link>
              </div>
              <div className="single-project-repository-link">
                <div className="sidebar-content-title">Repository:</div>
                <Nav.Link href={works.github}>
                  <FaGitAlt />
                  <span>github.com/yachtworld/yachtshopper</span>
                </Nav.Link>
              </div>
              <hr></hr>
            </div>
            <div className="sidebar-content-container">
              <div className="sidebar-content-title">Duration:</div>
              <div>{works.duration}</div>
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