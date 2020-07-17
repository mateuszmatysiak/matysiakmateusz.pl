import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { sectionRefsSelector } from '../../state/selectors';
import { useSelector } from 'react-redux';
import { useWindowScroll } from 'react-use';
import { NAVIGATION } from '../../utils/navigation';

const StyledNavigation = styled.nav`
  ${breakpoint('xxs', 'md')`
    display: none;
  `}
  margin-top: 50px;
`;

const StyledNavigationList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const StyledNavigationListItem = styled.li`
  display: flex;
  margin: 15px 0;
`;

const StyledNavigationListItemLink = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  ${({ theme, activeTab, section }) =>
    section === activeTab
      ? css`
          color: ${theme.palette.primary};
          & span:nth-child(2) {
            width: 50px;
            background-color: ${theme.palette.primary};
          }
        `
      : css`
          color: ${theme.palette.secondary};
          & span:nth-child(2) {
            width: 25px;
            background-color: ${theme.palette.secondary};
          }
        `}
  &:hover span {
    color: ${({ theme }) => theme.palette.primary};
    &:nth-child(2) {
      width: 50px;
      background-color: ${({ theme }) => theme.palette.primary};
    }
  }
`;

const StyledNavigationSpan = styled.span`
  font-size: 1.2rem;
  text-transform: uppercase;
  transition: background-color 0.3s ease-in-out, width 0.3s ease-in-out;

  &:nth-child(2) {
    display: block;
    width: 25px;
    height: 1px;
    margin: 0 20px;
  }
`;

const Navigation = () => {
  const sectionRefs = useSelector(sectionRefsSelector);
  const [activeTab, setActiveTab] = useState('projects');
  const { y: scrollHeight } = useWindowScroll();

  const handleChangeActiveTab = (section) => {
    setActiveTab(section);
    sectionRefs[section].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  useEffect(() => {
    if (scrollHeight < 600) {
      setActiveTab('projects');
    } else if (scrollHeight > 600 && scrollHeight < 1550) {
      setActiveTab('skills');
    } else if (scrollHeight > 1550) {
      setActiveTab('contact');
    }
  }, [scrollHeight]);

  return (
    <StyledNavigation>
      <StyledNavigationList>
        {NAVIGATION.map(({ name, value }, index) => {
          const tabIndex = `0${index + 1}`;
          return (
            <StyledNavigationListItem key={value} onClick={() => handleChangeActiveTab(value)}>
              <StyledNavigationListItemLink section={value} activeTab={activeTab}>
                <StyledNavigationSpan>{tabIndex}</StyledNavigationSpan>
                <StyledNavigationSpan></StyledNavigationSpan>
                <StyledNavigationSpan>{name}</StyledNavigationSpan>
              </StyledNavigationListItemLink>
            </StyledNavigationListItem>
          );
        })}
      </StyledNavigationList>
    </StyledNavigation>
  );
};

export default Navigation;
