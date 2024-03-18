import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#00e676",
    },
  },
  // typography: {
  //   fontFamily: ["Pacifico", "cursive"].join(","),
  // },
});

const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;
