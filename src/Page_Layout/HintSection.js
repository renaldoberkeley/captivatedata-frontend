import React, {Component} from 'react';
import '../css/HintSection.css';
import Q1_Part1 from '../Question1/Q1_Part1.js'
import Q1_Part2 from '../Question1/Q1_Part2.js'

import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";

class HintSection extends Component {


    constructor(props) {
        super(props);

    }

    showHint() {

        var tl = new TimelineLite

        TweenMax.to("#hint-section-id", 1, {bottom: "0px"})
        console.log("show hint pressed")

    }


    hideHint() {

        var tl = new TimelineLite
        TweenMax.to("#hint-section-id", 1, {bottom: "-100px"})

    }


    render() {

        if (this.props.showHint) {
            this.showHint()
        }
        else {
            this.hideHint()
        }

        return (

            <div className="hint-section" id="hint-section-id" onClick={this.showHint}>

                <div className="hint-text" id="hint-text-id"> HINT: There are 16 ounces in 1 lb. How do you convert oz
                    to lbs?
                </div>

            </div>
        );
    }
}

export default HintSection;
