// Base imports
import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';

// CSS imports
import './index.css';

// Foreign component imports
import NavButton from '../NavButton'

// Media imports
import anathiLogo from '../../Media/anathi_logo_ghostgrey.png'

class Navbar extends Component {
  // In this format a constructor is required. Make sure you understand why...
  constructor() {
    super();
    this.state = {
      someState: "its just an example, dude"
    };
  }

  // Behavior

  render() {
    return ( 
      <div className="navbar">
        <div className="logo"
          style={{
            backgroundImage: `url(${anathiLogo})`
          }}
        />
        <div className="button-space">
          <NavButton text="Profile" scrollTarget="about-div"/>
          <NavButton text="Projects" scrollTarget="portfolio-div"/>
          <NavButton text="Contact" scrollTarget="contact-div"/>
        </div>
      </div>
    )

  }
}

export default Navbar;