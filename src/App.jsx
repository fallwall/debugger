import React, { Component } from 'react';
import Slider from './components/Slider';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="noise-overlay"></div>
        <Slider />
      </div>
    )
  }
}

