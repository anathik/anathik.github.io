// Base imports
import React, { Component } from 'react';

// CSS imports
import './index.css';

// Foreign component imports

// Media imports
import welcomeBackground from '../../Media/anathi_selfie.png'

class Welcome extends Component {
  // In this format a constructor is required. Make sure you understand why...
  constructor() {
    super();
    this.state = {
      someState: "its just an example, dude",
    };
  }

  render() {
    const { welcomeText, welcomeParagraph} = this.props;
    return ( 
      <div className="welcome" id="welcome-div" style={{ backgroundImage: `url(${welcomeBackground})` }}>
        <div className="welcome-greeting">
          {welcomeText}
        </div>
        <div className="welcome-paragraph">
          {welcomeParagraph}
        </div>
        <div className="black-fade" />
      </div>
    )

  }
}

export default Welcome;