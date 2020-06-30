import React from 'react';
import { Provider } from 'react-redux'
import { history, store } from "./store"

import Routes from './routes';
import theme from './utils/theme';

import { MuiThemeProvider, CssBaseline } from "@material-ui/core";

import Appbar from './components/Appbar';
import Loading from './components/Loading';

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Appbar/>
        <Loading/>
        <Routes history={history} />
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;