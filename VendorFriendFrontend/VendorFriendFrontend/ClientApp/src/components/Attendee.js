import React, { Component } from 'react';
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
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
        marginBottom: "20%",
        fontSize: "3",
        Wrap: "True"
    },
    backButtonStyle: {
        position: "absolute",
        bottom: "5%",
        left: "5%"
    }
});

class Attendee extends Component {
    static displayName = Attendee.name;

render() {
    const { classes } = this.props;
    return (
        <div className={classes.divStyle}>
            <Button variant="contained" color="primary" component={Link} to="/products" className={classes.buttonStyle}>
            Search Products
            </Button>
            <Button variant="contained" color="primary" component={Link} to="/browse" className={classes.buttonStyle}>
            Browse Vendors
            </Button>
            <Button variant="contained" color="primary" component={Link} to="/" className={classes.backButtonStyle}>
            Back
            </Button>
      </div>
    );
  }
}

export default withStyles(useStyles)(Attendee);