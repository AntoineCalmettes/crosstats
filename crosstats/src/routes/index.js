import React from 'react';
import { Switch } from "react-router-dom";
import { NotFound } from './NotFound/index';
import Route from './Route/RouteWrapper';
import AuthRouter from './Auth/index';
import AppRouter from './App/index';
import {SignIn} from './Auth/SignIn/index'
import {SignUp} from './Auth/SignUp/index'

export default function Routes() {
    return (
        <Switch>
        
        <Route path="/" exact component={SignIn}></Route>
        
        <Route path="/signup" exact component={SignUp} />
        
        <Route path="/app" isPrivate component={AppRouter}></Route>
        
        <Route path="**" component={SignIn} />
        
        </Switch>
        );
    }