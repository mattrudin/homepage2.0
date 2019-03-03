import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Slider from './components/Slider'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Slider />
        <Footer />
      </div>
    );
  }
}

export default App;
