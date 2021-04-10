import React, { Component } from 'react';
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import PropTypes from 'prop-types';
import { makeStyles, withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';

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

class EventRequest extends Component {
    static displayName = EventRequest.name;
    constructor(props) {
        super(props);
        this.state = { events: [], loading: true, 
            eventName: 'Event Name',
            eventLocation: 'Location',
            eventDescription: 'Description',
            eventHours: 'Event Hours',
            ownerName: 'Owner ID',
        };
      }
    
      handleEventName = (event) => {
        this.setState({
          eventName: event.target.value,
        });
      };
      handleLocation = (event) => {
        this.setState({
          eventLocation: event.target.value,
        });
      };
      handleDescription = (event) => {
        this.setState({
          eventDescription: event.target.value,
        });
      };
      handleHours = (event) => {
        this.setState({
          eventHours: event.target.value,
        });
      };
      handleOwner = (event) => {
        this.setState({
          ownerName: event.target.value,
        });
      };

      handleSubmit = (event) => {
        let eventObject = {
            "EventName": this.state.eventName,
            "EventLocation": this.state.eventLocation,
            "EventDescription": this.state.eventDescription,
            "EventHours": this.state.eventHours,
            "EventActive": true,
            "OwnerId": 1,
        };
        console.log(eventObject)
        this.submitEvent(eventObject);
      };

      

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.divStyle}>
                <Paper elevation={3} className={classes.paperStyle}>Enter your event information here:
                <TextField value={this.state.eventName} onChange={this.handleEventName} />
                <TextField value={this.state.eventLocation} onChange={this.handleLocation} />
                <TextField value={this.state.eventDescription} onChange={this.handleDescription} />
                <TextField value={this.state.eventHours} onChange={this.handleHours} />
                <TextField value={this.state.ownerName} onChange={this.handleOwner} />
                </Paper>
                <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                Submit Event
                </Button>
            </div>
        );
    }
  async submitEvent(eventObject) {
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(eventObject)
      }
      console.log(requestOptions.body)
    const response = await fetch(`api/Events`, requestOptions);
      const data = await response.json();
      console.log(data)
    this.setState({ events: data, loading: false });
  }
}

export default withStyles(useStyles)(EventRequest);