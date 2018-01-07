// Base imports
import React, { Component } from 'react';

// CSS imports
import './index.css';

// Foreign component imports

// Media imports

class NavButton extends Component {
  // In this format a constructor is required. Make sure you understand why...
  constructor() {
    super();
    this.state = {
      someState: "its just an example, dude"
    };
  }

  // Behavior
  highlightButtonTextOnHover(color, child) {
    if (color !== null && !NaN(child)) {
      let buttonHighlight = document.getElementsByClassName("nav-button")[child];
      buttonHighlight.style.color = color;
    }
  }

  render() {
    const { text, color, child } = this.props

    return (
      <div className="nav-button">
        {text}
        <div className="hover-indicator" />
      </div>
    )

  }
}

export default NavButton;