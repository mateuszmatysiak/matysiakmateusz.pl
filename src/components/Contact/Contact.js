import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../SectionHeader';
import SectionWrapper from '../SectionWrapper';
import arrow from '../../assets/images/arrow.svg';
import breakpoint from 'styled-components-breakpoint';
import { getTooltip, getTooltipMessage } from '../../utils/tooltip';
import { getAction } from '../../utils/action';

const StyledContactWrapper = styled.a`
    position: relative;
    height: 82px;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 2px;
    margin-bottom: 5px;
    background-color: ${({ theme }) => theme.palette.black.light};
    border-radius: 3px;
    cursor: pointer;

    &:nth-child(odd) {
      background-color: ${({ theme }) => theme.palette.black.normal};
    }

  &:hover:after {
    content: '${({ value }) => value}';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    ${getTooltip()}
  }
  &:hover:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: ${({ theme }) => theme.palette.black.dark};
    border: ${({ theme }) => `1px solid ${theme.palette.black.light}`};
  }

  &:hover img {
    transform: rotate(180deg);
  }

  ${breakpoint('sm')`
    flex-direction: column;

    &:after,
    &:hover:after {
      content: '${({ value }) => value}';
      position: relative;
      font-size: 1.4rem;
      font-weight: 500;
      letter-spacing: 3px;
      margin-top: 15px;
    }

    &:hover:before {
      display: none;
    }
  `}

  ${breakpoint('lg')`
    height: 120px;
    margin-bottom: 10px;

    &:after,
    &:hover:after {
      font-size: 1.6rem;
      margin-top: 20px;
    }
  `}
`;

const StyledContactTitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.palette.white};

  ${breakpoint('sm')`
    font-size: 1.4rem;
    color: ${({ theme }) => theme.palette.grey};
  `}

  ${breakpoint('lg')`
    font-size: 1.6rem;
  `}
`;

const StyledContactIcon = styled.img`
  width: 14px;
  position: absolute;
  top: 5px;
  right: 5px;
  transition: transform 0.3s ease-in-out;

  ${breakpoint('sm')`
    display: none;
  `}
`;

const Contact = (data) => {
  return (
    <SectionWrapper>
      <SectionHeader>Kontakt</SectionHeader>
      {data.edges.map(({ node: { name, value } }) => (
        <StyledContactWrapper
          href={`${getAction(name)}${value}`}
          value={value}
          key={name}
          target="_blank"
          title={getTooltipMessage(name)}
        >
          <StyledContactIcon src={arrow} />
          <StyledContactTitle>{name}</StyledContactTitle>
        </StyledContactWrapper>
      ))}
    </SectionWrapper>
  );
};

export default Contact;
