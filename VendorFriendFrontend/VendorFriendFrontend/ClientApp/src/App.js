import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/Home';
import Attendee from './components/search';
import { createMuiTheme, makeStyles, MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import CssBaseline from '@material-ui/core/CssBaseline';
import Vendor from './components/Vendor';
import VendorRequest from './components/VendorRequest';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    const theme = createMuiTheme({
      palette: {
          background: {
              default: "LightBlue"
          }
      }
    });
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/search' component={Attendee} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route exact path='/vendor' component={Vendor} />
        <Route path='/vendor/request' component={VendorRequest} />
        </Layout>
      </MuiThemeProvider>
    );
  }
}
