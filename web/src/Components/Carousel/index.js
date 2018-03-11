import React, { Component } from 'react'
import './index.css'

export class Carousel extends Component {
  constructor() {
    super()
    this.state = {
      hovered: false,
    }
  }

  hoverHandler() {
    this.setState({ hovered: true })
  }

  unhoverHandler() {
    this.setState({ hovered: false })
  }

  onBubbleClick(bubbleIndex) {
    if (!this.props.onSlideRequested) {
      return
    }

    this.props.onSlideRequested(bubbleIndex)
  }

  renderDots(selectedIndex, slideCount) {
    const dotDivs = []
    for (let i = 0; i < slideCount; i++) {
      let className = 'Bubble'
      if (selectedIndex === i) {
        className += ' Bubble-selected'
      }

      dotDivs.push(
        <div
          className={className}
          key={i}
          onClick={this.onBubbleClick.bind(this, i)}
        />
      )
    }

    return (
      <div className="Bubble-space">
        {dotDivs}
      </div>
    )
  }

  render() {
    const { children, visibleSlideIndex } = this.props
    const slides = children.filter(el => el.type === Slide)
    const index = !isNaN(visibleSlideIndex) ? visibleSlideIndex : 0
    const boundedIndex = Math.abs(index) % slides.length
    let carouselClassName = 'Carousel'

    if (this.state.hovered === true) {
      carouselClassName += ' Carousel-hovered'
    }

    return (
      <div
        className={carouselClassName}
        onMouseEnter={this.hoverHandler.bind(this)}
        onMouseLeave={this.unhoverHandler.bind(this)}>
        <div className="Carousel-prev clickable" onClick={this.props.onPreviousRequested}>
          <i className="material-icons">keyboard_arrow_left</i>
        </div>
        <div className="Carousel-next clickable" onClick={this.props.onNextRequested}>
          <i className="material-icons">keyboard_arrow_right</i>
        </div>

        <div
          className="Carousel-slides"
          style={{
            transform: `translateX(${boundedIndex * (-100 / slides.length)}%)`,
            width: `${slides.length * 100}%`,
          }}>
          {slides.map((slide, i) => {
            const { backgroundImageURL, text } = slide.props

            return (
              <div
                key={i}
                className="Carousel-slide"
                style={{ backgroundImage: `url(${backgroundImageURL})` }}>
                {text}
              </div>
            )
          })}
        </div>

        {this.renderDots(boundedIndex, slides.length)}
      </div>
    )
  }
}

export const Slide = props => null