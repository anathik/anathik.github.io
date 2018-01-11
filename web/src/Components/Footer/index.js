// Base imports
import React, { Component } from 'react';

// CSS imports
import './index.css';

// Foreign component imports

// Media imports
import footerLogo from '../../Media/anathi_logo_ghostgrey.png'

class Footer extends Component {
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
        return (
          <div className="footer">
            <div className="footerLogo"
              style={{
                backgroundImage: `url(${footerLogo})`
              }}
            />
            <div className="footerItems">
              <div className="footerCopyright">
              ©2017 Portfolio of Anathi Keswa
              </div>
              <div className="footerPhoneNumber">
              215.280.1971
              </div>
              <div className="footerEmail">
              me@anathi.io
              </div>
              <div className="footerSocialMedia">
              
              </div>
            </div>
          </div>
        )
    } 
}

export default Footer; 