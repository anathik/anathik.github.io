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
  scrollToAboutOnClick() {
    scrollToComponent(document.getElementById("about-div"), {
      offset: 1000,
      align: 'top',
      duration: 1500
  });
  }

  render() {
    return ( 
      <div className="navbar">
        <div className="logo"
          style={{
            backgroundImage: `url(${anathiLogo})`
          }}
        />
        <div className="button-space">
          <NavButton text="About" onclick={this.scrollToAboutOnClick.bind(this)}/>
          <NavButton text="Portfolio" />
          <NavButton text="Contact" />
        </div>
      </div>
    )

  }
}

export default Navbar;