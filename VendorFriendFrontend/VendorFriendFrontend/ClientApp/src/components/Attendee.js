import React, { Component } from 'react';
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import { makeStyles, withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './Home.css';

const useStyles = theme => ({
    divStyle: {
        display: "flex",
        flexDirection: "column",
		alignItems: "center",
		justify: "center"
    },
    buttonStyle: {
		background: "linear-gradient(10deg, purple 20%, blue 100%)",
        margin: "4vh",
        height: "16vh",
        marginBottom: "7%",
		width: "80%",
		fontSize: "140%",
		textAlign: "center"
    },
    buttonStyle2: {
		background: "linear-gradient(10deg, blue 20%, purple 100%)",
        margin: "4vh",
        height: "16vh",
        marginBottom: "7%",
		width: "80%",
		fontSize: "140%",
		textAlign: "center"
	},
    backButtonStyle: {
        position: "absolute",
        top: "0%",
        left: "0%",
		transform: "translate(50%, 50%)"
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
            <Button variant="contained" color="primary" component={Link} to="/browse" className={classes.buttonStyle2}>
            Browse Vendors
            </Button>
            <Button variant="contained" color="tertiary" component={Link} to="/" className={classes.backButtonStyle}>
            Back
            </Button>
      </div>
    );
  }
}

export default withStyles(useStyles)(Attendee);