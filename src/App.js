import React, { Component } from 'react';
import TitlePageDisplay from './TitlePageDisplay';
import AdelineSGDContainer from './AdelineSGDContainer';
import TableDisplay from "./TableDisplay";
import SampleQuestion from "./SampleQuestion"
import StatsPage from "./StatsPage"



import { render } from 'react-dom'

import { Link } from 'react-router-dom'



import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom'
import HiScreen from "./HiScreen";




class App extends Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }


  render() {



    return (
        <HashRouter>
        <div>
            <Switch>
                <Route path="/table" component={TableDisplay} />
                <Route path="/adalinesgd" component={AdelineSGDContainer} />
                <Route path="/sample" component={SampleQuestion} />
                <Route path="/welcome" component={HiScreen} />
                <Route path="/stats" component={StatsPage} />

                <Route exact path="/" component={TitlePageDisplay} />
                <Route component={Whoops} />
            </Switch>
        </div>
        </HashRouter>

    );
  }
}

export const Whoops = ({ location }) => <div >

    No page Found at '{location.pathname}'
    <p> <Link to="/"> Home </Link> </p>

</div>

export default App;
