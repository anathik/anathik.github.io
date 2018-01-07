// Base imports
import React, { Component } from 'react';

// CSS imports
import './index.css';

// Foreign component imports
import { TimedCarousel, Slide} from '../../Components/TimedCarousel'

// Media imports
import comingSoon from '../../Media/coming-soon_bkgrnd.jpg'

class Portfolio extends Component {
  // In this format a constructor is required. Make sure you understand why...
  constructor() {
    super();
    this.state = {
      someState: "its just an example, dude",
    };
  }

  render() {
    const { portfolioTitle } = this.props;
    return ( 
      <div className="portfolio" id="portfolio-div">
        <div className="portfolio-title">
          {portfolioTitle}
        </div>
      </div>
    )

  }
}

export default Portfolio;