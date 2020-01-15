import React, { useState } from 'react';
import './App.css';
import Routes from './routes/index';
import { Router } from 'react-router-dom';
import history from './services/historyService';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { useDarkMode } from './services/themeService';
import Toggle from './components/shared/Toggle/Toggle'

function App() {
  
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <Router history={history}>
      <ThemeProvider theme={themeMode}>
        <>
          <GlobalStyles />
          <Toggle theme={theme} toggleTheme={toggleTheme} />
          <Routes />
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;