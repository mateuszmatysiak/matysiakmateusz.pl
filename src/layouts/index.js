import React from 'react';
import Theme from '../assets/styles/Theme';
import GlobalStyle from '../assets/styles/globalStyles.js';

const Layout = ({ children }) => (
  <Theme>
    <GlobalStyle />
    {children}
  </Theme>
);

export default Layout;
