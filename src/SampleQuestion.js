import React, { Component } from 'react';
import './SampleQuestion.css';
import Header from './Header.js'
import TopSection from './TopSection.js'
import BottomSection from './BottomSection.js'


class SampleQuestion extends Component {




    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }


    render() {

        return (

            <div className="main-section">

                <Header />

                <TopSection></TopSection>

                <BottomSection></BottomSection>

            </div>
        );
    }
}

export default SampleQuestion;
