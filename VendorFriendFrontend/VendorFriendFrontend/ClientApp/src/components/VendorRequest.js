import React, { Component } from 'react';
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import PropTypes from 'prop-types';
import { makeStyles, withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase'
import Card from '@material-ui/core/Card'

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

class VendorRequest extends Component {
    static displayName = VendorRequest.name;
    constructor(props) {
        super(props);
        this.state = { events: [], loading: true };
      }
    
      Searched(eventName) {
        this.populateEvents(eventName);
      }
      

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.divStyle}>
                <Paper elevation={3} className={classes.paperStyle}>What event would you like to request to be a vendor at?
                <InputBase placeholder="Search…" 
                    className ={classes.searchBar}
                    inputProps={{ 'aria-label': 'search' }}
                    onKeyPress={(ev) => {
                        if (ev.key === 'Enter') {
                        this.Searched(ev.target.value);
                        ev.preventDefault();
                        }
                    }}/>
                </Paper>
                {this.state.loading ? 
                <p><em>Loading...</em></p>:
                
                this.state.events.map((event) => (
                    <Card variant="outlined" className={classes.cardStyle} component={Link} to={`/vendor/request/${event.eventName}`}>{event.eventName}</Card>
                ))
                }
            </div>
        );
    }
  async populateEvents(eventName) {
    const response = await fetch(`api/Events/${eventName}`);
      const data = await response.json();
      console.log(data)
    this.setState({ events: data, loading: false });
  }
}

export default withStyles(useStyles)(VendorRequest);