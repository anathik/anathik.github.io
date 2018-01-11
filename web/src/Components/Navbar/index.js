// Base imports
import React, { Component } from 'react';

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
  someFunction() {

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
          <NavButton text="About" />
          <NavButton text="Portfolio" />
          <NavButton text="Contact" />
        </div>
      </div>
    )

  }
}

export default Navbar;