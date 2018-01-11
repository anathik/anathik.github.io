// Base imports
import React, { Component } from 'react';

// CSS imports
import './index.css';

// Foreign component imports

// Media imports
import anathiPicture from '../../Media/anathi_transparent_png.png'

class About extends Component {
  // In this format a constructor is required. Make sure you understand why...
  constructor() {
    super();
    this.state = {
      someState: "its just an example, dude",
    };
  }

  render() {
    const { welcomeText } = this.props;
    return ( 
      <div className="about" id="about-div">
        <div className="aboutSectionTitle">
          About
        </div>
        <div className="aboutConditionalMedia" />
        <div className="aboutInfoSelector" />
        <div className="aboutContent">
          <div className="aboutBio">
          </div>
          <div className="aboutSkills">
          </div>
          <div className="aboutExperiences">
          </div>
        </div>
      </div>
    )

  }
}

export default About;