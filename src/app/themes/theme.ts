import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#000000",
    },
    primary: {
      main: "#37a39a",
    },
  },
  typography: {
    fontFamily: ["Poppins", "Josefin Sans", "sans-serif"].join(","),
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
      paper: "#0a0a0a",
    },
    text: {
      primary: "#37a39a",
    },
    primary: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: ["Poppins", "Josefin Sans", "sans-serif"].join(","),
  },
});
