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
	}
});

class Home extends Component {
    static displayName = Home.name;

render() {
    const { classes } = this.props;
    return (
        <div className={classes.divStyle}>
            <Button variant="contained" color="primary" component={Link} to="/attendee" className={classes.buttonStyle}>
                I am an attendee
          </Button>
            <Button variant="contained" color="primary" component={Link} to="/vendor" className={classes.buttonStyle2}>
                I am a vendor
            </Button>
            <Button variant="contained" color="primary" component={Link} to="/register_event" className={classes.buttonStyle}>
                I am an event coordinator
            </Button>
        </div>
    );
  }
}

export default withStyles(useStyles)(Home);
