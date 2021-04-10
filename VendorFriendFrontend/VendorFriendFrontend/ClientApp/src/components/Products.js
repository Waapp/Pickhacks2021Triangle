import React, { Component } from 'react';
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import PropTypes from 'prop-types';
import { makeStyles, withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/Input';
import InputProps from '@material-ui/core/Input';
import Card from '@material-ui/core/Card'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase'

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
        variant: "outlined",
        transform: "translate(-50%, -50%)",
    },
    paperStyle: {
        marginBottom: "10%",
        padding: "1vh",
        fontSize: "2vh",
        width: "fit-content",
        display: "flex",
        flexDirection: "column",
    },
    cardStyle: {
        
    }
});

class search extends Component {
    static displayName = search.name;
    constructor(props) {
        super(props);
        this.state = { vendors: [], loading: true, eventName: '' };
      }
    async Searched(productName) {
        this.getEvent(this.state.eventName, productName);
        
    }

render() {
    const { classes } = this.props;
    return (
        <div className={classes.divStyle}>
            <form className={classes.fieldStyle} autoComplete="on">
                <Paper elevation={3} className={classes.paperStyle}>
                <InputBase placeholder="Type name of event" 
                    inputProps={{ 'aria-label': 'search'}}
                    onChange={(ev)=>{
                        this.state.eventName = ev.target.value}}/>
                <InputBase placeholder="Type name of product" 
                    inputProps={{ 'aria-label': 'search'}}
                    onKeyPress={(ev) => {
                        if (ev.key === 'Enter') {
                        this.Searched(ev.target.value);
                        ev.preventDefault();
                        }
                    }}/>
                </Paper>
                {this.state.loading ? 
                <p><em>Loading...</em></p>:
                
                this.state.vendors.map((vendor) => (
                    <Card variant="outlined" className={classes.cardStyle}>{vendor.vendorName}</Card>
                ))
                }
            </form>
        </div>
    );
  }
  async populateProducts(productName, eventId) {
    const response = await fetch(`api/Vendors/Search/${productName}/${eventId}`);
      const data = await response.json();
      console.log(data)
    this.setState({ vendors: data, loading: false });
  }
  async getEvent(eventName, productName) {
    const requestOptions = {
        method: 'Get',
        headers: { 'Content-Type': 'application/json' },
    }
    const response = await fetch(`api/Events/${eventName}`, requestOptions);
    const data = await response.json();
    console.log(data[0].eventId)
    this.populateProducts(productName, data[0].eventId);
  }
}

export default withStyles(useStyles)(search);
