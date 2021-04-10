import { createMuiTheme } from 'material-ui/styles';
import indigo from 'material-ui/colors/indigo';
import pink from 'material-ui/colors/pink';
import red from 'material-ui/colors/red';

export default createMuiTheme({
  palette: {
    primary: pink,
    secondary: indigo // Indigo is probably a good match with pink
  }
});

export default buttonStyling = {
  background: {
    primary: "blue",
    secondary: "white",
    other: "grey",
  },
  typography: {
    colorVariants: {
      primary: "#000000",
      secondary: "#FFFFFF",
    },
    fontFamily: {
      primary: "Times New Roman",
      secondary: "Arial Black"
    }
  },
  icons: {
    endicon: {
      secondary: <Avatar src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Ic_shopping_cart_48px.svg/768px-Ic_shopping_cart_48px.svg.png'}></Avatar>,
    }
  },
  bordering: {
    primary: contained,
    secondary: outlined
  },
};

export default actualBackground = {

}