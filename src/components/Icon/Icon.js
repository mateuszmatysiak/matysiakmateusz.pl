import React from 'react';

const Icon = ({ StyledIcon, children, onClick, contrastIcon, mobile }) => (
  <StyledIcon onClick={onClick} contrastIcon={contrastIcon} mobile={mobile}>
    {children}
  </StyledIcon>
);

export default Icon;