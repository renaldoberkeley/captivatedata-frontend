import React, { Component } from 'react';
import './BottomSection.css';
import Q1_Part1 from './Q1_Part1.js'
import Q1_Part2 from './Q1_Part2.js'
import HintSection from './HintSection.js'
import TimelineLite from "gsap/TimelineLite";
import {TweenMax} from "gsap/TweenMax";


class BottomSection extends Component {


    constructor(props) {
        super(props);


        this.state = {
            showHint: false,
            showStats: false
        };

        this.showHint = this.showHint.bind(this);
        this.hideHint = this.hideHint.bind(this);

        this.showStats = this.showStats.bind(this);




    }

    componentDidMount() {

    }

    showHint(e) {

        this.setState({showHint: true});


    }

    hideHint() {
        this.setState({showHint: false});
    }

    showStats(e) {
        this.setState({showStats: true});

        window.location.assign(window.location.origin + '#/stats');



    }

    hideStats() {
        this.setState({showStats: false});
    }

    render() {

        var showHintButtonStyle = {
            display: "block",
        }

        if(this.state.showHint) {
            showHintButtonStyle = {
                display: "none",
            }
        }

        var showStatsButtonStyle = {
            display: "block",
        }

        if(this.state.showStats) {
            showStatsButtonStyle = {
                display: "none",
            }
        }

        return (

            <div className="bottom-section">

                <Q1_Part1 hideHint={this.hideHint}/>

                <Q1_Part2 />

                <div className="showHintButton" id="showHintButton-id" style={showHintButtonStyle}  onClick={this.showHint}>Hint</div>

                <div className="showStatsButton" id="showStatsButton-id" style={showStatsButtonStyle}  onClick={this.showStats}>Stats</div>


                <HintSection showHint={this.state.showHint}/>

            </div>
        );
    }
}

export default BottomSection;
