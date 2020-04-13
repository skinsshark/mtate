import React from 'react';
import './Day.css';

import lottie from 'lottie-web';

class Day extends React.Component {
  componentDidMount() {
    const { stamp } = this.props;
    
    //call the loadAnimation to start the animation
    lottie.loadAnimation({
      container: this.animBox,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require(`./lottie/${stamp}.json`)
    });
  }

  render() {
    return (
        <div className="day-box" ref={ ref => this.animBox = ref}></div>
    );
  }
}

export default Day;
