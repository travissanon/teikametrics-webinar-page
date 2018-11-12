import React, { Component } from 'react';

import dotsLeft from '../assets/dots-left.png';
import dotsRight from '../assets/dots-right.png';

class Hero extends Component {
  render() {
    let component;
    switch(this.props.selected) {
      case 0:
        component = <Service />;
        break;
      case 1:
        component = <Flywheel />;
        break;
      case 2:
        component = <Agencies />;
        break;
      default:
        component = <Flywheel />;
    }
    return(
      <div>
        {component}
      </div>
    )
  }
}

const Flywheel = () => {
  return (
  <div>
    This is "flywheel"
  </div>
  )
}

const Service = () => {
  return (
  <div>
    This is "service"
  </div>
  )
}

const Agencies = () => {
  return (
  <div>
    This is "agencies"
  </div>
  )
}

export default Hero;