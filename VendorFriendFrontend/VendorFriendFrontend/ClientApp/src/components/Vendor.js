import React, { Component } from 'react';
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import PropTypes from 'prop-types';
import { makeStyles, withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card'
import './Home.css';

const useStyles = theme => ({
    divStyle: {
        display: "flex",
        flexDirection: "column",
    },
    buttonStyle: {
        margin: "4vh",
        height: "10vh",
        marginTop: "20%",
        fontSize: "3",
        Wrap: "True"
    },
    backButtonStyle: {
        position: "absolute",
        bottom: "5%",
        left: "5%"
    }
});

class Vendor extends Component {
    static displayName = Vendor.name;
    constructor(props) {
        super(props);
        this.state = { products: [], loading: true };
      }

render() {
    const { classes } = this.props;
    return (
        <div className={classes.divStyle}>
            <Button variant="contained" color="primary" component={Link} to="/vendor" className={classes.buttonStyle}>
            I already have a vendor account
            </Button>
            <Button variant="contained" color="primary" component={Link} to="/" className={classes.backButtonStyle}>
            Back
            </Button>
            {this.state.products.map((event) => (
                <Card variant="outlined" className={classes.cardStyle}>{event.Vendor}</Card>
            ))
            }
      </div>
    );
  }
}

export default withStyles(useStyles)(Vendor);