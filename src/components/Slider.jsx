import React, { Component } from 'react';
import Slide from './Slide';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import Sync from './Sync';

const allimages = [
  'https://i.imgur.com/HatWGp5.jpg',
  'https://i.imgur.com/T71L0rO.jpg',
  'https://i.imgur.com/Dep1uaL.jpg',
  'https://i.imgur.com/XjmAuXZ.jpg',
  'https://i.imgur.com/fCWGjRn.jpg',
  'https://i.imgur.com/7DBloS4.jpg',
  'https://i.imgur.com/HmVmVIn.jpg',
  'https://i.imgur.com/IL1K0ra.jpg',
  'https://i.imgur.com/3QNuL6H.jpg',
  'https://i.imgur.com/K3FNzpA.jpg',
  'https://i.imgur.com/9S8Qmso.jpg',
  'https://i.imgur.com/Oh85V12.jpg',
  'https://i.imgur.com/eHzcpIT.jpg',
  'https://i.imgur.com/8WaGYGG.jpg',
  'https://i.imgur.com/0FxIliI.jpg',
  'https://i.imgur.com/0J7ZBHK.jpg',
  'https://i.imgur.com/i5FNISD.jpg',
  'https://i.imgur.com/biYjiqt.jpg',
  'https://i.imgur.com/qgxqBO9.jpg',
  'https://i.imgur.com/GLmRUNB.jpg',
  'https://i.imgur.com/EW60cfT.jpg',
  'https://i.imgur.com/GEyM4OU.jpg',
  'https://i.imgur.com/3WOWsX4.jpg',
  'https://i.imgur.com/vmeOD9r.jpg',
  'https://i.imgur.com/gu0O8Os.jpg',
  'https://i.imgur.com/JivyMRZ.jpg',
  'https://i.imgur.com/hMfKJCr.jpg',
  'https://i.imgur.com/5r0VWeL.jpg',
  'https://i.imgur.com/GvW2ntq.jpg',
  'https://i.imgur.com/Y8A8Us4.jpg',
  'https://i.imgur.com/Fz0WyR9.jpg',
  'https://i.imgur.com/V65IHFW.jpg',
  'https://i.imgur.com/eEaqAwG.jpg',
  'https://i.imgur.com/91zQr0U.jpg',
  'https://i.imgur.com/Mh7czOG.jpg',
  'https://i.imgur.com/Mo5IhOn.jpg',
  'https://i.imgur.com/XF6HhSh.jpg',
  'https://i.imgur.com/lhKc4DY.jpg',
]

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      currentIndex: 0
    }
  }

  shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  componentDidMount = () => {
    this.randomize();
  }


  nextSlide = (ev) => {
    ev.preventDefault();
    if (this.state.currentIndex !== this.state.images.length - 1) {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1
      }))
    } else {
      this.setState({
        currentIndex: 0
      })
    }
  }

  prevSlide = (ev) => {
    ev.preventDefault();
    if (this.state.currentIndex !== 0) {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1
      }))
    } else {
      this.setState({
        currentIndex: this.state.images.length - 1
      })
    }
  }

  randomize = () => {
    const images = this.shuffle(allimages);
    this.setState({
      images: images
    })
  }

  render() {
    return (
      <div className="slider">
        <p className="slider-title">FLAWLESS</p>
        <div className="slider-wrapper">
          <Slide image={this.state.images[this.state.currentIndex]} />
        </div>
        <div className="slider-icons">
          <LeftArrow
            prevSlide={this.prevSlide} />
          <Sync
            randomize={this.randomize} />
          <RightArrow
            nextSlide={this.nextSlide} />
        </div>
      </div >
    )
  }
}
