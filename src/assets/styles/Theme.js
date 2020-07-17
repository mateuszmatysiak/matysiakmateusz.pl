import React, { useState, useEffect, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import { useDispatch } from 'react-redux';

const breakpoints = {
  xxs: 0,
  xs: 360,
  sm: 768,
  md: 1024,
  lg: 1280,
  xl: 1440,
  xxl: 1920,
};

const light = {
  breakpoints,
  palette: {
    primary: '#5e5eff',
    secondary: '#7464a1',
    light: '#ffffff',
    normal: '#e9e9eb',
    dark: '#F2F4F5',
  },
};

const dark = {
  breakpoints,
  palette: {
    primary: 'rgba(255, 255, 255, 0.9)',
    secondary: 'rgba(148, 148, 149, 0.9)',
    light: '#202022',
    normal: '#1D1D1F',
    dark: '#151515',
  },
};

const Theme = ({ children }) => {
  const dispatch = useDispatch();
  const [{ lightTheme }, setTheme] = useState({
    lightTheme: false,
  });

  const handleChangeTheme = useCallback(() => {
    setTheme({ lightTheme: !lightTheme });
    localStorage.setItem('lightTheme', !lightTheme);
  }, [lightTheme]);

  useEffect(() => {
    dispatch({
      type: 'SET_THEME',
      payload: {
        theme: {
          handleChangeTheme,
        },
      },
    });
  }, [dispatch, handleChangeTheme]);

  useEffect(() => {
    const localStorageLayout = localStorage.getItem('lightTheme');
    if (localStorageLayout) {
      setTheme({ lightTheme: JSON.parse(localStorageLayout) });
    }
  }, []);

  return <ThemeProvider theme={lightTheme ? light : dark}>{children}</ThemeProvider>;
};

export default Theme;
