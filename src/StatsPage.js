import React, { Component } from 'react';
import './StatsPage.css';
import Q1_Part1 from './Q1_Part1.js'
import Q1_Part2 from './Q1_Part2.js'
import HintSection from './HintSection.js'

import {GoogleCharts} from 'google-charts'
import { Chart } from "react-google-charts";
import TimelineLite from "gsap/TimelineLite";




class StatsPage extends Component {


    constructor(props) {
        super(props);


        this.state = {
            showHint: false
        };



    }

    componentDidMount() {

        GoogleCharts.load(this.drawPlot);

        const statsDiv = document.getElementById("stats-page-id")


        var tl = new TimelineLite({id: "timeline"})

        tl.to(statsDiv, 1, {bottom: "0px"})

    }

    drawPlot() {

        var data = new GoogleCharts.api.visualization.arrayToDataTable([
            ['Galaxy', 'Distance', 'Brightness'],
            ['Canis Major Dwarf', 8000, 23.3],
            ['Sagittarius Dwarf', 24000, 4.5],
            ['Ursa Major II Dwarf', 30000, 14.3],
            ['Lg. Magellanic Cloud', 50000, 0.9],
            ['Bootes I', 60000, 13.1]
        ]);

        var options = {
            width: 800,
            chart: {
                title: 'Nearby galaxies',
                subtitle: 'distance on the left, brightness on the right'
            },
            bars: 'horizontal', // Required for Material Bar Charts.
            series: {
                0: { axis: 'distance' }, // Bind series 0 to an axis named 'distance'.
                1: { axis: 'brightness' } // Bind series 1 to an axis named 'brightness'.
            },
            axes: {
                x: {
                    distance: {label: 'parsecs'}, // Bottom x-axis.
                    brightness: {side: 'top', label: 'apparent magnitude'} // Top x-axis.
                }
            }
        };


        //
        // var chart = new GoogleCharts.api.visualization.Bar(document.getElementById('dual_x_div'));
        //
        //
        //
        //
        // var cost_data = this.state.cost_data
        //
        //
        // data.addColumn('number', 'Cost');
        // data.addColumn('number', 'Column 2');
        // data.addColumn('number', 'Column 3');
        //
        //
        // data.addRows(cost_data.length);
        //
        // cost_data.forEach(function (value, i) {
        //
        //     data.setCell(i, 0, value);
        //     data.setCell(i, 1, 0);
        //     data.setCell(i, 2, 0);
        //
        // });
        //
        //
        // var table = new GoogleCharts.api.visualization.Table(document.getElementById('table-data-id'));
        // table.draw(data, {showRowNumber: true, width: '100%', height: '100%', allowHtml: true});
        //
        // new GoogleCharts.api.visualization.events.addListener(table, 'select', function() {
        //     var row = table.getSelection()[0].row;
        //     alert('You selected ' + data.getValue(row, 0));
        //
        // });



    }


    render() {


        return (

            <div className="stats-page" id="stats-page-id">

                <div className="top-banner">

                    <div className="data-page"> Captivate Tutor Data </div>

                </div>

                <div className="nav-bar">

                    <div className="skill-meter">SKILL METER</div>

                    <div className="model-settings">MODEL SETTINGS</div>

                    <div className="data-table">DATA TABLE</div>

                    <div className="learning-curve">LEARNING CURVE</div>

                    <div></div>

                    <div></div>

                    <div></div>

                    <div></div>

                    <div></div>

                    <div></div>

                    <div></div>

                    <div></div>

                    <div></div>

                    <div></div>

                    <div></div>

                </div>


                <div className="bottom-section-tutor-data">

                    <div className="bottom-left-tutor-data"></div>

                    <div className="bottom-right-tutor-data">


                        <Chart
                            width={'700px'}
                            height={'300px'}
                            chartType="BarChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                [
                                    'Element',
                                    'Density',
                                    { role: 'style' },
                                    {
                                        sourceColumn: 0,
                                        role: 'annotation',
                                        type: 'string',
                                        calc: 'stringify',
                                    },
                                ],
                                ['Value Isolation', 54.94, '#blue', null],
                                ['Metrics Units of Measurement', 10.49, 'blue', null],
                                ['Implicent Coefficient', 91.3, 'blue', null],
                                ['Metrics Units Measurement', 21.45, 'blue', null],
                            ]}
                            options={{
                                title: 'Skill Meter for Skills Tested',
                                width: 800,
                                height: 400,
                                bar: { groupWidth: '95%' },
                                legend: { position: 'none' },
                            }}
                            // For tests
                            rootProps={{ 'data-testid': '6' }}
                        />


                    </div>

                </div>

            </div>
        );
    }
}

export default StatsPage;
