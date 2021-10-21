import { createTheme } from '@mui/material';
import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  colours: {
    primary: '#090909',
    secondary: '#424242',
    background: '#212121',
    text: '#FFFFFF',
    green: '#2e8c1b',
    red: '#c20101',
  },
  font: {
    primary: 'Roboto',
    secondary: 'Rubik',
  },
};

export const materialUI = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2483fa',
    },
    secondary: {
      main: '#1443fa',
    },
    text: {
      primary: '#FFFFFF',
    },
  },
});
