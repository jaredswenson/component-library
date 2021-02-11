import { createTheme } from "@shopify/restyle";

const theme = createTheme({
  colors: {
    purple: "#5A31F4",
    green: '#0ECD9D',
    red: 'red',
    blue: 'blue',
    
    black: "#0B0B0B",
    white: "#F0F2F3"
  },
  spacing: {},
  breakpoints: {}
});

export type Theme = typeof theme;
export default theme;