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
      top: "0%",
      left: "0%",
	  transform: "translate(50%, 50%)"
    },
	textFieldStyle: {
		margin: "4px",
		padding: "2px"
	}
});

class AddProduct extends Component {
    static displayName = AddProduct.name;
    constructor(props) {
        super(props);
        this.state = { products: [], loading: true, 
            productName: 'Product Name',
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
      handlePrice = (product) => {
        this.setState({
          productPrice: product.target.value,
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
            "ProductCost": this.state.productPrice,
            "ProductDescription": this.state.productDescription,
            "ProductAvailableOnline": true,
            "VenderId": 1,
        };
        console.log(productObject)
        this.submitproduct(productObject);
      };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.divStyle}>
                <Paper elevation={3} className={classes.paperStyle}>Enter your product information here:
                <TextField className={classes.textFieldStyle} placeholder={this.state.productName} onChange={this.handleproductName} />
                <TextField className={classes.textFieldStyle} placeholder={this.state.productPrice} onChange={this.handlePrice} />
                <TextField className={classes.textFieldStyle} placeholder={this.state.productDescription} onChange={this.handleDescription} />
                <TextField className={classes.textFieldStyle} placeholder={this.state.ownerName} onChange={this.handleOwner} />
                </Paper>
                <Button type="submit" variant="contained" color="primary" onClick={this.handleSubmit}>
                Add product
                </Button>
                <Button variant="contained" color="tertiary" component={Link} to="/" className={classes.backButtonStyle}>
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

export default withStyles(useStyles)(AddProduct);