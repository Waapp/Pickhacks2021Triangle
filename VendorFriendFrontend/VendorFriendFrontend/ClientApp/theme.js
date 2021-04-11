import { createMuiTheme } from 'material-ui/styles';
import indigo from 'material-ui/colors/indigo';
import pink from 'material-ui/colors/pink';
import red from 'material-ui/colors/red';
import { Avatar } from '@material-ui/core';

export default createMuiTheme({
  palette: {
    primary: pink,
    secondary: indigo // Indigo is probably a good match with pink
  }
});

const buttonTheme = theme => ({
  palette: {
    background: {
      primary: "blue",
      secondary: "white",
      other: "grey",
    },
    textColorVariants: {
      primary: "black",
      secondary: "white",
    },
  },
  typography: {
    fontFamily: {
      primary: "Times New Roman",
      secondary: "Arial Black"
    }
  },
  icons: {
    endIcon: {
      primary : <Avatar src={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Save_font_awesome.svg/768px-Save_font_awesome.svg.png'}></Avatar>,
      secondary: <Avatar src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Ic_shopping_cart_48px.svg/768px-Ic_shopping_cart_48px.svg.png'}></Avatar>,
    }
  },
  variant: {
    primary: contained,
    secondary: outlined
  },
});

export default actualBackground = {
  background: {
    primary: pink,
  }
}

// Backgrounds
// 