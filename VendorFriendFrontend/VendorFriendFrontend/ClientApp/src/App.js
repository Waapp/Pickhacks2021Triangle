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
import EventRequest from './components/EventRequest';
import VendorRequestForm from './components/VendorRequestForm';

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
        <Route exact path='/vendor/request' component={VendorRequest} />
        <Route path='/register_event' component={EventRequest} />
        <Route path='/vendor/request/:eventName' component={VendorRequestForm} />
        </Layout>
      </MuiThemeProvider>
    );
  }
}
