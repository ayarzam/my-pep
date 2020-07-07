import React, { Component } from 'react';
import { CardColumns, Card } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import GithubPortrait from '../images/github-portrait.png';
import MusicMapper from '../images/projects/MusicMapper/renders/Laptop_1.png';
import HikeWithMe from '../images/projects/HikeWithMe/renders/Mobile.png';
import IslandShopper from '../images/projects/IslandShopper/renders/Desktop.png';
import PlayingCard from "../images/playing_card.png"

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
              <Card.Img variant="top" src={MusicMapper} />
            </div>
            <Link to="/">
              <Card.ImgOverlay>
                <Card.Title>Music Mapper</Card.Title>
                <Card.Text>
                  Fullstack Engineer - Team Prokect {<br />}
                  An application to let Spotify users visualize their musical tastes!{<br />}
                  Frontend Technologies: React, Redux, D3js{<br />}
                  Backend Technologies: Node, Express, OAUTH{<br />}
                  Testing Suite: Mocha, Chai
                </Card.Text>
              </Card.ImgOverlay>
            </Link>
          </Card>
          <Card className="project">
            <div className="image-container">
              <Card.Img variant="top" src={HikeWithMe} />
            </div>
            <Link to="/">
              <Card.ImgOverlay>
                <Card.Title>Hike With Me</Card.Title>
                <Card.Text>
                  Sole Fullstack Engineer {<br />}
                  A mobile app that allows users the ability to map the distance and area that they hike.{<br />}
                  Frontend Technologies: React Native, CSS{<br />}
                  Backend Technologies: Firebase and Firestore
                </Card.Text>
              </Card.ImgOverlay>
            </Link>
          </Card>
          <Card className="project">
            <div className="image-container">
              <Card.Img variant="top" src={IslandShopper} />
            </div>
            <Link to="/">
              <Card.ImgOverlay>
                <Card.Title>Island Shopper</Card.Title>
                <Card.Text>
                  Fullstack Engineer - Team Project {<br />}
                  An e-commerce website that allows users to buy fictional islands.{<br />}
                  Frontend Technologies: React, Redux {<br />}
                  Backend/Server side Technologies: Nodejs, Express and Sequelize {<br />}
                  Testing Suite: Mocha and Chai
                </Card.Text>
              </Card.ImgOverlay>
            </Link>
          </Card>
          <Card className="project">
            <div className="image-container">
              <Card.Img variant="top" src={PlayingCard} />
            </div>
            <Link to="/">
              <Card.ImgOverlay>
                <Card.Title>Nodejs Card Game</Card.Title>
                <Card.Text>
                  Sole Developer {<br />}
                  A backend mocking of a poker game{<br />}
                  Technologies: Node, Express {<br />}
                  Testing Suite: Mocha, Chai, Jest
                </Card.Text>
              </Card.ImgOverlay>
            </Link>
          </Card>
        </CardColumns>
      </div>

      //             Deployed Site
      //           <a href="https://yachtshopper.herokuapp.com/">
      //             Github Repository
      //           <a href="https://github.com/yachtworld/yachtshopper">

      //             Github Repository
      //           <a href="https://github.com/ayarzam/HikeWithMe">

      //             Deployed Site
      //           <a href="https://spotify-music-mapper.herokuapp.com/">
      //             Github Repository
      //           <a href="https://github.com/music-mapper/music-mapper">

      //             Github Repository
      //           <a href="https://github.com/ayarzam/card_game">
    );
  }
}