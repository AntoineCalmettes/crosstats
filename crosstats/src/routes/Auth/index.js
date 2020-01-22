import { SignIn } from './SignIn/index';
import { SignUp } from './SignUp/index';
import React from 'react';
import { Router, Route } from 'react-router'
import history from '../../services/historyService';
import { Switch } from "react-router-dom";

export default function AuthRouter() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={SignIn} />
                <Route path="/signUp" component={SignUp} />
                <Route path="**" component={SignIn} />
            </Switch>
        </Router>
    );
}