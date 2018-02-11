// Base imports
import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';

// CSS imports
import './index.css';

// Foreign component imports

// Media imports
import theFarmImage from '../../Media/farmbackground.png'
import ResponsiveIcon from '../../Components/ResponsiveIcon'
import profilePicture from '../../Media/anathi_selfie-colorized.jpg'

class About extends Component {
  // In this format a constructor is required. Make sure you understand why...
  constructor() {
    super();
    this.state = {
      // for controlling which section is visible
      currentAboutSection:"skills",
      skillsClass:"aboutSkills-skills",
      profileClass:"aboutProfile-skills",
      interestsClass:"aboutInterests-skills",
      
      // for indicating the current about section that ios visible
      skillsSelectorClass:"aboutSelector-skills-current",
      profileSelectorClass:"aboutSelector-profile",
      interestsSelectorClass:"aboutSelector-interests",

      // for skill background text
      currentSkillText:""
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


  scrollToPortfolioOnClick() {
    scrollToComponent(document.getElementById('portfolio-div'), {
      offset: 0,
      align: 'top',
      duration: 750
    });
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

  showSkillBackgroundOnHover( skillname ) {
    if ( skillname === "HTML5" ) {
      this.setState({currentSkillText: "5 years mastery. It's a technology that I'm super comfortable with."});
    } else if ( skillname === "CSS3" ) {
      this.setState({currentSkillText: "5 years mastery. My favorite part of the stack with which I can make anything look pretty."});
    } else if ( skillname === "Js" ) {
      this.setState({currentSkillText: "5 years mastery. My apps would likely be pretty boring (even slow) without it... so thanks for that."});
    } else if ( skillname === "Java" ) {
      this.setState({currentSkillText: "4 years mastery. Not sure if the headaches were worth it yet, but there will surely be more. Ongoing love-hate relationship."});
    } else if ( skillname === "iOS11" ) {
      this.setState({currentSkillText: "3 months experience."});
    } else if ( skillname === "Swift4" ) {
      this.setState({currentSkillText: "3 months experience."});
    }
  }
  hideSkillBackgroundOnLeave() {
    this.setState({currentSkillText: ""});
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
          {/* <div className={this.state.interestsSelectorClass} onClick={this.translateContentOnClick.bind(this, "interests")}>INTERESTS</div> */}
        </div>
        <div className="aboutSectionContent-1">
          <div className={ this.state.skillsClass }>
            <div className="skillsContentContainer">
              <div className="skillsProfficiencyLegend"> 
                <div className="highProficiency">ADVANCED</div>
                <div className="proficiencyGradientScale"></div>
                <div className="lowProficiency">BEGINNER</div>
              </div>
              <div className="skillsContentLeft">
                <div className="skillIcons" id="Advanced1" onMouseOver={this.showSkillBackgroundOnHover.bind(this, "HTML5")} onMouseLeave={this.hideSkillBackgroundOnLeave.bind(this)}>
                  <div className="skillname">HTML5</div>
                  <div className="skillyears">5 years</div>
                </div>
                <div className="skillIcons" id="Advanced1" onMouseOver={this.showSkillBackgroundOnHover.bind(this, "CSS3")} onMouseLeave={this.hideSkillBackgroundOnLeave.bind(this)}>
                  <div className="skillname">CSS3</div>
                  <div className="skillyears">5 years</div>
                </div>
                <div className="skillIcons" id="Advanced1" onMouseOver={this.showSkillBackgroundOnHover.bind(this, "Js")} onMouseLeave={this.hideSkillBackgroundOnLeave.bind(this)}>
                  <div className="skillname">XML</div>
                  <div className="skillyears">5 years</div>
                </div>
                <div className="skillIcons" id="Advanced2" onMouseOver={this.showSkillBackgroundOnHover.bind(this, "Java")} onMouseLeave={this.hideSkillBackgroundOnLeave.bind(this)}>
                  <div className="skillname">Java</div>
                  <div className="skillyears">4 years</div>
                </div>
                <div className="skillIcons" id="Advanced2" onMouseOver={this.showSkillBackgroundOnHover.bind(this, "iOS11")} onMouseLeave={this.hideSkillBackgroundOnLeave.bind(this)}>
                  <div className="skillname">iOS11</div>
                  <div className="skillyears">1 year</div>
                </div>
                <div className="skillIcons" id="Advanced2" onMouseOver={this.showSkillBackgroundOnHover.bind(this, "Swift4")} onMouseLeave={this.hideSkillBackgroundOnLeave.bind(this)}>
                  <div className="skillname">Swift4</div>
                  <div className="skillyears">1 year</div>
                </div>
              </div>
              <div className="skillsContentLeft">
                <div className="skillIcons" id="Advanced1" onMouseOver={this.showSkillBackgroundOnHover.bind(this, "HTML5")} onMouseLeave={this.hideSkillBackgroundOnLeave.bind(this)}>
                  <div className="skillname">JavaScript</div>
                  <div className="skillyears">5 years</div>
                </div>
                <div className="skillIcons" id="Advanced1" onMouseOver={this.showSkillBackgroundOnHover.bind(this, "CSS3")} onMouseLeave={this.hideSkillBackgroundOnLeave.bind(this)}>
                  <div className="skillname">React</div>
                  <div className="skillyears">3 years</div>
                </div>
                <div className="skillIcons" id="Advanced2" onMouseOver={this.showSkillBackgroundOnHover.bind(this, "Js")} onMouseLeave={this.hideSkillBackgroundOnLeave.bind(this)}>
                  <div className="skillname">Node.js</div>
                  <div className="skillyears">2 years</div>
                </div>
                <div className="skillIcons" id="Advanced2" onMouseOver={this.showSkillBackgroundOnHover.bind(this, "Java")} onMouseLeave={this.hideSkillBackgroundOnLeave.bind(this)}>
                  <div className="skillname">Docker</div>
                  <div className="skillyears">4 years</div>
                </div>
                <div className="skillIcons" id="Advanced2" onMouseOver={this.showSkillBackgroundOnHover.bind(this, "iOS11")} onMouseLeave={this.hideSkillBackgroundOnLeave.bind(this)}>
                  <div className="skillname">Android</div>
                  <div className="skillyears">2 years</div>
                </div>
                <div className="skillIcons" id="Advanced3" onMouseOver={this.showSkillBackgroundOnHover.bind(this, "Swift4")} onMouseLeave={this.hideSkillBackgroundOnLeave.bind(this)}>
                  <div className="skillname">Go</div>
                  <div className="skillyears">1 year</div>
                </div>
              </div>
              <div className="skillsContentLeft">
                <div className="skillIcons" id="Advanced1" onMouseOver={this.showSkillBackgroundOnHover.bind(this, "HTML5")} onMouseLeave={this.hideSkillBackgroundOnLeave.bind(this)}>
                  <div className="skillname">Sketch</div>
                  <div className="skillyears">1 year</div>
                </div>
                <div className="skillIcons" id="Advanced2" onMouseOver={this.showSkillBackgroundOnHover.bind(this, "CSS3")} onMouseLeave={this.hideSkillBackgroundOnLeave.bind(this)}>
                  <div className="skillname">Webpack</div>
                  <div className="skillyears">3 years</div>
                </div>
                <div className="skillIcons" id="Advanced2" onMouseOver={this.showSkillBackgroundOnHover.bind(this, "Js")} onMouseLeave={this.hideSkillBackgroundOnLeave.bind(this)}>
                  <div className="skillname">Illustrator</div>
                  <div className="skillyears">1 year</div>
                </div>
                <div className="skillIcons" id="Advanced3" onMouseOver={this.showSkillBackgroundOnHover.bind(this, "Java")} onMouseLeave={this.hideSkillBackgroundOnLeave.bind(this)}>
                  <div className="skillname">Photoshop</div>
                  <div className="skillyears">1 year</div>
                </div>
                <div className="skillIcons" id="Advanced3" onMouseOver={this.showSkillBackgroundOnHover.bind(this, "iOS11")} onMouseLeave={this.hideSkillBackgroundOnLeave.bind(this)}>
                  <div className="skillname">XML</div>
                  <div className="skillyears">1 year</div>
                </div>
                <div className="skillIcons" id="Advanced3" onMouseOver={this.showSkillBackgroundOnHover.bind(this, "Swift4")} onMouseLeave={this.hideSkillBackgroundOnLeave.bind(this)}>
                  <div className="skillname">Angular.js</div>
                  <div className="skillyears">1 year</div>
                </div>
              </div>
                {/*
                <div className="skills-strengthsList">
                  AREAS OF EXPERTISE
                  <div className="skill-strength">UI/UX Design</div>
                  <div className="skill-strength">Project Management</div>
                  <div className="skill-strength">Frontend Development</div>
                  <div className="skill-strength">Mobile Development</div>
                </div>
                */}
                <div className="profile-articleRegion-column1">
                </div>
              <div className="skillsContentRight"></div>
            </div>
          </div>
          <div className={ this.state.profileClass }>
            <div className="profile-rightSection"> 
              <div className="profile-articleRegion">
                <div className="profile-articleRegion-column1">
                  <span className="column-text" id="part-1">I was born in State College, PA to a South African family. My father and oldest brother were the two people in my life that inspired me to explore Computer Science. Even as a kid I had a passion for imaginative creation: from legos and blanket-forts to enormous minecraft structures and carpentry projects. Soon enough I built my very first web application with just HTML/CSS. It wasn't much, but it was clear to me then that I wanted to learn everything there was to web development and software.</span>
                </div>
                <div className="profile-articleRegion-column2">
                  <div className="profile-image" id="pi-1" style={{ backgroundImage: `url(${theFarmImage})` }}/>
                  <div className="profile-image" id="pi-2"/>
                  <div className="profile-image" id="pi-3"/>
                  <div className="profile-image" id="pi-4"/>
                </div>
                {/*
                <div className="profile-articleRegion-column2">
                  <span className="column-heading" id="heading2">Motivations</span>
                  <span className="column-text" id="part-2">Throughout my tenure as a developer I've faced a number of challanges. Some challanges forcing me to question whether or not the developer profession was for me. Questions like these often get the best of growing developers. No matter how grave the contemplations were, however, the allure of building impactful and beautiful applications always brought me back every single time. In hindsight the biggest issues I've had, code or not, have always been the most fullfiling and satisfying to overcome - and right now there's nothing I'd rather be doing. It's what I live for.</span>
                </div>
                <div className="profile-articleRegion-column3">
                  <span className="column-heading" id="heading3">Community</span>
                  <span className="column-text" id="part-2">As a K-12 student I was isolated and tended to mix with kids who not only didn't value my friendship or wellbeing, but even encouraged my immaturity and poor working habits. However, looking back on those days strengthens my resolve to become a better person and developer. In the years following highschool I was introduced to the Computer Science community through attending hackathons. I was welcomed with open arms into an atmosphere that valued diversity and inspired creativity. In return, I've strived to become more involed in the industry.</span>
                </div>
                */}
              </div>
            </div>
          </div>
          {/*
          <div className={ this.state.interestsClass }>
            Interests
          </div>
          */}
        </div>
        <div className="scroll-to-portfolio" onClick={this.scrollToPortfolioOnClick.bind(this)}>
          <div>SEE MY WORK</div>
        </div>
      </div>
    )

  }
}

export default About;