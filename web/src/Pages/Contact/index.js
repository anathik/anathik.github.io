// Base imports
import React, { Component } from 'react';

// CSS imports
import './index.css';

// Foreign component imports

// Media imports
import anathiPicture from '../../Media/anathi_transparent_png.png'

class Contact extends Component {
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
      <div className="contact" id="contact-div">
        <div className="contactSectionTitle">
          Contact
        </div>
        <div className="contactForm">
          <form action="/action_page.php">
            <div className="contactFormHeader">
              Fill this form for some saucy collaboration.
            </div>
            <input type="text" id="fname" name="firstname" placeholder="Name / Organization" />
            <input type="text" id="lname" name="lastname" placeholder="Email" />
            <input type="text" id="lname" name="lastname" placeholder="Leave a message..." />          
            <input type="submit" value="Submit" />
          </form>
        </div>
        </div>
    )

  }
}

export default Contact;