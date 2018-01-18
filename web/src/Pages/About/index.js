// Base imports
import React, { Component } from 'react';

// CSS imports
import './index.css';

// Foreign component imports

// Media imports
import aboutDefualtBackgrnd from '../../Media/farmbackground.png'

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
      <div className="about" id="about-div" style={{ backgroundImage: `url(${aboutDefualtBackgrnd})` }}>
        <div className="aboutSectionTitle">
          About
        </div>
        <div className="aboutInfoSelector">
          <div className="aboutBioSelector" onClick={this.changeInfoOnClick.bind(this, "aboutBioSelector")}>
            Skills
          </div>
          <div className="aboutSkillsSelector" onClick={this.changeInfoOnClick.bind(this, "aboutSkillsSelector")}>Profile</div>
          <div className="aboutJobsSelector" onClick={this.changeInfoOnClick.bind(this, "aboutJobsSelector")}>Interests</div>
          <div className={this.state.selectionBarClassName} />
        </div>
        <div className="aboutContent">
          <div className={this.state.aboutSliderVisibleContent}>
            <div className="aboutBioContent">
              Expert understanding of HTML & CSS. Profficiency in JavaScript and some of it's most powerful libraries (i.e. React, Redux, Webpack).
            </div>
            <div className="aboutSkillsContent">
              My name is Anathi Mpilo Keswa. I’m a frontend software developer and aspiring full-stack software developer. I was born in State College, PA, and grew up in Johannesburg, South Africa where my family roots reside. My passions are community driven technologies, web & mobile development and design, and music. Growing up I became well acquainted with different kinds of technology, from coding to gadgets, and those experiences left an impression on me. In my free time you can find me working on small dev projects, polishing my coding skills, or making soundtracks. Though they began as casual interests in high school, together they’ve contributed to my breadth of experience and my capabilities as a developer.
            </div>
            <div className="aboutInterestsContent ">
              My gravitation to the musical arts is no secret to those who know me. When I'm not hacking you might find me learning guitar, working on my vocals, and/or producing tracks on my digital audio workspace. I grew up with an amazing and doting grandfather who, through introducing me to the piano, inspired my love for music. Besides music, my upbringing enstilled in me a sense of responsibilty to give back to my community- the reason for many hours spent with wonderful people at the Trenton Area Soup Kitchen.
            </div>
          </div>
        </div>
      </div>
    )

  }
}

export default About;