import React, { Component } from 'react';
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import './Home.css';

const useStyles = theme => ({
    divStyle: {
        display: "flex",
        flexDirection: "column",
		alignItems: "center",
		justify: "center"
    },
    buttonStyle: {
		background: "linear-gradient(10deg, purple 20%, blue 100%)",
        margin: "4vh",
        height: "16vh",
        marginBottom: "7%",
		width: "80%",
		fontSize: "140%",
		textAlign: "center"
    },
    buttonStyle2: {
		background: "linear-gradient(10deg, blue 20%, purple 100%)",
        margin: "4vh",
        height: "16vh",
        marginBottom: "7%",
		width: "80%",
		fontSize: "140%",
		textAlign: "center"
	},
    backButtonStyle: {
        position: "absolute",
        top: "0%",
        left: "0%",
        transform: "translate(50%, 50%)"
    },
    unstyledButton: {
        border: "0"
    },
    cardStyle: {
        margin: "1vh",
        height: "7vh",
        width: "35vh",
        display: "flex",
        alignItems: "center",
        padding: "1vh",
        fontSize:"1.8vh",
        textTransform: "capitalize",
        justifyContent: "space-between",
    },
    moreIcon: {
    },
    vendorInformation: {
        marginTop: "1vh",
        fontSize: "1.5vh",
        width: "100%",
        height:"fit-content",
        padding: "1vh",

    }
});

function VendorSignup(vendorPage, vendorName)
{
    const classes = useStyles();
    if(vendorPage.vendorPage == false)
    {
    return(
    <div className={classes.divStyle}>
        <Button variant="contained" color="primary" component={Link} to="/register_vendor" style={classes.buttonStyle}>
        Signup for an event as a vendor
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/browse" style={classes.buttonStyle2}>
        I already have a vendor account
        </Button>
        
    </div>
    )
    }else{
        return(<div className={classes.divStyle}>
            <Button variant="contained" color="primary" component={Link} to={`/addproduct/${vendorPage.vendorName}`} style={classes.buttonStyle}>
                Add a product!
            </Button>
        </div>)
    }
}

function MoreInfo(vendorDescription)
{
    return(
    <CardContent>
        {vendorDescription.vendorDescription}
    </CardContent>)
}

class Vendor extends Component {
    static displayName = Vendor.name;
    constructor(props) {
        super(props);
        this.state = {vendorPage: false, vendorInfo: null, products: [], loading: true, vendorName: this.props.match.params.vendorName, moreInfo: null};
      }
    
    componentDidMount() {
        if (this.state.vendorName != null)
        {
            this.populateProducts(this.state.vendorName)
            this.getVendorInfo(this.state.vendorName)
            this.state.vendorPage=true
        }
    }

    render() {
    const { classes } = this.props;
    return (
        <div className={classes.divStyle}>
            {this.state.vendorPage == true ?
            <Paper className={classes.vendorInformation}>
                {this.state.vendorInfo == null ? "Loading vendor data" : <h2>{this.state.vendorInfo.vendorName}</h2>} 
                {this.state.vendorInfo == null ? " " : <p>{this.state.vendorInfo.vendorDescription}</p>}
            </Paper>
            : " "
            }
            {
                this.state.products.map((product) => (
                    <Card variant="outlined" className={classes.cardStyle}>
                        {this.state.moreInfo == product.productName ? " " : product.productName}
                        <IconButton className = {classes.moreIcon} onClick={() => this.setState({moreInfo: product.productName})}>
                            {this.state.moreInfo == product.productName ? <MoreInfo vendorDescription={product.productDescription}/> : <MoreHorizIcon />}
                        </IconButton>
                    </Card>
            ))
            }
            <VendorSignup vendorPage={this.state.vendorPage} vendorName={this.state.vendorName} />
            <Button variant="contained" color="tertiary" component={Link} to="/" className={classes.backButtonStyle}>
                Back
            </Button>
      </div>
    );
  }
  async getVendorInfo(vendorName) {
      console.log(vendorName)
      const response = await fetch(`api/Vendors/ByVendorName/${vendorName}`);
      console.log(response)
      const data = await response.json();
      console.log(data)
      this.setState({vendorInfo: data})
  }
  async populateProducts(vendorName) {
    const response = await fetch(`api/Products/${vendorName}`);
      const data = await response.json();
      console.log(data)
    this.setState({ products: data, loading: false });
  }
}

export default withStyles(useStyles)(Vendor);