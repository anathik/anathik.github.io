import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const animationDuration = 300 /* milliseconds */
const domAdjustmentDuration = 500 /* milliseconds */

export class ModalWrapper extends Component {
  constructor() {
    super()

    this.modalRoot = null
    this.state = {
      isBackdropVisible: false,
    }
  }

  componentDidMount() {
    // Before continuing, create the root that react will render into.
    this.createModalRoot()

    // Fade in the backdrop here.
    this.fadeInBackdrop()
  }

  componentWillUnmount() {
    // Time to cleanup.

    // TODO(skeswa): animate the modal going away here.

    this.destroyModalRoot()
    this.fadeOutBackdrop()
  }

  fadeOutBackdrop() {
    return new Promise((resolve, reject) => {
      try {
        // Wait for the DOM to adjust first.
        setTimeout(() => {
          // Then, update the state to have the backdrop faded in.
          this.setState({ isBackdropVisible: false }, () => {
            // After that, wait for the animation finish.
            setTimeout(() => {
              // At this point, we are done - so, resolve this promise.
              return resolve()
            }, 300)
          })
        }, 300)
      } catch (err) {
        return reject(new Error('Failed to fade in the backdrop', err))
      }
    })
  }

  fadeInBackdrop() {
    return new Promise((resolve, reject) => {
      try {
        // Wait for the DOM to adjust first.
        setTimeout(() => {
          // Then, update the state to have the backdrop faded in.
          this.setState({ isBackdropVisible: true }, () => {
            // After that, wait for the animation finish.
            setTimeout(() => {
              // At this point, we are done - so, resolve this promise.
              return resolve()
            }, animationDuration)
          })
        }, domAdjustmentDuration)
      } catch (err) {
        return reject(new Error('Failed to fade in the backdrop', err))
      }
    })
  }

  createModalRoot() {
    // Creates the element in memory.
    this.modalRoot = document.createElement('div')

    // Adds the modal root to the dom.
    document.body.appendChild(this.modalRoot)

    // Make sure that the modal is rendered for the first time.
    ReactDOM.render(
      <Modal onDismissalRequested={this.props.onDismissalRequested}>
        {this.props.children}
      </Modal>,
      this.modalRoot
    )
  }

  destroyModalRoot() {
    // Only continue if the modal root exists.
    if (!this.modalRoot) return

    // Tell react that it does not need to track this element anymore.
    ReactDOM.unmountComponentAtNode(this.modalRoot)

    // Remove the element from the DOM.
    document.body.removeChild(this.modalRoot)

    // Signal that the modal root has been destroyed.
    this.modalRoot = null
  }

  render() {
    // This is a no-op because we aren't rendering directly where the Modal is
    // used, we are rendering into this.modalRoot instead.
    return null
  }
}

class Modal extends Component {
  constructor() {
    super()

    this.state = {
      isBackdropVisible: false,
    }
  }

  componentDidMount() {
    // Fade in the backdrop here.
    this.fadeInBackdrop()
  }

  componentWillUnmount() {
    // Time to cleanup.
    // TODO(skeswa): animate the modal going away here.
  }

  onBackdropClick() {
    this.dismissModal()
  }

  dismissModal() {
    if (!this.props.onDismissalRequested) return

    this.fadeOutBackdrop().then(() => {
      if (!this.props.onDismissalRequested) return

      this.props.onDismissalRequested()
    })
  }

  fadeInBackdrop() {
    return new Promise((resolve, reject) => {
      try {
        // Wait for the DOM to adjust first.
        setTimeout(() => {
          // Then, update the state to have the backdrop faded in.
          this.setState({ isBackdropVisible: true }, () => {
            // After that, wait for the animation finish.
            setTimeout(() => {
              // At this point, we are done - so, resolve this promise.
              return resolve()
            }, animationDuration)
          })
        }, domAdjustmentDuration)
      } catch (err) {
        return reject(new Error('Failed to fade in the backdrop', err))
      }
    })
  }

  fadeOutBackdrop() {
    return new Promise((resolve, reject) => {
      try {
        // Update the state to have the backdrop faded out.
        this.setState({ isBackdropVisible: false }, () => {
          // After that, wait for the animation finish.
          setTimeout(() => {
            // At this point, we are done - so, resolve this promise.
            return resolve()
          }, animationDuration)
        })
      } catch (err) {
        return reject(new Error('Failed to fade out the backdrop', err))
      }
    })
  }

  render() {
    const { isBackdropVisible } = this.state

    // Construct the class name for the backdrop.
    let backdropClassName = 'modal__backdrop'
    if (isBackdropVisible) {
      backdropClassName += ' modal__backdrop--visible'
    }

    return (
      <div className="modal">
        <div
          className={backdropClassName}
          onClick={this.onBackdropClick.bind(this)}
        />
        {this.props.children}
      </div>
    )
  }
}

export default ModalWrapper