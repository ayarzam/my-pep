import React, { Component } from 'react';
import { CardColumns, Card } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GithubPortrait from '../images/github-portrait.png';
import axios from 'axios';
// import SinglePageView from './SinglePageView'

export default class Main extends Component{
  constructor(){
    super()
    this.state = {
      projects: []
    }
  }
  async componentDidMount(){
    // const url = process.env.NODE_ENV === 'production' ? 'postgres://qewokqmafwhpsi:83c56c603c58423afc7363a72c0fadc3dec1a0b2c83557bb3ef00ae8e77b64b5@ec2-54-165-36-134.compute-1.amazonaws.com:5432/d6rq70ovn76n2c' : process.env.REACT_APP_API_URL;
    const response = await axios.get(`/api/works`)
    console.log(response)
    const projectData = response.data;
    console.log(projectData)
    this.setState({
      projects: projectData
    })
  }
  
  render(){
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
