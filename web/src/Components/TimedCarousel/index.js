import React, { Component } from 'react'

import { Carousel } from '../Carousel'

export class TimedCarousel extends Component {
  constructor() {
    super()

    this.carouselInterval = null

    this.state = {
      visibleSlideIndex: 0,
    }
  }

  componentDidMount() {
    this.scheduleIntervalTimeout()
  }

  componentWillUnmount() {
    this.cancelIntervalTimeout()
  }

  onIntervalTimeout() {
    this.setState({
      visibleSlideIndex: this.state.visibleSlideIndex + 1,
    })

    this.scheduleIntervalTimeout()
  }

  scheduleIntervalTimeout() {
    if (this.props.interval) {
      this.carouselInterval = setTimeout(
        this.onIntervalTimeout.bind(this),
        this.props.interval
      )
    }
  }

  cancelIntervalTimeout() {
    clearTimeout(this.carouselInterval)
  }

  clickPrevious() {
    this.cancelIntervalTimeout()
    this.setState(
      {
        visibleSlideIndex: this.state.visibleSlideIndex - 1,
      },
      () => {
        this.scheduleIntervalTimeout()
      }
    )
  }

  clickNext() {
    this.cancelIntervalTimeout()
    this.setState(
      {
        visibleSlideIndex: this.state.visibleSlideIndex + 1,
      },
      () => {
        this.scheduleIntervalTimeout()
      }
    )
  }

  onSlideRequested(slideIndex) {
    this.cancelIntervalTimeout()
    this.setState(
      {
        visibleSlideIndex: slideIndex,
      },
      () => {
        this.scheduleIntervalTimeout()
      }
    )
  }

  render() {
    return (
      <Carousel
        visibleSlideIndex={this.state.visibleSlideIndex}
        onNextRequested={this.clickNext.bind(this)}
        onPreviousRequested={this.clickPrevious.bind(this)}
        onSlideRequested={this.onSlideRequested.bind(this)}>
        {this.props.children}
      </Carousel>
    )
  }
}

export { Slide } from '../Carousel'