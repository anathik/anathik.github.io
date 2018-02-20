// Base imports
import React, { Component } from 'react';

// CSS imports
import './index.css';

// Foreign component imports

// Media imports

class Modal extends Component {
    // In this format a constructor is required. Make sure you understand why...
    constructor() {
        super();
        this.state = {
        };
      }

    // Behavior
    
    render() {
      return(
      <div className="modal-backdrop"> 
        <div className="modal">
          {this.props.children}
        </div>
      </div>
      )
    } 
}

export default Modal; 