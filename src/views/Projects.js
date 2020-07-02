import React, { Component } from 'react';
import { CardColumns, Card } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import GithubPortrait from '../images/github-portrait.png';

export default class Projects extends Component {
  render() {
    return (
      <div id="projects-container">
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
          
          <Card className="project">
            <div className="image-container">
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjYdir4W4R7Wy0pwAMxNTfRfxdsCoLViVeueRqeEuwk0zYo1Ox" />
            </div>
            <Link to="/">
              <Card.ImgOverlay>
                <Card.Title>Music Mapper</Card.Title>
                <Card.Text>
                  An application to let Spotify users visualize their musical tastes!
                </Card.Text>
              </Card.ImgOverlay>
            </Link>
          </Card>
          <Card className="project">
            <div className="image-container">
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjYdir4W4R7Wy0pwAMxNTfRfxdsCoLViVeueRqeEuwk0zYo1Ox" />
            </div>
            <Link to="/">
              <Card.ImgOverlay>
                <Card.Title>Hike With Me</Card.Title>
                <Card.Text>
                  A mobile app that allows users the ability to map the distance and area that they hike.
                </Card.Text>
              </Card.ImgOverlay>
            </Link>
          </Card>
          <Card className="project">
            <div className="image-container">
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjYdir4W4R7Wy0pwAMxNTfRfxdsCoLViVeueRqeEuwk0zYo1Ox" />
            </div>
            <Link to="/">
              <Card.ImgOverlay>
                <Card.Title>Island Shopper</Card.Title>
                <Card.Text>
                  An e-commerce website that allows users to buy fictional islands.
                </Card.Text>
              </Card.ImgOverlay>
            </Link>
          </Card>
          <Card className="project">
            <div className="image-container">
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjYdir4W4R7Wy0pwAMxNTfRfxdsCoLViVeueRqeEuwk0zYo1Ox" />
            </div>
            <Link to="/">
              <Card.ImgOverlay>
                <Card.Title>Nodejs Card Game</Card.Title>
                <Card.Text>
                  Add some description here
                </Card.Text>
              </Card.ImgOverlay>
            </Link>
          </Card>
        </CardColumns>
      </div>

      // <Container id="projects">
      //   <Row className="projectsRow">
      //     <Col className="projectsCol" sm="12" md="6" lg="4" xl="4">
      //       <div className="individual">
      //         <img
      //           className="projectsImg"
      //           src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjYdir4W4R7Wy0pwAMxNTfRfxdsCoLViVeueRqeEuwk0zYo1Ox"
      //           alt="Project One"
      //         />
      //         <div className="description">
      //           <h3>Island Shopper</h3>
      //           <p>Description</p>
      //           <a href="https://yachtshopper.herokuapp.com/">
      //             Deployed Site
      //           </a>
      //           <br></br>
      //           <a href="https://github.com/yachtworld/yachtshopper">
      //             Github Repository
      //           </a>
      //         </div>
      //       </div>
      //       <br></br>
      //     </Col>{/* .projectsCol */}
      //     <Col className="projectsCol" sm="12" md="6" lg="4" xl="4">
      //       <div className="individual">
      //         <img
      //           className="projectsImg"
      //           src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjYdir4W4R7Wy0pwAMxNTfRfxdsCoLViVeueRqeEuwk0zYo1Ox"
      //           alt="Project Two"
      //         />
      //         <div className="description">
      //           <h3>Hike With Me</h3>
      //           <p>Description</p>
      //           <a href="https://github.com/ayarzam/HikeWithMe">
      //             Github Repository
      //           </a>
      //         </div>
      //       </div>
      //       <br></br>
      //     </Col>{/* .projectsCol */}
      //     <Col className="projectsCol" sm="12" md="6" lg="4" xl="4">
      //       <div className="individual">
      //         <img
      //           className="projectsImg"
      //           src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjYdir4W4R7Wy0pwAMxNTfRfxdsCoLViVeueRqeEuwk0zYo1Ox"
      //           alt="Project Three"
      //         />
      //         <div className="description">
      //           <h3>Music Mapper</h3>
      //           <p>Description</p>
      //           <a href="https://spotify-music-mapper.herokuapp.com/">
      //             Deployed Site
      //           </a>
      //           <br></br>
      //           <a href="https://github.com/music-mapper/music-mapper">
      //             Github Repository
      //           </a>
      //         </div>
      //       </div>
      //       <br></br>
      //     </Col>{/* .projectsCol */}
      //     <Col className="projectsCol" sm="12" md="6" lg="4" xl="4">
      //       <div className="individual">
      //         <img
      //           className="projectsImg"
      //           src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjYdir4W4R7Wy0pwAMxNTfRfxdsCoLViVeueRqeEuwk0zYo1Ox"
      //           alt="Project Four"
      //         />
      //         <div className="description">
      //           <h3>Nodejs Card Game</h3>
      //           <p>Description</p>
      //           <a href="https://github.com/ayarzam/card_game">
      //             Github Repository
      //           </a>
      //         </div>
      //       </div>
      //     </Col>{/* .projectsCol */}
      //   </Row>{/* .projectsRow */}
      //   <div className='back-to-top'>
      //     (End of Portfolio) <a href='#navbar'>Back To The Top &uarr;</a>
      //   </div>
      // </Container>
    );
  }
}