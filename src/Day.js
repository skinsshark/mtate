import React from 'react';
import './Day.css';

import lottie from 'lottie-web';
import animationData from './lottie/0412.json';

class Day extends React.Component {
  componentDidMount() {
    //call the loadAnimation to start the animation
    lottie.loadAnimation({
      container: this.animBox,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData
    });
  }

  render() {
    return (
        <div className="day-box" ref={ ref => this.animBox = ref}></div>
    );
  }
}

export default Day;
