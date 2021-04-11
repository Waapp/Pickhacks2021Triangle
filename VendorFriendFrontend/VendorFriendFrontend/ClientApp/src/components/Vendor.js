import React, { Component } from 'react';
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import PropTypes from 'prop-types';
import { makeStyles, withStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card'
import './Home.css';

const useStyles = (theme) =>({
    divStyle: {
        display: "flex",
        flexDirection: "column",
    },
    buttonStyle: {
        margin: "4vh",
        height: "10vh",
        marginBottom: "20%",
        fontSize: "3",
        Wrap: "True"
    },
    backButtonStyle: {
        position: "absolute",
        bottom: "5%",
        left: "5%"
    },
    unstyledButton: {
        border: "0"
    },
    cardStyle: {
        margin: "5vh",
    }
});

function VendorSignup(vendorPage)
{
    const classes = useStyles();
    console.log(classes)
    if(vendorPage.vendorPage == false)
    {
    return(
    <div style={classes.divStyle}>
        <Button variant="contained" color="primary" component={Link} to="/register_vendor" style={classes.buttonStyle}>
        Signup for an event as a vendor
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/vendor" style={classes.buttonStyle}>
        I already have a vendor account
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/" style={classes.buttonStyle}>
        Back
        </Button>
    </div>
    )
    }else{
        return(<div></div>)
    }
}
class Vendor extends Component {
    static displayName = Vendor.name;
    constructor(props) {
        super(props);
        this.state = {vendorPage: false, products: [], loading: true, vendorName: this.props.match.params.vendorName};
      }
    
    componentDidMount() {
        if (this.state.vendorName != null)
        {
            console.log(this.state.vendorName)
            this.populateProducts(this.state.vendorName)
            this.state.vendorPage=true
        }
    }

    render() {
    const { classes } = this.props;
    return (
        <div className={classes.divStyle}>
            <VendorSignup vendorPage={this.state.vendorPage} />
            {
                this.state.products.map((product) => (
                <Button component={Link} to ="/vendor" className={classes.unstyledButton}>
                    <Card variant="outlined" className={classes.cardStyle}>{product.productName}</Card>
                </Button>
            ))
            }
      </div>
    );
  }
  async populateProducts(vendorName) {
    const response = await fetch(`api/Products/${vendorName}`);
      const data = await response.json();
      console.log(data)
    this.setState({ products: data, loading: false });
  }
}

export default withStyles(useStyles)(Vendor);