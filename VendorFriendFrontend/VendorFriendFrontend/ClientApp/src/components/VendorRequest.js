import React, { Component } from 'react';
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import PropTypes from 'prop-types';
import { makeStyles, withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const useStyles = theme => ({
    divStyle: {
        display: "flex",
        flexDirection: "column",
    },
    buttonStyle: {
        margin: "4vh",
        height: "10vh",
        marginTop: "5vh",
        fontSize: "3vh"
    },
    paperStyle: {
        margin: "4vh",
        padding: "1vh",
        fontSize: "3vh",
        width: "fit-content",
    }
});

class VendorRequest extends Component {
    static displayName = VendorRequest.name;
    constructor(props) {
        super(props);
        this.state = { events: [], loading: true };
      }
    
      Searched(eventName) {
        this.populateEvents(eventName);
      }
      

render() {
    this.populateEvents();
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : <p></p>;
    const { classes } = this.props;
    return (
        <div className={classes.divStyle}>
            <Paper elevation={3} className={classes.paperStyle}>What event would you like to request to be a vendor at?</Paper>

        </div>
    );
  }
  async populateEvents() {
    const response = await fetch('api/Events/test');
      const data = await response.json();
      console.log(data)
    this.setState({ events: data, loading: false });
  }
}

export default withStyles(useStyles)(VendorRequest);