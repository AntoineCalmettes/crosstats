import React from 'react';
import './App.css';
import Routes from './routes/index';
import { Router } from 'react-router-dom';
import history from './services/historyService';

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;