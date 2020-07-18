import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../SectionHeader';
import SectionWrapper from '../SectionWrapper';
import breakpoint from 'styled-components-breakpoint';
import { getTooltip, getTooltipMessage } from '../../utils/tooltip';
import { getAction } from '../../utils/action';

const StyledContactContainer = styled.div`
  ${breakpoint('md')`
    &:hover > a {
      opacity: 0.5;
    }

    &:hover > a:hover {
      opacity: 1;
    }
  `}
`;

const StyledContactWrapper = styled.a`
  position: relative;
  flex-direction: column;
  height: 82px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 2px;
  margin-bottom: 5px;
  background-color: ${({ theme }) => theme.palette.light};
  border-radius: 3px;
  cursor: pointer;
  ${getTooltip()}

  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.palette.normal};
  }

  ${breakpoint('md')`
    margin-bottom: 10px;
    transition: transform .2s ease-in-out, opacity .2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  `}
`;

const StyledContactTitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.palette.secondary};

  ${breakpoint('sm')`
    font-size: 1.4rem;
  `}
`;

const StyledContactSubtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 10px;

  ${breakpoint('sm')`
    font-size: 1.4rem;
  `}

  ${breakpoint('lg')`
    font-size: 1.6rem;
  `}
`;

const Contact = (data) => {
  return (
    <SectionWrapper id="contact">
      <SectionHeader>Kontakt</SectionHeader>
      <StyledContactContainer>
        {data.edges.map(({ node: { name, value } }) => (
          <StyledContactWrapper
            key={name}
            href={`${getAction(name)}${value}`}
            title={getTooltipMessage(name)}
            target="_blank"
            rel="noopener"
            rel="noreferrer"
          >
            <StyledContactTitle>{name}</StyledContactTitle>
            <StyledContactSubtitle>{value}</StyledContactSubtitle>
          </StyledContactWrapper>
        ))}
      </StyledContactContainer>
    </SectionWrapper>
  );
};

export default Contact;
