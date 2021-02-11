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
  breakpoints: {},
  fontSize: {
    xsmall: 10,
    small: 12,
    medium: 14,
    regular: 16,
    larger: 18,
    xlarge: 20,
    xxlarge: 24
  },
  fonts: {
    400: 'Nunito_400Regular',
    '400i': 'Nunito_400Regular_Italic',
    600: 'Nunito_600SemiBold',
    700: 'Nunito_700Bold',
    900: 'Nunito_900Black'
  },
  homeColors: {
    blue: {
      800: '#5386E4'
    },
    black: {
      800: '#000000',
      700: '#4C4B63',
      600: '#949396',
      500: '#6B797D',
      400: '#ABA8B2',
      200: '#C3C3C3'
    }
  }
});

export type Theme = typeof theme;
export default theme;