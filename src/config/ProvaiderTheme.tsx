import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
import { ReactNode } from "react";

type ThemeProvaiderProps = {
  children: ReactNode;
};

const ProvaiderTheme = ({ children }: ThemeProvaiderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ProvaiderTheme;
