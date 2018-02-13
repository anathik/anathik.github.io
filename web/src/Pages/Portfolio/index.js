// Base imports
import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';

// CSS imports
import './index.css';

// Foreign component imports
import Modal from '../../Components/Modal'

// Media imports
import questApparelBackgroundURL from '../../Media/quest-general-background.jpg'
import questProjectImage1 from '../../Media/quest-intro-background.jpg'
import iAmRichBackgroundURL from '../../Media/ringme-background.png'
import railsightNYBackgroundURL from '../../Media/nysubway.jpg'
import uproarBackgroundURL from '../../Media/nystudio.jpg'
import proximityBackgroundURL from '../../Media/earbudpair.jpg'

class Portfolio extends Component {
  // In this format a constructor is required. Make sure you understand why...
  constructor() {
    super();
    this.state = {
      modalProjectDisplay: null,
      currentBackground: null,
      questBackgroundClassName: "questBackground",
      railsightBackgroundClassName: "railsightBackground",
      richBackgroundClassName: "richBackground",
      proximityBackgroundClassName: "proximityBackground",
      uproarBackgroundClassName: "uproarBackground",
      isModalVisible: false
    };
  }

  returnToPortfolio() {
    scrollToComponent(document.getElementById("portfolio-div"), {
      offset: 0,
      align: 'top',
      duration: 100
  });
  }
  
  setModalDisplayOnClick() {
    // Placeholder for spicy logic!!!
  }

  onPortfolioProjectClick() {
    this.showModal()
  }

  onModalDismissal() {
    this.returnToPortfolio()
    this.setState({ isModalVisible: false })
    this.returnToPortfolio() 
  }

  showModal() {
    this.setState({ isModalVisible: true })
  }

  visitProjectOnClick() {
      window.location.href='http://anathi.io/quest-apparel';
  }
  renderModal() {

    return (
      <Modal onDismissalRequested={this.onModalDismissal.bind(this)}>
        <div className="projectModalWindow">
          <div className="projectHeading">
            <span className="projectHeadingPrefix">PROJECT:</span>
            <span className="projectHeadingCharacters">QUEST APPAREL</span>
            <div className="modalCloseMessage">click outside to exit</div>
          </div>
          <div className="projectModal-mediaSection" id="projectModalMedia1" style={{ backgroundImage: `url(${ questProjectImage1 })` }}> 
          <div className="go-to-details">
              <div>Details</div>
          </div>
          <a className="go-to-project" onClick={this.visitProjectOnClick.bind(this)}>
              <div>Visit Project</div>
          </a>
          </div>
          <div className="projectModal-mediaSection" />
          {/*
          <div className="projectStatline"> 
              <div className="projectStatline-tech">
                <div className="projectStat-catagory">Tools: </div>
                <div className="projectStat-catagoryContent">React.js</div>
              </div>
              <div className="projectStatline-date">
                <div className="projectStat-catagory">Date: </div>
                <div className="projectStat-catagoryContent">Summer 2017</div>
              </div>
            </div>
            <div className="projectDescription">QuestApparel is an online clothing store. The goal was to create an e-commerce application with slick, minimalist design that would make shopping both easy and pleasant.</div>



          <div className="projectModal-mediaSection" id="projectModalMedia2"  />
          <div className="projectModal-detailsSection" id="projectModaldetails2"/>
          <div className="projectModal-mediaSection" id="projectModalMedia3"  />
          <div className="projectModal-detailsSection" id="projectModaldetails3"/>
          <div className="projectModal-mediaSection" id="projectModalMedia4"  />
          <div className="projectModal-detailsSection" id="projectModaldetails4"/>
          <div className="projectModal-mediaSection" id="projectModalMedia5"  />
          <div className="projectModal-detailsSection" id="projectModaldetails5"/>
          */} 
        </div>
      </Modal>
    )
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
    const { isModalVisible } = this.state
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
          Projects
        </div>
        <div className="portfolioDisplay">
          <div className="projectMenu">
            <span
              className="projectMenuItem" 
              id="quest-apparel" 
              onMouseOver={this.changeBackgroundOnHover.bind(this, "QuestApparel")} 
              onMouseLeave={this.resetBackgroundOnMouseLeave.bind(this)}
              onClick={this.onPortfolioProjectClick.bind(this)}>Quest Apparel</span>
            <div className="projectMenuItemDivider">
              <div className="projectMenuItemDivider-white-space" />
            </div>
            <span 
              className="projectMenuItem"
              id="i-am-rich"
              onMouseOver={this.changeBackgroundOnHover.bind(this, "IAmRich")}
              onMouseLeave={this.resetBackgroundOnMouseLeave.bind(this)}>Ring Me</span>
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
          {isModalVisible ? this.renderModal() : null}
        </div>
      </div>
    )

  }
}

export default Portfolio;