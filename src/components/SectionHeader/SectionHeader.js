import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const StyledSectionHeader = styled.h2`
  margin-bottom: 30px;
  font-size: 1.2rem;
  letter-spacing: 4px;
  text-transform: uppercase;

  ${breakpoint('md')`
    display: none;
  `}
`;

const SectionHeader = ({ children }) => {
  return <StyledSectionHeader>{children}</StyledSectionHeader>;
};

export default SectionHeader;
