import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';

import './App.css';

import Navbar from '../Components/Navbar'
import Welcome from '../Pages/Welcome'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
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
          welcomeText="I build websites and mobile apps for humans. Just ask my mom."
          welcomeParagraph="Anathi Keswa is developer that lives and breathes all things front-end. The origin of his creative passion started with a single html and stylesheet page and quickly grew to macaroni and cheese."
        />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
  
};

export default App;