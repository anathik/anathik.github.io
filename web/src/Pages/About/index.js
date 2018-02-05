// Base imports
import React, { Component } from 'react';

// CSS imports
import './index.css';

// Foreign component imports

// Media imports
import aboutDefualtBackgrnd from '../../Media/farmbackground.png'
import ResponsiveIcon from '../../Components/ResponsiveIcon'
import profilePicture from '../../Media/anathi_selfie-colorized.jpg'

class About extends Component {
  // In this format a constructor is required. Make sure you understand why...
  constructor() {
    super();
    this.state = {
      // for controlling which section is visible
      currentAboutSection:"profile",
      skillsClass:"aboutSkills-profile",
      profileClass:"aboutProfile-profile",
      interestsClass:"aboutInterests-profile",
      
      // for indicating the current about section that ios visible
      skillsSelectorClass:"aboutSelector-skills",
      profileSelectorClass:"aboutSelector-profile-current",
      interestsSelectorClass:"aboutSelector-interests"
    };
  }

  translateContentOnClick( target ) {
    if (target !== this.state.currentAboutSection && target === "profile") {
      this.scrollToProfile();
    } else if (target !== this.state.currentAboutSection && target === "skills") {
      this.scrollToSkills();
    } else if (target !== this.state.currentAboutSection && target === "interests") {
      this.scrollToInterests();
    }
    console.log(this.state.currentAboutSection);
  }

  // Center view = translateX(-100%);
  scrollToProfile() {
    this.setState({ currentAboutSection:"profile" });
    this.setState({ skillsClass:"aboutSkills-profile" });
    this.setState({ profileClass:"aboutProfile-profile" });
    this.setState({ interestsClass:"aboutInterests-profile" });

    this.setState({ skillsSelectorClass:"aboutSelector-skills" });
    this.setState({ profileSelectorClass:"aboutSelector-profile-current" });
    this.setState({ interestsSelectorClass:"aboutSelector-interests" });
  }

  // Left-most view = translateX(none);
  scrollToSkills() {
    this.setState({ currentAboutSection:"skills" });
    this.setState({ skillsClass:"aboutSkills-skills" });
    this.setState({ profileClass:"aboutProfile-skills" });
    this.setState({ interestsClass:"aboutInterests-skills" });

    this.setState({ skillsSelectorClass:"aboutSelector-skills-current" });
    this.setState({ profileSelectorClass:"aboutSelector-profile" });
    this.setState({ interestsSelectorClass:"aboutSelector-interests" });
  }

  // Right-most view = translateX(-200%);
  scrollToInterests() {
    this.setState({ currentAboutSection:"interests" });
    this.setState({ skillsClass:"aboutSkills-interests" });
    this.setState({ profileClass:"aboutProfile-interests" });
    this.setState({ interestsClass:"aboutInterests-interests" });

    this.setState({ skillsSelectorClass:"aboutSelector-skills" });
    this.setState({ profileSelectorClass:"aboutSelector-profile" });
    this.setState({ interestsSelectorClass:"aboutSelector-interests-current" });
  }

  render() {
    const { welcomeText } = this.props;
    
    return ( 
      <div className="about" id="about-div">
        <div className="aboutSectionTitle">
          About
        </div>
        <div className="aboutContentSelector"> 
          <div className={this.state.skillsSelectorClass} onClick={this.translateContentOnClick.bind(this, "skills")}>SKILLS</div> 
          <div className={this.state.profileSelectorClass} onClick={this.translateContentOnClick.bind(this, "profile")}>PROFILE</div>
          <div className={this.state.interestsSelectorClass} onClick={this.translateContentOnClick.bind(this, "")}>INTERESTS</div>
        </div>
        <div className="aboutSectionContent-1">
          <div className={ this.state.skillsClass }>
            <div className="skillsContentContainer">
              <div className="skillsContentLeft">
                <div className="skillIcons" id="HTML5">HTML5</div>
                <div className="skillIcons" id="CSS3">CSS3</div>
                <div className="skillIcons" id="Js">Js</div>
                <div className="skillIcons" id="Java">Java</div>
                <div className="skillIcons" id="iOS11">iOS11</div>
                <div className="skillIcons" id="Swift4">Swift4</div>
              </div>
              <div className="skillsContentRight"></div>
            </div>
          </div>
          <div className={ this.state.profileClass }>
            <div className="profile-leftSection"> 
              <div className="profile-pictureCircle" style={{ backgroundImage: `url(${ profilePicture })`}}/>
              <div className="profile-basicInfo">
                <div className="profile-basicInfo-name">
                  <span>ANATHI KESWA,</span>
                  <span id="name2ndStyle"> SOFTWARE DEVELOPER</span>
                </div>
                <div className="profile-basicInfo-birthdate">
                  Born February 26th, 1997
                </div>
                <div className="profile-basicInfo-birthplace">
                  New York, NY
                </div>
              </div>
            </div>
            <div className="profile-rightSection"> 
              <div className="leftRightDivider"/>
              <div className="profile-articleRegion">
                <div className="profile-articleRegion-column1">
                  <span className="column-heading" id="heading1">Introduction</span>
                  <span className="column-text" id="part-1">I was born in State College, PA to a South African family. My father and oldest brother were the two people in my life that inspired me to explore Computer Science. Even as a kid I had a passion for imaginative creation: from legos and blanket-forts to enormous minecraft structures and carpentry projects. Soon enough I built my very first web application with just HTML/CSS. It wasn't much, but it was clear to me then that I wanted to learn everything there was to web development and software.</span>
                </div>
                <div className="profile-articleRegion-column2">
                  <span className="column-heading" id="heading2">Motivations</span>
                  <span className="column-text" id="part-2">Throughout my tenure as a developer I've faced a number of challanges. Some challanges forcing me to question whether or not the developer profession was for me. Questions like these often get the best of growing developers. No matter how grave the contemplations were, however, the allure of building impactful and beautiful applications always brought me back every single time. In hindsight the biggest issues I've had, code or not, have always been the most fullfiling and satisfying to overcome - and right now there's nothing I'd rather be doing. It's what I live for.</span>
                </div>
                <div className="profile-articleRegion-column3">
                  <span className="column-heading" id="heading3">Community</span>
                  <span className="column-text" id="part-2">As a K-12 student I was isolated and tended to mix with kids who not only didn't value my friendship or wellbeing, but even encouraged my immaturity and poor working habits. However, looking back on those days strengthens my resolve to become a better person and developer. In the years following highschool I was introduced to the Computer Science community through attending hackathons. I was welcomed with open arms into an atmosphere that valued diversity and inspired creativity. In return, I've strived to become more involed in the industry.</span>
                </div>
              </div>
            </div>
          </div>
          <div className={ this.state.interestsClass }>
            Interests
          </div>
        </div>
       
            
      </div>
    )

  }
}

export default About;