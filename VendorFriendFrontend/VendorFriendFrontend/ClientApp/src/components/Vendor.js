import React, { Component } from 'react';
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import PropTypes from 'prop-types';
import { makeStyles, withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './Home.css';

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
});

class Vendor extends Component {
    static displayName = Vendor.name;

render() {
    const { classes } = this.props;
    return (
        <div className={classes.divStyle}>
            <Button variant="contained" color="primary" component={Link} to="/" className={classes.buttonStyle}>
            I already have a vendor account
            </Button>
            <Button variant="contained" color="primary" component={Link} to="/vendor/request" className={classes.buttonStyle}>
            I'm requesting a vendor account at an event
            </Button>
      </div>
    );
  }
}

export default withStyles(useStyles)(Vendor);