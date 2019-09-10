import React, {Component} from 'react';
import '../css/Q1_Part1.css';
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";
import $ from 'jquery';


class Q1_Part1 extends Component {


    constructor(props) {
        super(props);

        this.buttonPressed = this.buttonPressed.bind(this);
        this.buttonPressedDosage = this.buttonPressedDosage.bind(this);
        this.buttonPressedWeight = this.buttonPressedWeight.bind(this);

    }


    buttonPressedWeight(e) {
        var weightValue = document.getElementById("weight-id").value;
        document.getElementById("weight-id").style.color = "black"
    }


    buttonPressedDosage(e) {

        var weightValue = document.getElementById("weight-id").value;
        if (weightValue == "1.625") {
            document.getElementById("weight-id").style.color = "green"
        }
        else {
            document.getElementById("weight-id").style.color = "red"
        }

    }

    showSecondQuestion() {
        const q1Part1 = document.getElementById("q1-part1-id")
        const q1Part2 = document.getElementById("q1-part2-id")

        var tl = new TimelineLite({id: "timeline"})
        tl.to(q1Part1, 1, {left: "-=20px", marginTop: "-=20px", id: "q1"})
        TweenMax.to(q1Part2, .5, {left: "563px"});
    }

    buttonPressed(e) {

        if (e.keyCode == 13) {
            // Do something
            this.showSecondQuestion()

        }
    }


    render() {

        return (

            <div className="q1-part1" id="q1-part1-id">

                <div className="instructions-q1-part1"> 1. Seperate Values from Text</div>

                <div className="q1-part1-values-field">

                    <table className="q1-part1-table">

                        <tbody>

                        <tr>
                            <td>Weight</td>
                            <td>=</td>
                            <td><input type="text" name="weight" id="weight-id" onClick={this.props.hideHint}
                                       onKeyUp={this.buttonPressedWeight}/></td>
                            <td>lbs</td>
                        </tr>

                        <tr>
                            <td>Dosage</td>
                            <td>=</td>
                            <td><input type="text" name="dosage" onClick={this.buttonPressedDosage}/></td>
                            <td>mg/kg</td>
                        </tr>

                        <tr>
                            <td>Concentration</td>
                            <td>=</td>
                            <td><input type="text" name="concentration" onKeyUp={this.buttonPressed}/></td>
                            <td>mg/mL</td>
                        </tr>

                        </tbody>

                    </table>


                </div>
            </div>
        );
    }
}

export default Q1_Part1;
