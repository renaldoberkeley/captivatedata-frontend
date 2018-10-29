import React, { Component } from 'react';
import TitlePageDisplay from './TitlePageDisplay';
import AdelineSGDContainer from './AdelineSGDContainer';
import { render } from 'react-dom'

import { Link } from 'react-router-dom'



import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom'


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
                <Route exact path="/adalinesgd" component={AdelineSGDContainer} />
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
