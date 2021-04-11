import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/Home';
import Attendee from './components/Attendee';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import { createMuiTheme, makeStyles, MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Vendor from './components/Vendor';
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
		    <Route path='/addproduct/:vendorName' component={AddProduct} />
        <Route path='/attendee' component={Attendee} />
        <Route exact path='/vendor' component={Vendor} />
        <Route exact path='/register_vendor' component={VendorRequest} />
        <Route path='/register_event' component={EventRequest} />
        <Route path='/register_for_event/:eventName' component={VendorRequestForm} />
        <Route path='/vendorPage/:vendorName' component={Vendor} />
        <Route path='/browse' component={BrowseEvent} />
        </Layout>
      </MuiThemeProvider>
    );
  }
}
