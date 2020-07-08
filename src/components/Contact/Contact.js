import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../SectionHeader';
import SectionWrapper from '../SectionWrapper';
import arrow from '../../assets/images/arrow.svg';

const dummyData = [
  { name: 'Email', value: 'mateuszmatysiak96@gmail.com' },
  { name: 'Telefon', value: '662 365 914' },
  { name: 'Twitter', value: '@matys0' },
];

const StyledContactWrapper = styled.div`
  position: relative;
  height: 82px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  letter-spacing: 2px;
  margin-bottom: 5px;
  background-color: ${({ theme }) => theme.palette.black.light};

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
    z-index: 3;
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
    z-index: 2;
  }
`;

const StyledContactIcon = styled.img`
  width: 14px;
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 1;
`;

const Skills = (data) => {
  return (
    <SectionWrapper>
      <SectionHeader>Kontakt</SectionHeader>
      {dummyData.map(({ name, value }) => (
        <StyledContactWrapper value={value} key={name}>
          <StyledContactIcon src={arrow} />
          {name}
        </StyledContactWrapper>
      ))}
    </SectionWrapper>
  );
};

export default Skills;
