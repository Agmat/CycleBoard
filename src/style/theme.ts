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
    h5: {
      fontWeight: '600',
    },
    h6: {
      fontSize: '15px',
    },
    subtitle1: {
      fontSize: '14px',
      fontWeight: '600',
    },
    subtitle2: {
      fontSize: '14px',
      fontWeight: '400',
    },
  },
});

export default theme;
