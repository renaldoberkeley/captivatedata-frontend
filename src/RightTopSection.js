import React, { Component } from 'react';
import './RightTopSection.css';
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






        // $('.question-text').each(function(){
        //     $(this).html($(this).text().replace(/(\w\))/g, "<span class='letter'>$&</span>"));
        // });
        //
        // anime.timeline({loop: false})
        //     .add({
        //         targets: '.question-text .letter',
        //         scale: [4,1],
        //         opacity: [0,1],
        //         translateZ: 0,
        //         easing: "easeOutExpo",
        //         duration: 950,
        //         delay: function(el, i) {
        //             return 70*i;
        //         }
        //     }).add({
        //     targets: '.question-text',
        //     opacity: 0,
        //     duration: 1000,
        //     easing: "easeOutExpo",
        //     delay: 1000
        // });

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
