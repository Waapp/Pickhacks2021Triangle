import React, { Component } from 'react';
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import { makeStyles, withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';

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
    paperStyle: {
        margin: "4vh",
        padding: "1vh",
        fontSize: "2vh",
        width: "fit-content",
        display: "flex",
        flexDirection: "column",
    },
    backButtonStyle: {
      position: "absolute",
      bottom: "5%",
      left: "5%"
    }
});

class ProductRequest extends Component {
    static displayName = ProductRequest.name;
    constructor(props) {
        super(props);
        this.state = { products: [], loading: true, 
            productName: 'product Name',
            productPrice: 'Price',
            productDescription: 'Description',
            ownerName: 'Owner ID',
        };
      }
    
      handleproductName = (product) => {
        this.setState({
          productName: product.target.value,
        });
      };
      handleLocation = (product) => {
        this.setState({
          productLocation: product.target.value,
        });
      };
      handleDescription = (product) => {
        this.setState({
          productDescription: product.target.value,
        });
      };
      handleOwner = (product) => {
        this.setState({
          ownerName: product.target.value,
        });
      };

      handleSubmit = (product) => {
        let productObject = {
            "ProductName": this.state.productName,
            "ProductPrice": this.state.productPrice,
            "ProductDescription": this.state.productDescription,
            "ProductActive": true,
            "OwnerId": 1,
        };
        console.log(productObject)
        this.submitproduct(productObject);
      };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.divStyle}>
                <Paper elevation={3} className={classes.paperStyle}>Enter your product information here:
                <TextField value={this.state.productName} onChange={this.handleproductName} />
                <TextField value={this.state.productPrice} onChange={this.handlePrice} />
                <TextField value={this.state.productDescription} onChange={this.handleDescription} />
                <TextField value={this.state.ownerName} onChange={this.handleOwner} />
                </Paper>
                <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                Add product
                </Button>
                <Button variant="contained" color="primary" component={Link} to="/" className={classes.backButtonStyle}>
                Back
                </Button>
            </div>
        );
    }
  async submitproduct(productObject) {
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(productObject)
      }
      console.log(requestOptions.body)
    const response = await fetch(`api/products`, requestOptions);
      const data = await response.json();
      console.log(data)
    this.setState({ products: data, loading: false });
  }
}

export default withStyles(useStyles)(productRequest);