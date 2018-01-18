// Base imports
import React, { Component } from 'react';

// CSS imports
import './index.css';

// Foreign component imports

// Media imports
import questApparelMenuFlash from '../../Media/quest-apparel-placeholder.png'

class Portfolio extends Component {
  // In this format a constructor is required. Make sure you understand why...
  constructor() {
    super();
    this.state = {
      conditionalBackground: null
    };
  }

  changeBackgroundOnHover(project) {
    if(project === "QuestApparel") {
      this.setState({conditionalBackground: "../../Media/quest-apparel-placeholder.png"})
    } else if(project === "IAmRich") {
      this.setState({conditionalBackground: "aboutInfoSelectorBar-bio"});
    } else if(project === "RailsightNY") {
      this.setState({conditionalBackground: "aboutInfoSelectorBar-bio"});
    } else if(project === "Proximity") {
      this.setState({conditionalBackground: "aboutInfoSelectorBar-bio"});
    } else if(project === "Uproar") {
      this.setState({conditionalBackground: "aboutInfoSelectorBar-bio"});
    } else {
      this.setState({conditionalBackground: null});
    }
    console.log(this.state.conditionalBackground);
  }

  resetBackgroundOnMouseLeave() {
    this.setState({conditionalBackground: null});
    console.log(this.state.conditionalBackground);
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
          <div className="projectMenu">
            <span 
              className="projectMenuItem" 
              id="quest-apparel" 
              onMouseOver={this.changeBackgroundOnHover.bind(this, "QuestApparel")} 
              onMouseLeave={this.resetBackgroundOnMouseLeave.bind(this)}>Quest Apparel</span>
            <div className="projectMenuItemDivider">
              <div className="projectMenuItemDivider-white-space" />
            </div>
            <span 
              className="projectMenuItem"
              id="i-am-rich"
              onMouseOver={this.changeBackgroundOnHover.bind(this, "IAmRich")}
              onMouseLeave={this.resetBackgroundOnMouseLeave.bind(this)}>I Am Rich</span>
            <div className="projectMenuItemDivider">
              <div className="projectMenuItemDivider-white-space" />
            </div>
            <span 
              className="projectMenuItem" 
              id="railsight-ny"
              onMouseOver={this.changeBackgroundOnHover.bind(this, "RailsightNY")}
              onMouseLeave={this.resetBackgroundOnMouseLeave.bind(this)}>Railsight NY</span>
            <div className="projectMenuItemDivider">
              <div className="projectMenuItemDivider-white-space" />
            </div>
            <span 
              className="projectMenuItem" 
              id="proximity"
              onMouseOver={this.changeBackgroundOnHover.bind(this, "Proximity")}
              onMouseLeave={this.resetBackgroundOnMouseLeave.bind(this)}>Proximity</span>
            <div className="projectMenuItemDivider">
              <div className="projectMenuItemDivider-white-space" />
            </div>
            <span 
              className="projectMenuItem" 
              id="uproar"
              onMouseOver={this.changeBackgroundOnHover.bind(this, "Uproar")}
              onMouseLeave={this.resetBackgroundOnMouseLeave.bind(this)}>Uproar</span>
          </div>
              
            </div>
        </div>
    )

  }
}

export default Portfolio;