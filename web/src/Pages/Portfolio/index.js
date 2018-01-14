// Base imports
import React, { Component } from 'react';

// CSS imports
import './index.css';

// Foreign component imports

// Media imports
import anathiPicture from '../../Media/anathi_transparent_png.png'

class Portfolio extends Component {
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
      <div className="portfolio" id="portfolio-div">
        <div className="portfolioSectionTitle">
          Portfolio
        </div>
        <div className="portfolioDisplay">
          <div className="projectMenu">
          </div>
          <div className="projectMenuDivider">
          </div>
          <div className="projectContentWindow">
            <div className="projectMediaCarousel">
            No media available.
            </div>
            <div className="projectDiscription">
            </div>
          </div>
          <div className="projectDetailsSection">
          </div>
        </div>
        </div>
    )

  }
}

export default Portfolio;