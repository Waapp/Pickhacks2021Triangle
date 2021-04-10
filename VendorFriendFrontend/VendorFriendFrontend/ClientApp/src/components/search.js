import React, { Component } from 'react';
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import PropTypes from 'prop-types';
import { makeStyles, withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/Input';
import InputProps from '@material-ui/core/Input';
import './search.css';

const useStyles = theme => ({
    divStyle: {
        display: "flex",
        flexDirection: "column",
    },
    fieldStyle: {
        position: "absolute",
        top: "50%",
        left: "50%",
        height: "10vh",
        transform: "translate(-50%, -50%)",
    },
});

class search extends Component {
    static displayName = search.name;

render() {
    const { classes } = this.props;
    return (
        <div className={classes.divStyle}>
            <form className={classes.fieldStyle} noValidate autoComplete="off">
                <TextField 
                id="searchField" 
                label="Outlined" 
                variant="outlined"
                placeholder="Search for product..."
                color="primary"
                />
            </form>
        </div>
    );
  }
}

export default withStyles(useStyles)(search);
