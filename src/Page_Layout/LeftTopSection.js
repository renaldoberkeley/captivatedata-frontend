import React, { Component } from 'react';
import '../css/LeftTopSection.css';

class LeftTopSection extends Component {



    constructor(props) {
        super(props);

    }

    render() {

        return (

            <div className="left-top-section">

                <img className="ferret-gif" loop="infinite"/>

            </div>
        );
    }
}

export default LeftTopSection;
