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
      TweenMax.to(mainDiv, 2, {"padding-top": "-=70px", opacity: 1, onComplete: this.fadeInComplete})


      //const custombackground = document.getElementById("custom-background-id")

     // TweenMax.to(custombackground, 10, {scale:1.2, transformOrigin:"50% 50%"})

     // const shadowDiv = document.getElementById("shadow-id")
     // TweenMax.to(shadowDiv, 1, {opacity: .2, delay: 2} )



  }

    fadeInComplete() {

      // return

     console.log("In Complete")

        const myDiv = document.getElementById("main-div-id")
      TweenMax.to(myDiv, 1, { autoAlpha: 0, onComplete: this.fadeOutComplete, delay: 3})


  }

  fadeOutComplete() {

       console.log("Out Complete")

      window.location.assign(window.location.href + 'sample');


  }


  calculateDataUploaded() {


  }

  render() {


    var data_uploaded = this.state.data_uploaded_online


    return (
        <div>

        {/*<div className="custom-background" id={"custom-background-id"}>*/}

         {/*</div>*/}


          <div className="main-div" id="main-div-id">

               {/*<div className="shadow" id="shadow-id"> </div>*/}

              <div className="title-section">
            {/*<h2 className="main-title">CaptivateData</h2>*/}
            {/*<h2 className="sub-title">Using intelligent tutor systems to make computer science more captivating.</h2>*/}
              </div>


          </div>

        </div>

    );
  }
}

export default TitlePageDisplay;
