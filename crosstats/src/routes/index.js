import React from 'react';
import { Switch } from "react-router-dom";
import { NotFound } from './NotFound/index';
import Route from './Route/RouteWrapper';
import AuthRouter from './Auth/index';
import AppRouter from './App/index';

export default function Routes() {
    return (
        <Switch>

            <Route path="/" exact component={AuthRouter}></Route>
 
            <Route path="/app" isPrivate component={AppRouter}></Route>

        </Switch>
    );
}