import React, {Component} from 'react';
import './css/TableDisplay.css';
import $ from 'jquery';
import {Chart} from "react-google-charts";
import {GoogleCharts} from 'google-charts'
import {Link} from "react-router-dom";
import axios from "axios";

import ReactSpeedometer from "react-d3-speedometer"
//Checkout other speedometer : https://github.com/palerdot/react-d3-speedometer

// make charts responsive : https://codepen.io/flopreynat/pen/BfLkA


const options = {
    title: "Company Performance",
    curveType: "function",
    legend: {position: "bottom"},
    pageSize: 30,
    showRowNumber: "true"
};

var options_gauge = {
    width: 580,
    height: 320,
    min: 0,
    max: 100,
    greenFrom: 80,
    greenTo: 100,
    redFrom: 0,
    redTo: 30,
    yellowFrom: 30,
    yellowTo: 80,
    minorTicks: 5
};

const getRandomNumber = () => {
    let num = (Math.random() * 100).toFixed(1);
    return Number(num)
};

class TableDisplay extends Component {


    getData = () => {
        return [
            ["Label", "Value"],
            ["Knowledge", this.state.knowledge],
        ];
    };

    constructor(props) {
        super(props);

        this.state = {
            // networkSpeed: 1,
            knowledge: 0,
            // cpu: 55,
            cost_data: []
        };

        this.processRequest = this.processRequest.bind(this);

        this.drawTable = this.drawTable.bind(this);
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {

        axios.get('http://162.243.146.199/adalineSGD/').then(response => this.processRequest(response))
            .catch(function (error) {
                console.log(error);
            });


        //Load the charts library with a callback
        GoogleCharts.load(this.drawTable);

        this.intervalID = setInterval(() => {
            this.setState(state => {
                return {
                    ...state,
                    knowledge: getRandomNumber(),
                };
            });
        }, 3000);
    }


    processRequest(response) {

        if (response.status == 200) {
            this.setState({
                cost_data: response.data.adaline_cost_data
            });

            this.drawTable()
        }


    }


    drawTable() {

        var data = new GoogleCharts.api.visualization.DataTable();
        var cost_data = this.state.cost_data
        data.addColumn('number', 'Cost');
        data.addColumn('number', 'Column 2');
        data.addColumn('number', 'Column 3');
        data.addRows(cost_data.length);

        cost_data.forEach(function (value, i) {

            data.setCell(i, 0, value);
            data.setCell(i, 1, 0);
            data.setCell(i, 2, 0);

        });


        var table = new GoogleCharts.api.visualization.Table(document.getElementById('table-data-id'));
        table.draw(data, {showRowNumber: true, width: '100%', height: '100%', allowHtml: true});

        new GoogleCharts.api.visualization.events.addListener(table, 'select', function () {
            var row = table.getSelection()[0].row;
            alert('You selected ' + data.getValue(row, 0));

        });

    }


    render() {


        return (
            <div>
                <p><Link to="/"> Home </Link></p>


                <div className="table-section-container">
                    <p className="table-section-title"> Adaline Stochastic Gradient Descent Cost Data</p>
                    <div className="table-data-container">
                        <div className="table-data" id="table-data-id"></div>
                    </div>

                </div>

                <p className="measure-skill-text"> Measuring your knowledge level for the skill tested. </p>

                <Chart
                    chartType="Gauge"
                    width="100%"
                    height="400px"
                    data={this.getData()}
                    options={options_gauge}
                />

            </div>
        );
    }
}

export default TableDisplay;
