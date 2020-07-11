import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const StyledSectionWrapper = styled.section`
  margin-top: 100px;

  ${breakpoint('md')`
    &:nth-child(1) {
      margin-top: 0;
    }
  `}
`;

const SectionWrapper = ({ children }) => {
  return <StyledSectionWrapper>{children}</StyledSectionWrapper>;
};

export default SectionWrapper;
