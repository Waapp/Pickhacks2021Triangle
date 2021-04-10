import React, { Component } from 'react';
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import PropTypes from 'prop-types';
import { makeStyles, withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
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

class BrowseEvent extends Component {
    static displayName = BrowseEvent.name;
    constructor(props) {
        super(props);
        this.state = { vendors: [], loading: true, eventName: '' };
      }
    async Searched(eventName) {
        this.getEvent(eventName);
        
    }

render() {
    const { classes } = this.props;
    return (
        <div className={classes.divStyle}>
            <form className={classes.fieldStyle} autoComplete="on">
                <Paper elevation={3} className={classes.paperStyle}>
                <InputBase placeholder="Type name of event" 
                    inputProps={{ 'aria-label': 'search'}}
                    onKeyPress={(ev) => {
                        if (ev.key === 'Enter') {
                        this.Searched(ev.target.value);
                        ev.preventDefault();
                        }
                    }}/>
                </Paper>
                {this.state.loading ? 
                <p><em>Try searching an event!</em></p>:
                
                this.state.vendors.map((vendor) => (
                    <Card variant="outlined" className={classes.cardStyle}>{vendor.vendorName}</Card>
                ))
                }
            </form>
            <Button variant="contained" color="primary" component={Link} to="/attendee" className={classes.backButtonStyle}>
            Back
            </Button>
        </div>
    );
  }
  async populateProducts(eventId) {
    const response = await fetch(`api/Vendors/ByEventId/${eventId}`);
      const data = await response.json();
      console.log(data)
    this.setState({ vendors: data, loading: false });
  }
  async getEvent(eventName) {
    const requestOptions = {
        method: 'Get',
        headers: { 'Content-Type': 'application/json' },
    }
    const response = await fetch(`api/Events/${eventName}`, requestOptions);
    const data = await response.json();
    console.log(data[0].eventId)
    this.populateProducts(data[0].eventId);
  }
}

export default withStyles(useStyles)(BrowseEvent);
