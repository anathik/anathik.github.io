// Base imports
import React, { Component } from 'react'
import scrollToComponent from 'react-scroll-to-component'

// CSS imports
import './index.css'

// Foreign component imports

// Media imports

class NavButton extends Component {
  // In this format a constructor is required. Make sure you understand why...
  constructor() {
    super()
    this.state = {
      someState: 'its just an example, dude',
    }
  }

  // Behavior
  highlightButtonTextOnHover(color, child) {
    if (color !== null && !NaN(child)) {
      let buttonHighlight = document.getElementsByClassName('nav-button')[child]
      buttonHighlight.style.color = color
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
    const { text, scrollTarget } = this.props

    return (
      <div
        className="nav-button"
        onClick={this.scrollToAboutOnClick.bind(this, scrollTarget)}>
        <div className="nav-button-label">{text}</div>
        <div className="hover-indicator" />
      </div>
    )
  }
}

export default NavButton
