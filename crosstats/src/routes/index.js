import React from 'react';
import { Switch } from "react-router-dom";
import WodRouter from './Wod/index'
import { SignIn } from './SignIn/index'
import Route from './Route/RouteWrapper';
import { Dashboard } from './Dashboard';
import { SignUp } from '../components/SignUp';

export default function Routes() {
    return (
            <Switch>

                <Route path="/" exact component={SignIn}></Route>

                <Route path="/signUp" exact component={SignUp}></Route>

                <Route path="/dashboard" component={Dashboard} isPrivate></Route>

                <Route path="/wod" component={WodRouter} isPrivate></Route>

                <Route component={SignIn}></Route>

            </Switch>
    );
}