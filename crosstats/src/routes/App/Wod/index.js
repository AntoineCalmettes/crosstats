import { Wod } from '../../../components/Wod/index';
import { WodCreate } from '../../../components/Wod/create/WodCreate';
import React from 'react';
import { Router, Route } from 'react-router'
import history from '../../../services/historyService';
export default function WodRouter() {
    return (
        <Router history={history}>
            <Route path="/app/wod" component={Wod} />
            <Route path="/app/wod/create" component={WodCreate} />
            <Route path="/app/wod/update/:wodId" component={Wod} />
        </Router>
    );
}