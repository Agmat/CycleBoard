import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#171618',
      light: '#242424',
    },
    secondary: {
      main: '#999999',
    },
  },
  typography: {
    fontFamily: 'Inter',
    h6: {
      fontSize: '1rem',
    },
  },
});

export default theme;
