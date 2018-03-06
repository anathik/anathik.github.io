// Base imports
import React, { Component } from 'react'
import scrollToComponent from 'react-scroll-to-component'

// CSS imports
import './index.css'

// Foreign component imports

// Media imports
import welcomeBackground from '../../Media/anathi_selfie.png'
import anathiResume from '../../Media/anathi_resume.pdf'

class Welcome extends Component {
  // In this format a constructor is required. Make sure you understand why...
  constructor() {
    super()
    this.state = {
      someState: 'its just an example, dude',
    }
  }

  scrollToAboutOnClick(elementId) {
    scrollToComponent(document.getElementById(elementId), {
      offset: 0,
      align: 'top',
      duration: 750,
    })
  }

  render() {
    const { welcomeText, welcomeTextSecondLine, welcomeParagraph } = this.props

    return (
      <section className="welcome">
        <div className="welcome-left">
          <div className="welcome-introduction">
            <span className="welcome-greeting">{welcomeText}</span>
            <span className="welcome-description">{welcomeTextSecondLine}</span>
            <span className="welcome-paragraph">{welcomeParagraph}</span>
          </div>
          <div className="welcome-links">
            <div
              className="welcome-link"
              onClick={this.scrollToAboutOnClick.bind(this, 'about-div')}>
              ABOUT ME
            </div>
            <div
              className="welcome-link"
              href={anathiResume}
              download="anathi_resume.pdf">
              RESUMÉ
            </div>
          </div>
        </div>
        <div className="welcome-right">
          <div
            className="welcome-selfie"
            style={{ backgroundImage: `url(${welcomeBackground})` }}>
            <div className="welcome-fade-overlay" />
          </div>
        </div>
      </section>
    )
  }
}

export default Welcome
