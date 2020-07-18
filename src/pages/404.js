import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const StyledNotFoundPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${breakpoint('md')`
    height: 60vh;
  `}
`;

const StyledContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledTitle = styled.h1`
  font-size: 3.2rem;
`;

const StyledDescription = styled.p`
  font-size: 1.8rem;
  margin: 40px 0;
`;

const StyledButton = styled.a`
  font-size: 2rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #9f56ff;
  }
`;

const StyledHR = styled.hr`
  width: 100%;
  margin: 40px;
  border-color: #9f56ff;
`;

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledFooterItem = styled.a`
  font-size: 1.8rem;
  color: ${({ theme }) => `${theme.palette.secondary}`};
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #9f56ff;
  }
`;

const StyledFooterSpan = styled.span`
  display: block;
  width: 5px;
  height: 5px;
  margin: 0 15px;
  background-color: #9f56ff;
  border-radius: 50px;
`;

const NotFoundPage = () => (
  <StyledNotFoundPage>
    <StyledContainer>
      <StyledTitle>Strona nie znaleziona</StyledTitle>
      <StyledDescription>Uuups! Strona, której szukasz nie istnieje.</StyledDescription>
      <StyledButton href="https://www.matysiakmateusz.pl" rel="noopener noreferrer">
        Wróć
      </StyledButton>
    </StyledContainer>
    <StyledHR />
    <StyledFooter>
      <StyledFooterItem href="https://www.matysiakmateusz.pl" rel="noopener noreferrer">
        Mateusz Matysiak
      </StyledFooterItem>
      <StyledFooterSpan />
      <StyledFooterItem href="https://www.gatsbyjs.org/" rel="noopener noreferrer">
        Gatsbyjs.com
      </StyledFooterItem>
    </StyledFooter>
  </StyledNotFoundPage>
);

export default NotFoundPage;
