// Base imports
import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';

// CSS imports
import './index.css';
import './modal.css';

// Foreign component imports
import Portal from '../../Components/Portal'
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
    this.mediaInterval = null;
    this.state = {
      modalProjectDisplay: null,
      currentBackground: null,
      questBackgroundClassName: "questBackground",
      railsightBackgroundClassName: "railsightBackground",
      richBackgroundClassName: "richBackground",
      proximityBackgroundClassName: "proximityBackground",
      uproarBackgroundClassName: "uproarBackground",
      isModalVisible: false,

      currentMediaIndex: 5,
      modalMedia1ClassName: "mediaSelectionScene1-visible",
      modalMedia2ClassName: "mediaSelectionScene2",
      modalMedia3ClassName: "mediaSelectionScene3",
      modalMedia4ClassName: "mediaSelectionScene4",
      modalMedia5ClassName: "mediaSelectionScene5",

      mediaSelectorBubbleClass1: "projectMediaSelectorBubble1-current",
      mediaSelectorBubbleClass2: "projectMediaSelectorBubble2",
      mediaSelectorBubbleClass3: "projectMediaSelectorBubble3",
      mediaSelectorBubbleClass4: "projectMediaSelectorBubble4",
      mediaSelectorBubbleClass5: "projectMediaSelectorBubble5"
    };
  }

  returnToPortfolio() {
    scrollToComponent(document.getElementById("portfolio-div"), {
      offset: 0,
      align: 'top',
      duration: 100
    });
  }
  scrollToContactOnClick() {
    scrollToComponent(document.getElementById('contact-div'), {
      offset: 0,
      align: 'top',
      duration: 750
    });
  }
  
  showImage1OnClick() {
    clearInterval(this.mediaInterval);
    this.setModalTimingOnClick();
    this.setState({ currentMediaIndex: 1 });
    this.setState({ modalMedia1ClassName: "mediaSelectionScene1-visible" });
    this.setState({ modalMedia2ClassName: "mediaSelectionScene2" });
    this.setState({ modalMedia3ClassName: "mediaSelectionScene3" });
    this.setState({ modalMedia4ClassName: "mediaSelectionScene4" });
    this.setState({ modalMedia5ClassName: "mediaSelectionScene5" });
    this.setState({ mediaSelectorBubbleClass1: "projectMediaSelectorBubble1-current" });
    this.setState({ mediaSelectorBubbleClass2: "projectMediaSelectorBubble2" });
    this.setState({ mediaSelectorBubbleClass3: "projectMediaSelectorBubble3" });
    this.setState({ mediaSelectorBubbleClass4: "projectMediaSelectorBubble4" });
    this.setState({ mediaSelectorBubbleClass5: "projectMediaSelectorBubble5" });
  }
  showImage2OnClick() {
    clearInterval(this.mediaInterval);
    this.setModalTimingOnClick();
    this.setState({ currentMediaIndex: 2 });
    this.setState({ modalMedia1ClassName: "mediaSelectionScene1" });
    this.setState({ modalMedia2ClassName: "mediaSelectionScene2-visible" });
    this.setState({ modalMedia3ClassName: "mediaSelectionScene3" });
    this.setState({ modalMedia4ClassName: "mediaSelectionScene4" });
    this.setState({ modalMedia5ClassName: "mediaSelectionScene5" });
    this.setState({ mediaSelectorBubbleClass1: "projectMediaSelectorBubble1" });
    this.setState({ mediaSelectorBubbleClass2: "projectMediaSelectorBubble2-current" });
    this.setState({ mediaSelectorBubbleClass3: "projectMediaSelectorBubble3" });
    this.setState({ mediaSelectorBubbleClass4: "projectMediaSelectorBubble4" });
    this.setState({ mediaSelectorBubbleClass5: "projectMediaSelectorBubble5" });
  }
  showImage3OnClick() {
    clearInterval(this.mediaInterval);
    this.setModalTimingOnClick();
    this.setState({ currentMediaIndex: 3 });
    this.setState({ modalMedia1ClassName: "mediaSelectionScene1" });
    this.setState({ modalMedia2ClassName: "mediaSelectionScene2" });
    this.setState({ modalMedia3ClassName: "mediaSelectionScene3-visible" });
    this.setState({ modalMedia4ClassName: "mediaSelectionScene4" });
    this.setState({ modalMedia5ClassName: "mediaSelectionScene5" });
    this.setState({ mediaSelectorBubbleClass1: "projectMediaSelectorBubble1" });
    this.setState({ mediaSelectorBubbleClass2: "projectMediaSelectorBubble2" });
    this.setState({ mediaSelectorBubbleClass3: "projectMediaSelectorBubble3-current" });
    this.setState({ mediaSelectorBubbleClass4: "projectMediaSelectorBubble4" });
    this.setState({ mediaSelectorBubbleClass5: "projectMediaSelectorBubble5" });
  }
  showImage4OnClick() {
    clearInterval(this.mediaInterval);
    this.setModalTimingOnClick();
    this.setState({ currentMediaIndex: 4 });
    this.setState({ modalMedia1ClassName: "mediaSelectionScene1" });
    this.setState({ modalMedia2ClassName: "mediaSelectionScene2" });
    this.setState({ modalMedia3ClassName: "mediaSelectionScene3" });
    this.setState({ modalMedia4ClassName: "mediaSelectionScene4-visible" });
    this.setState({ modalMedia5ClassName: "mediaSelectionScene5" });
    this.setState({ mediaSelectorBubbleClass1: "projectMediaSelectorBubble1" });
    this.setState({ mediaSelectorBubbleClass2: "projectMediaSelectorBubble2" });
    this.setState({ mediaSelectorBubbleClass3: "projectMediaSelectorBubble3" });
    this.setState({ mediaSelectorBubbleClass4: "projectMediaSelectorBubble4-current" });
    this.setState({ mediaSelectorBubbleClass5: "projectMediaSelectorBubble5" });
  }
  showImage5OnClick() {
    clearInterval(this.mediaInterval);
    this.setModalTimingOnClick();
    this.setState({ currentMediaIndex: 5 });
    this.setState({ modalMedia1ClassName: "mediaSelectionScene1" });
    this.setState({ modalMedia2ClassName: "mediaSelectionScene2" });
    this.setState({ modalMedia3ClassName: "mediaSelectionScene3" });
    this.setState({ modalMedia4ClassName: "mediaSelectionScene4" });
    this.setState({ modalMedia5ClassName: "mediaSelectionScene5-visible" });
    this.setState({ mediaSelectorBubbleClass1: "projectMediaSelectorBubble1" });
    this.setState({ mediaSelectorBubbleClass2: "projectMediaSelectorBubble2" });
    this.setState({ mediaSelectorBubbleClass3: "projectMediaSelectorBubble3" });
    this.setState({ mediaSelectorBubbleClass4: "projectMediaSelectorBubble4" });
    this.setState({ mediaSelectorBubbleClass5: "projectMediaSelectorBubble5-current" });
    
  }
  
  projectMediaChange() {
      if( this.state.currentMediaIndex === 1) {
        this.showImage2OnClick();
      } else if (this.state.currentMediaIndex === 2) {
        this.showImage3OnClick();
      } else if (this.state.currentMediaIndex === 3) {
        this.showImage4OnClick();
      } else if (this.state.currentMediaIndex === 4) {
        this.showImage5OnClick();
      } else if (this.state.currentMediaIndex === 5) {
        this.showImage1OnClick();
      } else { 
        console.log("I need help, creator.");
      }
  }

  setModalTimingOnClick() {
    this.mediaInterval = 
    setInterval(() => {
      this.projectMediaChange()
    }, 6000)  
  }

  onPortfolioProjectClick() {
    this.showModal()
  }

  onModalDismissal() {
    this.setState({ isModalVisible: false })
    this.returnToPortfolio()
    clearInterval(this.mediaInterval)
    this.mediaInterval = null
  }

  showModal() {
    this.revertBackgroundOnClick()
    this.setState({ isModalVisible: true })
    this.setModalTimingOnClick();
  }

  visitProjectOnClick() {
      window.location.href='http://anathi.io/quest-apparel';
  }
  renderModal() {
    

    return (
      

      <Portal>
        <div className="projectModalWindow" >
          <div className="projectModal-mediaSection" id="projectModalMedia1" >
            <div className="projectModal-bioSection-projectTitle" >
              Quest Apparel
              <div className="projectModal-bioSection-projectSubtitle">
                A webstore for mens urban clothing & accessories.
              </div>
            </div>
            <div className="projectMediaSelector">
              <div className={this.state.mediaSelectorBubbleClass1} onClick={this.showImage1OnClick.bind(this)} />
              <div className={this.state.mediaSelectorBubbleClass2} onClick={this.showImage2OnClick.bind(this)} />
              <div className={this.state.mediaSelectorBubbleClass3} onClick={this.showImage3OnClick.bind(this)} />
              <div className={this.state.mediaSelectorBubbleClass4} onClick={this.showImage4OnClick.bind(this)} />
              <div className={this.state.mediaSelectorBubbleClass5} onClick={this.showImage5OnClick.bind(this)} />
            </div>
            <a className="go-to-project" onClick={this.visitProjectOnClick.bind(this)}>
              <div>Visit Quest Apparel</div>
            </a>
            <div className="projectExit" onClick={this.onModalDismissal.bind(this)}>X</div>
            <div className={this.state.modalMedia1ClassName} style={{ backgroundImage: `url(${ questProjectImage1 })` }}></div>
            <div className={this.state.modalMedia2ClassName} style={{ backgroundImage: `url(${ railsightNYBackgroundURL })` }}></div> 
            <div className={this.state.modalMedia3ClassName} style={{ backgroundImage: `url(${ iAmRichBackgroundURL })` }}></div> 
            <div className={this.state.modalMedia4ClassName} style={{ backgroundImage: `url(${ proximityBackgroundURL })` }}></div> 
            <div className={this.state.modalMedia5ClassName} style={{ backgroundImage: `url(${ uproarBackgroundURL })` }}></div>  
          </div>
          <div className="projectModal-bioSection">
            <div className="bioSection-basicDetails">
              <div className="basicDetails-year">
                <span className="detailPrefix">Year:</span>
                <span className="detailSuffix">Summer 2017</span>
              </div>
              <div className="basicDetails-role">
                <span className="detailPrefix">Role:</span>
                <span className="detailSuffix">UI Design & Development</span>
              </div>
              <div className="basicDetails-status">
                <span className="detailPrefix">Status:</span>
                <span className="detailSuffix">Completed Concept</span>
              </div>
            </div>
            <div className="bioSection-quotedDescription">
              <span className="bioSection-quotedText">"In early summer 2017 I was asked to deliver on a menswear webstore concept. Constant feedback allowed us to design the Quest Apparel brand from the ground up."</span>
            </div>
            <div className="skillsContentLeft-small">
                <div className="skillIcons-small" id="Advanced1" >
                  <div className="skillname-small">HTML5</div>
                </div>
                <div className="skillIcons-small" id="Advanced1" >
                  <div className="skillname-small">CSS3</div>
                </div>
                <div className="skillIcons-small" id="Advanced1" >
                  <div className="skillname-small">React</div>
                </div>
                <div className="skillIcons-small" id="Advanced1" >
                  <div className="skillname-small">Webpack</div>
                </div>
            </div>
          </div>
         {/* 
          <div className="go-to-details" onClick={this.onModalDismissal.bind(this)}>
              <div>Close</div>
          </div>
          */}
        </div>
      </Portal>
    )
  }

  revertBackgroundOnClick() {
    this.setState({questBackgroundClassName: "questBackground"});
    this.setState({richBackgroundClassName: "richBackground"});
    this.setState({railsightBackgroundClassName: "railsightBackground"});
    this.setState({proximityBackgroundClassName: "proximityBackground"});
    this.setState({uproarBackgroundClassName: "uproarBackground"});
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
              onClick={this.onPortfolioProjectClick.bind(this)}>Quest&nbsp;Apparel</span>
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
        <div className="scroll-to-portfolio" onClick={this.scrollToContactOnClick.bind(this)}>
          <div>CONTACT ME</div>
        </div>
      </div>
    )

  }
}

export default Portfolio;