import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { useDispatch } from 'react-redux';

const StyledSectionWrapper = styled.section`
  margin-top: 100px;

  ${breakpoint('md')`
    &:nth-child(1) {
      margin-top: 0;
    }
  `}
`;

const SectionWrapper = ({ children, id }) => {
  const dispatch = useDispatch();
  const sectionRef = useRef(null);

  useEffect(() => {
    dispatch({
      type: 'SET_SECTION_REFS',
      payload: { id, ref: sectionRef },
    });
  }, [dispatch, id]);

  return <StyledSectionWrapper ref={sectionRef}>{children}</StyledSectionWrapper>;
};

export default SectionWrapper;
