import React, { Component } from 'react';
import './Q1_Part2.css';
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";


class Q1_Part2 extends Component {



    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }



    render() {

        return (

            <div className="q1-part2" id="q1-part2-id">

                <div className="instructions-q1-part2"> 2. Calculate Mass of Ferret</div>

                <div className="q1-part2-values-field">

                    <table className="q1-part2-table">

                        <tr>
                            <td><input type="text" name="weight" onClick={this.props.hideHint}/></td>
                            <td>
                                <select>
                                    <option value="lbs">lbs</option>
                                    <option value="oz">oz</option>
                                    <option value="mg">mg</option>
                                </select>
                            </td>
                            <td>x</td>
                            <td>(.45 / 1 lb)</td>
                            <td>=</td>
                            <td><input type="text" name="weight" onClick={this.props.hideHint}/></td>
                            <td>
                                <select>
                                    <option value="lbs">lbs</option>
                                    <option value="oz">oz</option>
                                    <option value="mg">mg</option>
                                </select>
                            </td>


                        </tr>

                    </table>


                </div>
            </div>

        );
    }
}

export default Q1_Part2;
