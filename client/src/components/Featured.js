import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

import { ReactComponent as BackgroundR } from '../images/svg/backgrounds/card-backgroundR.svg';
import { ReactComponent as BackgroundL } from '../images/svg/backgrounds/card-backgroundL.svg';
import { ReactComponent as Flower1 } from '../images/svg/decorations/plant_4.svg';
import { ReactComponent as Flower2 } from '../images/svg/decorations/plant_6.svg';
import { ReactComponent as Flower3 } from '../images/svg/decorations/plant_3.svg';
import { ReactComponent as Flower4 } from '../images/svg/decorations/plant_2.svg';

import MusicMapper from '../images/projects/MusicMapper/renders/Laptop_1.png';
import HikeWithMe from '../images/projects/HikeWithMe/renders/Mobile.png';
import IslandShopper from '../images/projects/IslandShopper/renders/Desktop.png';

export default class Featured extends Component {
    constructor() {
        super();

        this.scrollAppear = this.scrollAppear.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollAppear);
    }

    scrollAppear() {
        let content = document.querySelectorAll('.anim-rise, .anim-from-left, .anim-from-right');

        content.forEach( (item) => {
            let itemPosition = item.getBoundingClientRect().top;
            let screenPosition = window.innerHeight / 1.3;

            // console.log('screen: ',screenPosition,' , anim item: ',itemPosition)

            if (itemPosition < screenPosition) {
                item.classList.add('appear');
            }
        });
    }

    render() {
        return (
            <div id="featured-container">
                <div className="featured-text anim-rise">
                    <h2>Featured Works</h2>
                    <p>Web products that keep the user in mind</p>
                </div>
                <div className="featured-projects">
                    <Flower1 className="flower"></Flower1>
                    <div className="project">
                        <div className="card">
                            <Flower2 className="flower"></Flower2>
                            <div className="project-image">
                                <img alt="Music Mapper" src={MusicMapper} />
                            </div>
                            <div className="card-text anim-from-right">
                                <h3>Music Mapper</h3>
                                <p>An application to let Spotify users visualize their musical tastes!
                                <Nav.Link className="colored-text" href={`/works/1/#music-mapper`} > Learn More </Nav.Link>
                                </p>
                            </div>
                            <div className="background">
                                <div></div>
                                <BackgroundR className="dots"></BackgroundR>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <div className="card">
                            <Flower3 className="flower"></Flower3>
                            <div className="card-text anim-from-left">
                                <h3>Hike With Me</h3>
                                <p>A mobile app that allows users the ability to map the distance and area that they hike.
                                <Nav.Link className="colored-text" href={`/works/2/#hike-with-me`} > Learn More </Nav.Link>
                                </p>
                            </div>
                            <div className="project-image">
                                <img alt="Hike With Me" src={HikeWithMe} />
                            </div>
                            <div className="background">
                                <div></div>
                                <BackgroundL className="dots"></BackgroundL>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <div className="card">
                            <Flower4 className="flower"></Flower4>
                            <div className="project-image">
                                <img alt="Island Shopper" src={IslandShopper} />
                            </div>
                            <div className="card-text anim-from-right">
                                <h3>Island Shopper</h3>
                                <p>An e-commerce website that allows users to buy fictional islands.
                                <Nav.Link className="colored-text" href={`/works/3/#island-shopper`} > Learn More </Nav.Link>
                                </p>
                            </div>
                            <div className="background">
                                <div></div>
                                <BackgroundR className="dots"></BackgroundR>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="see-more">
                    <div className="card">
                        <h3 className="see-more-text anim-rise">
                            Want to see more? <Nav.Link href="/works" className="colored-text">Click Here!</Nav.Link>
                        </h3>
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