import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#F2F3F8",
    },
  },
  // typography: {
  //   fontFamily: ["Pacifico", "cursive"].join(","),
  // },
});

const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;
