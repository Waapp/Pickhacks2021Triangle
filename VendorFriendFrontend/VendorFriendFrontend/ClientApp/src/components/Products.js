import React, { Component } from 'react';
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import { makeStyles, withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

const useStyles = theme => ({
    divStyle: {
        display: "flex",
        flexDirection: "column",
    },
    fieldStyle: {
        height: "10vh",
        variant: "outlined",
    },
    paperStyle: {
		background: "lightgray",
        margin: "4vh",
        padding: "1vh",
        fontSize: "2vh",
        display: "flex",
        flexDirection: "column",
    },
    backButtonStyle: {
        position: "absolute",
        top: "0%",
        left: "0%",
		transform: "translate(50%, 50%)"
    },
    cardStyle: {
        margin: "1vh",
        height: "7vh",
        width: "35vh",
        display: "flex",
        alignItems: "center",
        padding: "1vh",
        fontSize:"1.8vh",
        textTransform: "capitalize",
        justifyContent: "space-between",
    },
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
                <TextField placeholder="Type name of event"  
                    InputProps={{ style: {fontSize:"2.5vh"}}}
                    onChange={(ev)=>{
                        this.state.eventName = ev.target.value}}/>
                </Paper>
                <Paper elevation={3} className={classes.paperStyle}>
                <TextField placeholder="Type name of product" 
                    InputProps={{ style: {fontSize:"2.5vh"}}}
                    onKeyPress={(ev) => {
                        if (ev.key === 'Enter') {
                        this.Searched(ev.target.value);
                        ev.preventDefault();
                        }
                    }}/>
                </Paper>

                {
                this.state.vendors.map((vendor) => (
                    <Button component={Link} to={`/vendorPage/${vendor.vendorName}`}>
                        <Card variant="outlined" className={classes.cardStyle}>{vendor.vendorName}</Card>
                    </Button>
                ))
                }
            </form>
            <Button variant="contained" color="tertiary" component={Link} to="/attendee" className={classes.backButtonStyle}>
            Back
            </Button>
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
