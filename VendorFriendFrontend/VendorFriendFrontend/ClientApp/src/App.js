import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/Home';
import Attendee from './components/Attendee';
import Products from './components/Products';
import { createMuiTheme, makeStyles, MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import CssBaseline from '@material-ui/core/CssBaseline';
import Vendor from './components/Vendor';
import VendorLogin from './components/VendorLogin';
import VendorRequest from './components/VendorRequest';
import EventRequest from './components/EventRequest';
import VendorRequestForm from './components/VendorRequestForm';
import BrowseEvent from './components/BrowseEvent';

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
        <Route path='/products' component={Products} />
        <Route path='/attendee' component={Attendee} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route exact path='/vendor' component={Vendor} />
        <Route exact path='/vendorlogin' component={VendorLogin} />
        <Route exact path='/vendor/request' component={VendorRequest} />
        <Route path='/register_event' component={EventRequest} />
        <Route path='/vendor/request/:eventName' component={VendorRequestForm} />
        <Route path='/vendor/:vendorName' component={Vendor} />
        <Route path='/browse' component={BrowseEvent} />
        </Layout>
      </MuiThemeProvider>
    );
  }
}
