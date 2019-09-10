import React, { Component } from 'react';
import TitlePageDisplay from './Startup/TitlePageDisplay';
import TableDisplay from "./TableDisplay";
import SampleQuestion from "./Page_Layout/SampleQuestion"
import StatsPage from "./StatsPage"


import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom'
import HiScreen from "./Startup/HiScreen";


class App extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
        <HashRouter>
        <div>
            <Switch>
                <Route path="/table" component={TableDisplay} />
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
