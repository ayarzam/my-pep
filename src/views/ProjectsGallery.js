import React, { Component } from 'react';
import { CardColumns, Card } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
    const response = await axios.get('/api/works')
    const projectData = response.data;
    this.setState({
      projects: projectData
    });
  }
  
  render(){
    if(!this.state.projects){
      this.state.projects =[]
    }
    console.log(this.state)
    return(
      <div id="projects-gallery-container">
        <CardColumns>
          <Card>
            <div className="image-container">
              <Card.Img variant="top" src={GithubPortrait} />
            </div>
            <Card.Body>
              <Card.Title>Ayarza Manwaring</Card.Title>
              <Card.Text>
                Check out my <Nav.Link className="colored-text" href="https://github.com/ayarzam">Github</Nav.Link> for my other coding projects!
              </Card.Text>
            </Card.Body>
          </Card>
            {
              this.state.projects.map(project =>{
                return(
                  <Card key={project.id}className="project">
            <div className="image-container">
              <Card.Img variant="top" src={project.img} />
            </div>
            <Link to={`/works/${project.id}`}>
              <Card.ImgOverlay>
                <Card.Title>{project.project_title}</Card.Title>
                <Card.Text>
                 {project.description}
                </Card.Text>
              </Card.ImgOverlay>
            </Link>
          </Card> 
                )
              })
            }
         
        </CardColumns>
      </div>
    )
  }
}
