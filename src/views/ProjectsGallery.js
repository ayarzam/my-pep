import React, { Component } from 'react';
import { CardColumns, Card } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import GithubPortrait from '../images/github-portrait.png';
import axios from 'axios';

export default class ProjectsGallery extends Component{
  constructor(){
    super()
    this.state = {
      projects: []
    }
  }
  async componentDidMount(){
    const url = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API_URI + '/api/works' : '/api/works';
    const response = await axios.get(url);
    const projectData = response.data;
    this.setState({
      projects: projectData
    });
  }
  
  render(){
    console.log(this.state)
    return (
      <div id="projects-gallery-container">
        <CardColumns>
          <Card>
            <div className="image-container">
              <Card.Img variant="top" src={GithubPortrait} />
            </div>
            <Card.Body>
              <Card.Title>Ayarza Manwaring</Card.Title>
              <Card.Text>
                Check out my{" "}
                <Nav.Link
                  className="colored-text"
                  href="https://github.com/ayarzam"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </Nav.Link>{" "}
                for my other coding projects!
              </Card.Text>
            </Card.Body>
          </Card>
          {this.state.projects.map((project) => {
            return (
              <Card key={project.id} className="project">
                <div className="image-container">
                  <Card.Img variant="top" src={project.img} />
                </div>
                <Nav.Link href={`/works/${project.id}/#${project.project_title.split(' ').join('-').toLowerCase()}`}>
                  <Card.ImgOverlay>
                    <Card.Title>{project.project_title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                  </Card.ImgOverlay>
                </Nav.Link>
              </Card>
            );
          })}
        </CardColumns>
      </div>
    );
  }
}
