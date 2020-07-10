import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../SectionHeader';
import SectionWrapper from '../SectionWrapper';
import arrow from '../../assets/images/arrow.svg';
import breakpoint from 'styled-components-breakpoint';

const StyledContactWrapper = styled.div`
    position: relative;
    height: 82px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    letter-spacing: 2px;
    margin-bottom: 5px;
    background-color: #202022;

    &:nth-child(odd) {
      background-color: #1D1D1F;
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

    &:hover:before {
      display: none;
    }

    &:after,
    &:hover:after {
      content: '${({ value }) => value}';
      position: relative;
      font-weight: 700;
      font-size: 1.4rem;
      letter-spacing: 3px;
      margin-top: 15px;
    }
  `}
`;

const StyledContactTitle = styled.p`
  font-size: 1.4rem;
`;

const StyledContactIcon = styled.img`
  width: 14px;
  position: absolute;
  top: 5px;
  right: 5px;
  transition: transform .3s;

  ${breakpoint('sm')`
    display: none;
  `}
`;

const Contact = (data) => {
  return (
    <SectionWrapper>
      <SectionHeader>Kontakt</SectionHeader>
      {data.edges.map(({ node: { name, value } }) => (
        <StyledContactWrapper value={value} key={name}>
          <StyledContactIcon src={arrow} />
          <StyledContactTitle>{name}</StyledContactTitle>
        </StyledContactWrapper>
      ))}
    </SectionWrapper>
  );
};

export default Contact;
