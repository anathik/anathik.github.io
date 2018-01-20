// Base imports
import React, { Component } from 'react';

// CSS imports
import './index.css';

// Foreign component imports

// Media imports
import questApparelBackgroundURL from '../../Media/quest-general-background.jpg'
import iAmRichBackgroundURL from '../../Media/money.jpg'
import railsightNYBackgroundURL from '../../Media/nysubway.jpg'
import uproarBackgroundURL from '../../Media/nystudio.jpg'
import proximityBackgroundURL from '../../Media/earbudpair.jpg'

class Portfolio extends Component {
  // In this format a constructor is required. Make sure you understand why...
  constructor() {
    super();
    this.state = {
      currentBackground: null,
      questBackgroundClassName: "questBackground",
      railsightBackgroundClassName: "railsightBackground",
      richBackgroundClassName: "richBackground",
      proximityBackgroundClassName: "proximityBackground",
      uproarBackgroundClassName: "uproarBackground",
    };
  }

  changeBackgroundOnHover(project) {
    if(project === "QuestApparel") {
      this.setState({questBackgroundClassName: "questBackground-visible"});
    } else if(project === "IAmRich") {
      this.setState({richBackgroundClassName: "richBackground-visible"});
    } else if(project === "RailsightNY") {
      this.setState({railsightBackgroundClassName: "railsightBackground-visible"});
    } else if(project === "Proximity") {
      this.setState({proximityBackgroundClassName: "proximityBackground-visible"});
    } else if(project === "Uproar") {
      this.setState({uproarBackgroundClassName: "uproarBackground-visible"});
    } else {
      this.setState({currentBackground: null});
    }
  }

  resetBackgroundOnMouseLeave() {
    this.setState({questBackgroundClassName: "questBackground"});
    this.setState({railsightBackgroundClassName: "railsightBackground"});
    this.setState({richBackgroundClassName: "richBackground"});
    this.setState({proximityBackgroundClassName: "proximityBackground"});
    this.setState({uproarBackgroundClassName: "uproarBackground"});
    console.log(this.state.currentBackground);
  }

  render() {
    const { welcomeText } = this.props;
    let currentProject = this.props.currentProject;
    
    return ( 
      <div 
        className="portfolio"
        id="portfolio-div"
        >

        <div className={this.state.questBackgroundClassName} style={{ backgroundImage: `url(${questApparelBackgroundURL})` }}/>
        <div className={this.state.richBackgroundClassName} style={{ backgroundImage: `url(${iAmRichBackgroundURL})` }}/>
        <div className={this.state.railsightBackgroundClassName} style={{ backgroundImage: `url(${railsightNYBackgroundURL})` }}/>
        <div className={this.state.uproarBackgroundClassName} style={{ backgroundImage: `url(${uproarBackgroundURL})` }}/>
        <div className={this.state.proximityBackgroundClassName} style={{ backgroundImage: `url(${proximityBackgroundURL})` }}/>
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