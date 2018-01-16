// Base imports
import React, { Component } from 'react';

// CSS imports
import './index.css';

// Foreign component imports

// Media imports
import questApparel1 from '../../Media/quest-apparel-placeholder.png'

class Portfolio extends Component {
  // In this format a constructor is required. Make sure you understand why...
  constructor() {
    super();
    this.state = {
      currentProject:"QuestApparel",
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
    let currentProject = this.props.currentProject;
    
    return ( 
      <div className="portfolio" id="portfolio-div">
        <div className="portfolioSectionTitle">
          Portfolio
        </div>
        <div className="portfolioDisplay">
          <div className="projectContentWindow">
            <div className="projectMediaCarousel" style={{ backgroundImage: `url(${questApparel1})` }}/>
            <div className="projectDiscription">
              <div className="projectCurrentTitle"> Quest Apparel </div>
              <div className="projectCurrentBody"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>
            </div>
          </div>
          <div className="projectDetailsSection">
            <div className="projectDetail">
              <div className="projectDetailSection">Catagory</div>
              <div className="projectDetailSectionContent">Web</div>
            </div>
            <div className="projectDetail">
              <div className="projectDetailSection">Technology</div>
              <div className="projectDetailSectionContent">React | HTML & CSS</div>
            </div>
            <div className="projectDetail">
              <div className="projectDetailSection">Date</div>
              <div className="projectDetailSectionContent">Summer 2017</div>
            </div>
            <div className="projectDetail">
              <div className="projectDetailSection">Credits</div>
              <div className="projectDetailSectionContent">Khanya Keswa - Media</div>
            </div>
            <div className="projectDetail">
              <div className="projectDetailSection">Link</div>
              <div className="projectDetailSectionContent">livequestapparel.co</div>
            </div>
          </div>
        </div>
        </div>
    )

  }
}

export default Portfolio;