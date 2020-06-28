import React, { Component } from 'react';
import {Container, Col, Row } from 'react-bootstrap';

export default class Projects extends Component {
  render() {
    return (
      <Container id="projects">
        <Row className="projectsRow">
          <Col className="projectsCol" sm="12" md="6" lg="4" xl="4">
            <div className="individual">
              <img
                className="projectsImg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjYdir4W4R7Wy0pwAMxNTfRfxdsCoLViVeueRqeEuwk0zYo1Ox"
                alt="Project One"
              />
              <div className="description">
                <h3>Island Shopper</h3>
                <p>Description</p>
                <a href="https://yachtshopper.herokuapp.com/">
                  Deployed Site
                </a>
                <br></br>
                <a href="https://github.com/yachtworld/yachtshopper">
                  Github Repository
                </a>
              </div>
            </div>
            <br></br>
          </Col>{/* .projectsCol */}
          <Col className="projectsCol" sm="12" md="6" lg="4" xl="4">
            <div className="individual">
              <img
                className="projectsImg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjYdir4W4R7Wy0pwAMxNTfRfxdsCoLViVeueRqeEuwk0zYo1Ox"
                alt="Project Two"
              />
              <div className="description">
                <h3>Hike With Me</h3>
                <p>Description</p>
                <a href="https://github.com/ayarzam/HikeWithMe">
                  Github Repository
                </a>
              </div>
            </div>
            <br></br>
          </Col>{/* .projectsCol */}
          <Col className="projectsCol" sm="12" md="6" lg="4" xl="4">
            <div className="individual">
              <img
                className="projectsImg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjYdir4W4R7Wy0pwAMxNTfRfxdsCoLViVeueRqeEuwk0zYo1Ox"
                alt="Project Three"
              />
              <div className="description">
                <h3>Music Mapper</h3>
                <p>Description</p>
                <a href="https://spotify-music-mapper.herokuapp.com/">
                  Deployed Site
                </a>
                <br></br>
                <a href="https://github.com/music-mapper/music-mapper">
                  Github Repository
                </a>
              </div>
            </div>
            <br></br>
          </Col>{/* .projectsCol */}
          <Col className="projectsCol" sm="12" md="6" lg="4" xl="4">
            <div className="individual">
              <img
                className="projectsImg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjYdir4W4R7Wy0pwAMxNTfRfxdsCoLViVeueRqeEuwk0zYo1Ox"
                alt="Project Four"
              />
              <div className="description">
                <h3>Nodejs Card Game</h3>
                <p>Description</p>
                <a href="https://github.com/ayarzam/card_game">
                  Github Repository
                </a>
              </div>
            </div>
          </Col>{/* .projectsCol */}
        </Row>{/* .projectsRow */}
        <div className='back-to-top'>
          (End of Portfolio) <a href='#navbar'>Back To The Top &uarr;</a>
        </div>
      </Container>
    );
  }
}