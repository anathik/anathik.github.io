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
              <div className="footerSocialMedia">
                <a id="twitter" href="https://twitter.com/anathi_keswa" target="_blank">TW</a>
                <span id="babyBlueSpanDot">.</span>
                <a id="facebook" href="https://www.facebook.com/tikeswa" target="_blank">FB</a>
                <span id="darkBlueSpanDot">.</span>
                <a id="github" href="https://github.com/anathik" target="_blank">GH</a>
                <span id="greyPurpSpanDot">.</span>
                <a id="instagram" href="https://www.instagram.com/anathimpilo/" target="_blank">IG</a>
                <span id="feintOrangeSpanDot">.</span>
              </div>
              <div className="footerEmail">
                  Original website by Anathi Keswa.
                </div>
            </div>
          </div>
        )
    } 
}

export default Footer; 