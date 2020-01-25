import React from 'react';
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
import { Provider } from "./services/App/provider";
import AppContext from "./services/App/appContext";

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const MuiTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: '#4044FF'
      },
    }
  });
  
  return (
    <Router history={history}>
    <MuiThemeProvider theme={MuiTheme}>
    <ThemeProvider theme={themeMode}>
    <>
    <GlobalStyles />
    <Provider>
    {/* <Toggle theme={theme} toggleTheme={toggleTheme} /> */}
    <AppContext.Consumer>
    {context => (
      <Routes />
      )}
      </AppContext.Consumer>
      </Provider>
      </>
      </ThemeProvider>
      </MuiThemeProvider>
      </Router>
      );
    }
    
    export default App;