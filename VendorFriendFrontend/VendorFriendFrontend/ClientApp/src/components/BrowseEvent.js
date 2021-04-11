import React, { Component } from 'react';
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import { makeStyles, withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import './Home.css';

const useStyles = theme => ({
    divStyle: {
        display: "flex",
        flexDirection: "column",
        height: "80vh",
    },
    paperStyle: {
		background: "lightgrey",
        display: "flex",
        flexDirection: "column",
        marginTop:"2vh",
    },
    backButtonStyle: {
        position: "absolute",
        top: "0%",
        left: "0%",
		transform: "translate(50%, 50%)"
    },
    cardStyle: {
        margin: "5%",
        fontSize: "3vh",
        padding: "1vh",
        height: '7vh',
    },
    outputFormatting: {
        marginTop: "2vh",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: 'auto',
    },
    searchDiv: {
        height: '7vh',
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "1vh",
        fontSize: "3vh",
    },
    searchBar: {
    },
    trySearch: {
        marginTop: "2vh",
        alignSelf: "center",
    }
});

class BrowseEvent extends Component {
    static displayName = BrowseEvent.name;
    constructor(props) {
        super(props);
        this.state = { vendors: [], loading: true, eventName: '' };
      }
    async Searched(eventName) {
        let error = this.getEvent(eventName);
    }

render() {
    const { classes } = this.props;
    return (
        <div className={classes.divStyle}>
                <Paper elevation={3} className={classes.paperStyle}>
                <div className ={classes.searchDiv}>
                    <SearchIcon style={{fontSize: "2.5vh"}}/>
                    <TextField 
                        className={classes.searchBar}
                        placeholder="Type name of event"
                        InputProps={{ style: {fontSize:"2.5vh"}}}
                        onKeyPress={(ev) => {
                            if (ev.key === 'Enter') {
                            this.Searched(ev.target.value);
                            ev.preventDefault();
                            }
                        }}/>
                </div>
                </Paper>
                <Paper className={classes.outputFormatting}>
                {
                this.state.loading ? 
                <p className = {classes.trySearch}>Try searching for an event!</p>:
                this.state.vendors.map((vendor) => (
                    <Card variant="outlined" className={classes.cardStyle} component={Link} to={`/vendorPage/${vendor.vendorName}`}>{`${vendor.vendorName}`}</Card>
                ))
                }
                </Paper>
            <Button variant="contained" color="tertiary" component={Link} to="/attendee" className={classes.backButtonStyle}>
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
    if(data[0] !== undefined)
    { 
        console.log(data[0].eventId)
        this.populateProducts(data[0].eventId);
    }
    else
    {
        return true
    }
  }
}

export default withStyles(useStyles)(BrowseEvent);
