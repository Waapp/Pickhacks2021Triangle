import React, { Component } from 'react';
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import { makeStyles, withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { createNoSubstitutionTemplateLiteral } from 'typescript';

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
            productPrice: '$',
            productDescription: 'Description',
            ownerName: 'Owner ID',
            vendorName: this.props.match.params.vendorName,
            failed: false
        };
      }
    
      handleproductName = (product) => {
        this.state.productName = product.target.value;
      };
      handlePrice = (product) => {
        this.state.productPrice = product.target.value;
      };
      handleDescription = (product) => {
        this.state.productDescription = product.target.value;

      };
      handleOwner = (product) => {
        this.state.ownerName = product.target.value;

      };

      handleSubmit = (vendorName) => {
        console.log("test")
        const re = /^\$?[0-9]+(\.[0-9][0-9])?$/;

        // if value is not blank, then test the regex
    
        if (re.test(this.state.productPrice)) {
          this.submitproduct(this.state.vendorName);
        }
        else
        {
          this.setState({failed: true});
        }
        
      };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.divStyle}>
                <Paper elevation={3} className={classes.paperStyle}>Enter your product information here:
                  <TextField placeholder={this.state.productName} onChange={this.handleproductName} />
                  <TextField placeholder={this.state.productPrice} onChange={this.handlePrice}/>
                  <TextField placeholder={this.state.productDescription} onChange={this.handleDescription} />
                  <TextField placeholder={this.state.ownerName} onChange={this.handleOwner} />
                  <div>
                    {this.state.failed ? <h1>enter a valid price for your product</h1> : <h1></h1>}
                  </div>
                </Paper>
                <Button variant="contained" color="primary" onClick={() =>this.handleSubmit()}>
                Add product
                </Button>
                <Button variant="contained" color="tertiary" component={Link} to="/" className={classes.backButtonStyle}>
                Back
                </Button>
            </div>
        );
    }
  async submitproduct(vendorName) {
      const response = await fetch(`api/Vendors/ByVendorName/${vendorName}`)
      let vendor = await response.json()
      console.log(vendor.vendorName)
      let productObject = {
        "ProductName": this.state.productName,
        "ProductCost": this.state.productPrice,
        "ProductDescription": this.state.productDescription,
        "ProductAvailableOnline": true,
        "VendorId": vendor.vendorId,
      };
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(productObject)
      }
      console.log(requestOptions.body)
      const responseTwo = await fetch(`api/Products`, requestOptions);
      const data = await responseTwo.json();
      console.log(data)
      this.setState({ products: data, loading: false });
      if(responseTwo.ok == true){
        this.props.history.push(`/vendorPage/${vendorName}`)
      };
    }
}

export default withStyles(useStyles)(AddProduct);