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
            Profile
          </div>
          <div className="aboutSkillsSelector" onClick={this.changeInfoOnClick.bind(this, "aboutSkillsSelector")}>Skills</div>
          <div className="aboutJobsSelector" onClick={this.changeInfoOnClick.bind(this, "aboutJobsSelector")}>Interests</div>
          <div className={this.state.selectionBarClassName} />
        </div>
        <div className="aboutContent">
          <div className={this.state.aboutSliderVisibleContent}>
            <div className="aboutBioContent">
              My name is Anathi Mpilo Keswa. I’m a frontend software developer and aspiring full-stack software developer. I was born in State College, PA, and grew up in Johannesburg, South Africa where my family roots reside. My passions are community driven technologies, web & mobile development and design, and music. Growing up I became well acquainted with different kinds of technology, from coding to gadgets, and those experiences left an impression on me. In my free time you can find me working on small dev projects, polishing my coding skills, or making soundtracks. Though they began as casual interests in high school, together they’ve contributed to my breadth of experience and my capabilities as a developer.
            </div>
            <div className="aboutSkillsContent">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="aboutInterestsContent ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
      </div>
    )

  }
}

export default About;