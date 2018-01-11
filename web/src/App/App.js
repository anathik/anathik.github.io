import React, { Component } from 'react';

import './App.css';

import Navbar from '../Components/Navbar'
import Welcome from '../Pages/Welcome'
import About from '../Pages/About'
import Portfolio from '../Pages/Portfolio'

class App extends Component {
  // In this format a constructor is required. Make sure you understand why...
  constructor() {
    super();
  }

  componentDidMount() {
    let ticking = false;

    window.addEventListener("scroll", e => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          this.readScreenHeight();
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  readScreenHeight() {
    let getPixels = document
      .getElementsByClassName("App")[0]
      .getBoundingClientRect();
    let divLength = getPixels.height / 6;
    let location = Math.abs(getPixels.top);
    if (location >= 0 && location < divLength) {
      this.setState({ perspective: "menu-select-intro" });
    }
    if (location >= divLength && location < 2 * divLength) {
      this.setState({ perspective: "menu-select-about" });
    }
    if (location >= 2 * divLength && location < 3 * divLength) {
      this.setState({ perspective: "menu-select-skills" });
    }
    if (location >= 3 * divLength && location < 4 * divLength) {
      this.setState({ perspective: "menu-select-projects" });
    }
    if (location >= 4 * divLength && location < 4.9 * divLength) {
      this.setState({ perspective: "menu-select-activities" });
    }
    if (location >= 4.9 * divLength && location < 6 * divLength) {
      this.setState({ perspective: "menu-select-contact" });
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Welcome
          welcomeText="''I create web and mobile experiences that inspire some number of people.''"
          welcomeParagraph="Anathi Keswa is developer that lives and breathes all things front-end. The origin of his creative passion started with a single html and stylesheet page and quickly grew to macaroni and cheese."
        />
        <About />
        <Portfolio />
      </div>
      
      //<Router>
      //  <div className="App">
      //    <Route exact path="" component={} />
      //    <Route path="/blog" component={} />
      //  </div>
      //</Router>
    );
  }
  
};

export default App;