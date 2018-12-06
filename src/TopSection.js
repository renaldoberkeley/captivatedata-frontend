import React, { Component } from 'react';
import './TopSection.css';
import LeftTopSection from './LeftTopSection.js'
import RightTopSection from './RightTopSection.js'


class TopSection extends Component {



    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }


    render() {

        return (

            <div className="top-section">

                <LeftTopSection></LeftTopSection>
                <RightTopSection></RightTopSection>


            </div>
        );
    }
}

export default TopSection;
