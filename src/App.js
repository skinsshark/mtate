import React from 'react';
import './App.css';

import lottie from 'lottie-web';
import animationData from './lottie/0412.json';

class App extends React.Component {
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
        <div ref={ ref => this.animBox = ref}></div>
    );
  }
}

export default App;
