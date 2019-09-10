import React, { Component } from 'react';
import './HintSection.css';
import Q1_Part1 from './Q1_Part1.js'
import Q1_Part2 from './Q1_Part2.js'

import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";

// import {SplitText} from "gsap/SplitText";




class HintSection extends Component {


    constructor(props) {
        super(props);

    }

    componentDidMount() {


    }

    showHint() {

        var tl = new TimelineLite

        TweenMax.to("#hint-section-id", 1, {bottom: "0px"})


        console.log("show hint pressed")
        // tl.staggerFromTo("#hint-text-id", 0.5,
        //     {opacity: 0, bottom: -80},
        //     {opacity: 1, bottom: 0}, 0.05);

        //
        // var mySplitText = new SplitText("#hint-text-id", {type:"words,chars"})
        //
        // var chars = mySplitText.chars; //an array of all the divs that wrap each character
        //
        // TweenMax.set("#hint-text-id", {perspective:400});
        //
        // tl.staggerFrom(chars, 0.8, {opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50"}, 0.01, "+=0");

    }


    hideHint() {

        var tl = new TimelineLite

        TweenMax.to("#hint-section-id", 1, {bottom: "-100px"})

    }


    render() {

        if(this.props.showHint) {
            this.showHint()
        }
        else {

            this.hideHint()

        }

        return (

            <div className="hint-section" id="hint-section-id" onClick={this.showHint}>

                <div className="hint-text" id="hint-text-id"> HINT: There are 16 ounces in 1 lb. How do you convert oz to lbs?</div>

            </div>
        );
    }
}

export default HintSection;
