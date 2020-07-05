import React from 'react';
import styled from 'styled-components';

const StyledSectionWrapper = styled.section`
  margin-top: 100px;
`;

const SectionWrapper = ({ children }) => {
  return <StyledSectionWrapper>{children}</StyledSectionWrapper>;
};

export default SectionWrapper;
