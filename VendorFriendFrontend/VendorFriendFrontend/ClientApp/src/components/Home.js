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

class Home extends Component {
    static displayName = Home.name;

render() {
    const { classes } = this.props;
    return (
        <div className={classes.divStyle}>
            <Button variant="contained" color="primary" component={Link} to="/search" className={classes.buttonStyle}>
                I am an attendee
          </Button>
            <Button variant="contained" color="primary" component={Link} to="/vendor" className={classes.buttonStyle}>
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
