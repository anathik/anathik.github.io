import React, { Component } from 'react';

import './App.css';

import Navbar from '../Components/Navbar'
import Welcome from '../Pages/Welcome'
import About from '../Pages/About'
import Portfolio from '../Pages/Portfolio'
import Footer from '../Components/Footer'

class App extends Component {
  // In this format a constructor is required. Make sure you understand why...
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Welcome
          welcomeText="I create web and mobile experiences that inspire some number of people."
          welcomeParagraph="Anathi Keswa is developer that lives and breathes all things front-end. The origin of his creative passion started with a single html and stylesheet page and quickly grew to macaroni and cheese."
        />
        <About />
        <Portfolio />
        <Footer />
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