import React, { Component } from 'react';
import './TitlePageDisplay.css';
import $ from 'jquery';
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";



class TitlePageDisplay extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data_uploaded_online: 0
    };

    this.calculateDataUploaded = this.calculateDataUploaded.bind(this);
    this.fadeInComplete = this.fadeInComplete.bind(this);
    this.fadeOutComplete = this.fadeOutComplete.bind(this);
  }

  componentDidMount() {

  //     $( ".main-div" ).animate({
  //
  //         opacity: 1,
  //         "padding-top": "-=70",
  //
  // }, 2000, function() {
  //     $( this ).after( $( this ).fadeInComplete );
  //   });

     //window.location.assign(window.location.origin);


      const mainDiv = document.getElementById("main-div-id")
      TweenMax.to(mainDiv, 2, {"padding-top": "-=70px", autoAlpha: 1, onComplete: this.fadeInComplete})

      const shadowDiv = document.getElementById("shadow-id")
      TweenMax.to(shadowDiv, 1, {opacity: .4, delay: 2} )



  }

    fadeInComplete() {

     console.log("In Complete")

        const myDiv = document.getElementById("main-div-id")
      TweenMax.to(myDiv, 1, { autoAlpha: 0, onComplete: this.fadeOutComplete, delay: 3})


  }

  fadeOutComplete() {

       console.log("Out Complete")

      window.location.assign(window.location.href + 'adalinesgd');


  }


  calculateDataUploaded() {


  }

  render() {


    var data_uploaded = this.state.data_uploaded_online


    return (
      <div className="main-div" id="main-div-id">

        <h2 className="main-title">CaptivateData</h2>
        <h2 className="sub-title">Making datascience easier to learn through intelligent tutor systems.</h2>

        <div className="shadow" id="shadow-id"> </div>

      </div>
    );
  }
}

export default TitlePageDisplay;
