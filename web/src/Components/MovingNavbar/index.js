// Base imports
import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';

// CSS imports
import './index.css';

// Foreign component imports
import NavButton from '../NavButton'

// Media imports
import anathiLogo from '../../Media/anathi_logo_ghostgrey.png'

class MovingNavbar extends Component {
  // In this format a constructor is required. Make sure you understand why...
  constructor() {
    super();
    this.state = {
      someState: "its just an example, dude",
      movingNavbarClassName: "moving-navbar" 
    };
  }

  // Behavior
  goHomeOnClick() {
    if(window.location.href !== "anathi.io") {
      window.location.href='http://anathi.io';
    } else if(window.location.href === "anathi.io") {
        scrollToComponent(document.getElementById("welcome-div"), {
          offset: 0,
          align: 'top',
          duration: 750
      });
    }
  }

  openMenuOnClick() {
    if(this.state.movingNavbarClassName === "moving-navbar"){
      this.setState({movingNavbarClassName: "moving-navbar-visible"})
    } else if(this.state.movingNavbarClassName === "moving-navbar-visible"){
      this.setState({movingNavbarClassName: "moving-navbar"})
    } 
  }

  render() {
    return ( 
      <div className={this.state.movingNavbarClassName}>
        <div className="logo" />
        <div className="moving-navbar-menu" onClick={this.openMenuOnClick.bind(this)}></div>
        <div className="button-space">
          <NavButton text="Profile" scrollTarget="about-div"/>
          <NavButton text="Projects" scrollTarget="portfolio-div"/>
          <NavButton text="Contact" scrollTarget="contact-div"/>
        </div>
      </div>
    )

  }
}

export default MovingNavbar;