import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import App from './components/App'

class Routes extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={App} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Routes