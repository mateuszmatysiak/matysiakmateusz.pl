import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const StyledNavigation = styled.nav`
  ${breakpoint('xxs', 'md')`
    display: none;
  `}
  margin-top: 50px;
`;

const StyledNavigationListItem = styled.li`
  display: flex;
  margin: 30px 0;
`;

const StyledNavigationListItemLink = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover span {
    color: ${({ theme }) => theme.palette.white};

    &:nth-child(2) {
      width: 50px;
      background-color: ${({ theme }) => theme.palette.white};
    }
  }
`;

const StyledNavigationSpan = styled.span`
  color: ${({ theme }) => theme.palette.grey};
  font-size: 1.2rem;
  text-transform: uppercase;
  transition: all .3s ease-in-out;

  &:nth-child(2) {
    display: block;
    width: 25px;
    height: 1px;
    margin: 0 20px;
    background-color: ${({ theme }) => theme.palette.grey};
  }
`;

const Navigation = () => {
  return (
    <StyledNavigation>
      <ul>
        <StyledNavigationListItem>
          <StyledNavigationListItemLink>
            <StyledNavigationSpan>01</StyledNavigationSpan>
            <StyledNavigationSpan></StyledNavigationSpan>
            <StyledNavigationSpan>Projekty</StyledNavigationSpan>
          </StyledNavigationListItemLink>
        </StyledNavigationListItem>
        <StyledNavigationListItem>
          <StyledNavigationListItemLink>
            <StyledNavigationSpan>02</StyledNavigationSpan>
            <StyledNavigationSpan></StyledNavigationSpan>
            <StyledNavigationSpan>Umiejętności</StyledNavigationSpan>
          </StyledNavigationListItemLink>
        </StyledNavigationListItem>
        <StyledNavigationListItem>
          <StyledNavigationListItemLink>
            <StyledNavigationSpan>03</StyledNavigationSpan>
            <StyledNavigationSpan></StyledNavigationSpan>
            <StyledNavigationSpan>Kontakt</StyledNavigationSpan>
          </StyledNavigationListItemLink>
        </StyledNavigationListItem>
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;
