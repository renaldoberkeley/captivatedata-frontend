import React, { Component } from 'react';
import './SomeComponent.css';
import $ from 'jquery';
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";

class SomeComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };

    this.someMethod = this.someMethod.bind(this);
  }

  render() {

    return (
      <div className="" id="">
      </div>
    );
  }
}

export default SomeComponent;
