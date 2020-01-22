import React from 'react';
import { Dashboard } from './Dashboard';
import { NavBar } from '../../components/NavBar/index';
import { Router, Route } from 'react-router'
import history from '../../services/historyService';
import WodRouter from './Wod/index';
import { Switch } from "react-router-dom";
import { NotFound } from '../NotFound/index';

export default function AppRouter() {
    console.log('ok')
    return (
        <Router history={history}>

            <Route path="/app" component={NavBar}></Route>

            <Switch>
                <Route path="/app/dashboard" component={Dashboard}></Route>

                <Route path="/app/wod" component={WodRouter}></Route>

                <Route path="**" component={NotFound}></Route>
            </Switch>

        </Router>
    );
}