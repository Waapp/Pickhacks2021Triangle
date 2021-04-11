import React, { Component } from 'react';
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import PropTypes from 'prop-types';
import { makeStyles, withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { useHistory, useParams } from 'react-router-dom';


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
        fontSize: "2vh",
        width: "fit-content",
        display: "flex",
        flexDirection: "column",
    }
});

class VendorRequestForm extends Component {
    static displayName = VendorRequestForm.name;
    constructor(props) {
        super(props);
        this.state = { events: [], loading: true,
            vendorName: 'Vendor Name',
            vendorLocation: 'Location',
            vendorDescription: 'Description',
            vendorHours: 'Vendor Hours',
            ownerName: 'Owner ID',
            eventName: this.props.match.params.eventName,
        };
      }
      handleEventName = (event) => {
        this.setState({
          vendorName: event.target.value,
        });
      };
      handleLocation = (event) => {
        this.setState({
          vendorLocation: event.target.value,
        });
      };
      handleDescription = (event) => {
        this.setState({
          vendorDescription: event.target.value,
        });
      };
      handleHours = (event) => {
        this.setState({
          vendorHours: event.target.value,
        });
      };
      handleOwner = (event) => {
        this.setState({
          ownerName: event.target.value,
        });
      };

      handleSubmit = (event) => {
        this.getEvent(this.state.eventName);
      };

      

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.divStyle}>
                <Paper elevation={3} className={classes.paperStyle}>Enter your vendor information here:
                <TextField value={this.state.vendorName} onChange={this.handleEventName} />
                <TextField value={this.state.vendorLocation} onChange={this.handleLocation} />
                <TextField value={this.state.vendorDescription} onChange={this.handleDescription} />
                <TextField value={this.state.vendorHours} onChange={this.handleHours} />
                <TextField value={this.state.ownerName} onChange={this.handleOwner} />
                </Paper>
                <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                Submit Vendor Application
                </Button>
            </div>
        );
    }
    async getEvent(eventName) {
        const requestOptions = {
            method: 'Get',
            headers: { 'Content-Type': 'application/json' },
        }
        const response = await fetch(`api/Events/${eventName}`, requestOptions);
        const data = await response.json();
        if(data[0] != undefined) {
            console.log(data[0].eventId)
            let vendorObject = {
                "VendorName": this.state.vendorName,
                "VendorLocation": this.state.vendorLocation,
                "VendorDescription": this.state.vendorDescription,
                "VendorHours": this.state.vendorHours,
                "ApprovedVendor": true,
                "EventId": data[0].eventId,
                "OwnerId": 1,
            };
            this.submitVendor(vendorObject);
        }
    }
    async submitVendor(vendorObject) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(vendorObject)
        }
        console.log(requestOptions.body)
      const response = await fetch(`api/Vendors`, requestOptions);
        const data = await response.json();
        console.log(data)
      this.setState({ events: data, loading: false });
    }
  }

export default withStyles(useStyles)(VendorRequestForm);