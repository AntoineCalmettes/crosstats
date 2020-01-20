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
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
function App() {

  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const MuiTheme = createMuiTheme({
    palette: {
      primary: {
        main: '#4044FF'
      },
      secondary: {
        main: '#E33E7F'
      }
    }
  },
  )

  return (
    <Router history={history}>
      <MuiThemeProvider theme={MuiTheme}>
        <ThemeProvider theme={themeMode}>
          <>
            <GlobalStyles />
            {/* <Toggle theme={theme} toggleTheme={toggleTheme} /> */}

            <Routes />
          </>
        </ThemeProvider>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;