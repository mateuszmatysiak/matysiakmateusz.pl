import React from 'react';
import Theme from '../assets/styles/Theme';
import GlobalStyle from '../assets/styles/globalStyles.js';

const Page = ({ children }) => (
  <Theme>
    <GlobalStyle />
    {children}
  </Theme>
);

export default Page;
