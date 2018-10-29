import React, { Component } from 'react';
import './AdelineSGDContainer.css';
import axios from 'axios'
import {Link} from "react-router-dom";

import { render } from 'react-dom'


var xhr;

class AdelineSGDContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cost_data: []
    };

    this.processRequest = this.processRequest.bind(this);
  }

  componentDidMount() {

    // xhr = new XMLHttpRequest();
    // xhr.open("GET", "http://127.0.0.1:8000/adalineSGD/", true);
    // xhr.responseType = 'json';
    // xhr.send();
    //
    // xhr.addEventListener("readystatechange", this.processRequest, false)

      axios.get('http://162.243.146.199/adalineSGD/').then(response => this.processRequest(response) )
    .catch(function (error) {
      console.log(error);
    });



  }

  processRequest(response) {

      if(response.status == 200)
      {
        this.setState({
            cost_data: response.data.adaline_cost_data
        });
      }


  }

  render() {

    var cost_data = this.state.cost_data

      const costtItems = cost_data.map((cost) =>
        <li key={cost.toString()}>
        {cost}
         </li>
      );

    return (
      <div className="">
          <p> <Link to="/"> Home </Link> </p>
          <p>Hello AdalineSGD!!!!!!!!!</p>
          <p>This is the cost data from Adaline Stochastic Gradient Descent Algorithm</p>
          <ul>{costtItems}</ul>

      </div>
    );
  }
}

export default AdelineSGDContainer;
