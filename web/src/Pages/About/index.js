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
      currentInfoSelector:"aboutSkillsSelector",
      selectionBarClassName:"aboutInfoSelectorBar",
      aboutSliderVisibleContent:"aboutSlider"
    };
  }

  changeSelectorOnClick() {
    if (this.state.currentInfoSelector === "aboutSkillsSelector") {
      this.setState({selectionBarClassName: "aboutInfoSelectorBar"});
      this.setState({aboutSliderVisibleContent: "aboutSlider"});
    } else if (this.state.currentInfoSelector === "aboutBioSelector") {
      this.setState({selectionBarClassName: "aboutInfoSelectorBar-bio"});
      this.setState({aboutSliderVisibleContent: "aboutSlider-bio"});
    } else if (this.state.currentInfoSelector === "aboutJobsSelector") {
      this.setState({selectionBarClassName: "aboutInfoSelectorBar-jobs"});
      this.setState({aboutSliderVisibleContent: "aboutSlider-interests"});
    }
  }

  changeInfoOnClick(className) {
    if (className !== this.state.currentInfoSelector) {
      this.state.currentInfoSelector = className;
      console.log(this.state.currentInfoSelector);
      this.changeSelectorOnClick();
    } else {
      console.log("The state has not changed!");
    }
  }

  render() {
    const { welcomeText } = this.props;
    
    return ( 
      <div className="about" id="about-div">
        <div className="aboutSectionTitle">
          About
        </div>
        <div className="aboutConditionalMedia" />
        <div className="aboutInfoSelector">
          <div className="aboutBioSelector" onClick={this.changeInfoOnClick.bind(this, "aboutBioSelector")}>
            Bio
          </div>
          <div className="aboutSkillsSelector" onClick={this.changeInfoOnClick.bind(this, "aboutSkillsSelector")}>Skills</div>
          <div className="aboutJobsSelector" onClick={this.changeInfoOnClick.bind(this, "aboutJobsSelector")}>Interests</div>
          <div className={this.state.selectionBarClassName} />
        </div>
        <div className="aboutContent">
          <div className={this.state.aboutSliderVisibleContent}>
            <div className="aboutBioContent">
              Oh hi mawrk!
            </div>
            <div className="aboutSkillsContent">
              These are my skills. Just blank.
            </div>
            <div className="aboutInterestsContent ">
              This is my interest- he color black...
            </div>
          </div>
        </div>
      </div>
    )

  }
}

export default About;