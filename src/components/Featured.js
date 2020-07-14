import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as BackgroundR } from '../images/svg/backgrounds/card-backgroundR.svg';
import { ReactComponent as BackgroundL } from '../images/svg/backgrounds/card-backgroundL.svg';
import { ReactComponent as Flower1 } from '../images/svg/decorations/plant_5.svg';
import { ReactComponent as Flower2 } from '../images/svg/decorations/plant_4.svg';
import { ReactComponent as Flower3 } from '../images/svg/decorations/plant_6.svg';
import { ReactComponent as Flower4 } from '../images/svg/decorations/plant_3.svg';
import { ReactComponent as Flower5 } from '../images/svg/decorations/plant_2.svg';

import MusicMapper from '../images/projects/MusicMapper/renders/Laptop_1.png';
import HikeWithMe from '../images/projects/HikeWithMe/renders/Mobile.png';
import IslandShopper from '../images/projects/IslandShopper/renders/Desktop.png';

export default class Featured extends Component {
    render() {
        return (
            <div id="featured-container">
                <div className="featured-text">
                    <Flower1 className="flower"></Flower1>
                    <h2>Featured Works</h2>
                    <p>Web products that keep the user in mind</p>
                </div>
                <div className="featured-projects">
                    <div className="project">
                        <Flower2 className="flower"></Flower2>
                        <div className="card">
                            <Flower3 className="flower"></Flower3>
                            <div className="project-image">
                                <img alt="Music Mapper" src={MusicMapper} />
                            </div>
                            <div className="card-text">
                                <div>Music Mapper</div>
                                <div>An application to let Spotify users visualize their musical tastes!</div>
                            </div>
                            <div className="background">
                                <BackgroundR className="dots"></BackgroundR>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <div className="card">
                            <Flower4 className="flower"></Flower4>
                            <div className="card-text">
                                <div>Hike With Me</div>
                                <div>A mobile app that allows users the ability to map the distance and area that they hike.</div>
                            </div>
                            <div className="project-image">
                                <img alt="Hike With Me" src={HikeWithMe} />
                            </div>
                            <div className="background">
                                <BackgroundL className="dots"></BackgroundL>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <div className="card">
                            <Flower5 className="flower"></Flower5>
                            <div className="project-image">
                                <img alt="Island Shopper" src={IslandShopper} />
                            </div>
                            <div className="card-text">
                                <div>Island Shopper</div>
                                <div>An e-commerce website that allows users to buy fictional islands.</div>
                            </div>
                            <div className="background">
                                <BackgroundR className="dots"></BackgroundR>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="see-more">
                    <div className="card">
                        <div className="see-more-text">
                            Want to see more? <Link to="/works" className="colored-text">Click Here!</Link>
                        </div>
                        <div className="background">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}