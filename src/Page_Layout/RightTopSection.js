import React, { Component } from 'react';
import '../css/RightTopSection.css';
import $ from 'jquery';
import anime from 'animejs'
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";


class RightTopSection extends Component {



    constructor(props) {
        super(props);

    }

    componentDidMount() {
        const textDiv = document.getElementById("question-text-id")


        var tl = new TimelineLite({id: "timeline"})

        tl.to(textDiv, 1, {opacity: 1, delay: 2})
            .to(".bottom-section", 1, {opacity: 1})

    }

    render() {

        return (

            <div className="right-top-section" >
                <div className="question-text" id="question-text-id">The veterinarian wants to use Telazol (tiletamine and zolazepam) to restrain a ferret for a short diagnostic procedure. The dosage is 22mg/kg IM. This ferret weighs 1lb, 10oz. What is the dose in milligrams and milliliters of the product shown to be used on this ferret?  The Telazol solution has concentration 100mg/mL.</div>
            </div>
        );
    }
}

export default RightTopSection;
