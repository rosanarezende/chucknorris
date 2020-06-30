import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  "palette": {
    "common": {
      "black": "#000",
      "white": "#fff"
    },
    "background": {
      "paper": "#fff",
      "default": "#fafafa"
    },
    "primary": {
      "light": "rgba(125, 192, 215, 1)",
      "main": "rgba(41, 171, 225, 1)",
      "dark": "rgba(33, 126, 166, 1)",
      "contrastText": "#fff"
    },
    "secondary": {
      "light": "rgba(250, 179, 136, 1)",
      "main": "rgba(241, 90, 36, 1)",
      "dark": "rgba(191, 72, 29, 1)",
      "contrastText": "#fff"
    },
    "error": {
      "light": "#e57373",
      "main": "#f44336",
      "dark": "#d32f2f",
      "contrastText": "#fff"
    },
    "text": {
      "primary": "rgba(0, 0, 0, 0.87)",
      "secondary": "rgba(0, 0, 0, 0.54)",
      "disabled": "rgba(0, 0, 0, 0.38)",
      "hint": "rgba(0, 0, 0, 0.38)"
    }
  }
});
