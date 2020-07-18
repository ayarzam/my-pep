import React, { Component }  from 'react';
import myResume from '../images/AyarzaManwaringResume-1.jpg'
import { Nav } from 'react-bootstrap';
import { FaFileDownload } from 'react-icons/fa';


export default class Resume extends Component {
  render(){
    return(
      <div id="resume-container">
        <div className="resume-container-img">
        <img src={myResume} alt='resume' />
        <div className="resume-container-link">
          <Nav.Link href='https://www.dropbox.com/s/rxa3ea3xrdbfb1x/AyarzaManwaringResume.pdf?dl=0'>
            <FaFileDownload />
              <span>Download a copy of my resume</span>
          </Nav.Link>
        </div>
      </div>
      </div>
      
    )
  }
}