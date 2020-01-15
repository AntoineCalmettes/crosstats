import { Wod } from '../../components/Wod/index';
import { WodCreate } from '../../components/Wod/create/WodCreate';
import React from 'react';
import { Router, Route } from 'react-router'
import history from '../../services/historyService';
export default function WodRouter() {
    return (
        <Router history={history}>
            <Route path="/wod" component={Wod} />
            <Route path="/wod/create" component={WodCreate} />
            <Route path="/wod/update/:wodId" component={Wod} />
        </Router>
    );
}