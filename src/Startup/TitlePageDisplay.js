import React, {Component} from 'react';
import '../css/TitlePageDisplay.css';
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

        document.getElementById("body-id").style.background = "black";

        const mainDiv = document.getElementById("main-div-id")
        TweenMax.to(mainDiv, 2, {"padding-top": "-=70px", opacity: 1, onComplete: this.fadeInComplete})

    }

    fadeInComplete() {

        console.log("In Complete")

        const myDiv = document.getElementById("main-div-id")
        TweenMax.to(myDiv, 1, {autoAlpha: 0, onComplete: this.fadeOutComplete, delay: 3})


    }

    fadeOutComplete() {

        console.log("Out Complete")
        window.location.assign(window.location.href + 'welcome');

    }


    calculateDataUploaded() {

    }

    render() {


        var data_uploaded = this.state.data_uploaded_online

        return (
            <div>

                <div className="main-div" id="main-div-id">

                    <div className="title-section">

                    </div>

                </div>

            </div>

        );
    }
}

export default TitlePageDisplay;
