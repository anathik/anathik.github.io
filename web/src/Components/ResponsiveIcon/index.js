// Base imports
import React, { Component } from 'react';

// CSS imports
import './index.css';

// Foreign component imports

// Media imports

class ResponsiveIcon extends Component {
    // In this format a constructor is required. Make sure you understand why...
    constructor() {
        super();
        this.state = {
          someState: "its just an example, dude",
        };
      }

    // Behavior
    someFunction() {

    }

    render() {
      const { skillIcon, text, textColor } = this.props;

      return (
        <div className="skill-icon" style={{ backgroundImage: `url(${ skillIcon })` }}>
          <div className="skill-icon-text" style={{ color: textColor }}>
          { text }
          </div>
        </div>
      )
        
    } 
}

export default ResponsiveIcon; 