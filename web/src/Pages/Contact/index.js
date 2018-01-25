// Base imports
import React, { Component } from 'react';

// CSS imports
import './index.css';

// Foreign component imports

// Media imports
import contactBackground from '../../Media/gradientNYC.png'

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
      <div className="contact" id="contact-div" style={{ backgroundImage: `url(${contactBackground})` }}>
        <div className="contactSectionTitle">
          Contact
        </div>
        <div className="contactForm">
          <form action="https://formspree.io/me@anathi.io" method="POST">
            <div className="contactFormHeader">
              Fill this form for some saucy collaboration.
            </div>
            <input type="text" id="fname" name="name" placeholder="Name / Organization" />
            <input type="email" id="lname" name="_replyto" placeholder="Email" />
            <input type="text" id="lname" name="_body" placeholder="Leave a message..." />
            <input type="hidden" name="_next" value="anathi.io" />
            <input type="submit" value="Send" />
          </form>
        </div>
        <div className="black-fade" />
      </div>
    )

  }
}

export default Contact;