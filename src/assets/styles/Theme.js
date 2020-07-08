import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  palette: {
    white: 'rgba(255, 255, 255, 0.9)',
    grey: 'rgba(148, 148, 149, 0.9)',
    black: {
      light: '#202022',
      normal: '#1D1D1F',
      dark: '#151515',
    },
  },
  breakpoints: {
    xs: '360px',
    sm: '768px',
    md: '1024px',
    lg: '1440px',
    xl: '1920px',
  },
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
