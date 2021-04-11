import React, { Component } from 'react';
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import { makeStyles, withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const useStyles = theme => ({
    divStyle: {
        display: "flex",
        flexDirection: "column",
    },
    buttonStyle: {
      margin: "4vh",
      height: "10vh",
      marginTop: "10%",
      fontSize: "3",
      Wrap: "True"
    },
    paperStyle: {
        background: "skyblue",
        margin: "4vh",
        padding: "1vh",
        fontSize: "2vh",
        display: "flex",
        flexDirection: "column",
    },
    backButtonStyle: {
      position: "absolute",
      bottom: "5%",
      left: "5%"
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
                <TextField placeholder={this.state.eventName} onChange={this.handleEventName} />
                <TextField placeholder={this.state.eventLocation} onChange={this.handleLocation} />
                <TextField placeholder={this.state.eventDescription} onChange={this.handleDescription} />
                <TextField placeholder={this.state.eventHours} onChange={this.handleHours} />
                <TextField placeholder={this.state.ownerName} onChange={this.handleOwner} />
                </Paper>
                <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                Submit Event
                </Button>
                <Button variant="contained" color="primary" component={Link} to="/" className={classes.backButtonStyle}>
                Back
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