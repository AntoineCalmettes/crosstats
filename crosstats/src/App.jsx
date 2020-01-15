import React from 'react';
import './App.css';
import { Home, CreateWodRoute } from './routes';
import {
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
  
      <div>
        <Switch>

        <Route path="/create/wod">
            <CreateWodRoute />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
      );
  }
  
export default App;