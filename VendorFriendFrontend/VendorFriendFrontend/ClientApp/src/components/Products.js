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
        margin: "4vh",
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
        this.state = { products: [], loading: true };
      }

    Searched(productName) {
        this.populateEvents(productName);
    }

render() {
    const { classes } = this.props;
    return (
        <div className={classes.divStyle}>
            <form className={classes.fieldStyle} autoComplete="on">
                <Paper elevation={3} className={classes.paperStyle}>
                <InputBase placeholder="Search for products…" 
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
                
                this.state.products.map((event) => (
                    <Card variant="outlined" className={classes.cardStyle}>{event.productName}</Card>
                ))
                }
            </form>
        </div>
    );
  }
  async populateEvents(productName) {
    const response = await fetch(`api/Products/${productName}`);
      const data = await response.json();
      console.log(data)
    this.setState({ products: data, loading: false });
  }
}

export default withStyles(useStyles)(search);
