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

const StyledNavigationListItem = styled.li`
  display: flex;
  margin: 30px 0;
`;

const StyledNavigationListItemLink = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  ${({ theme, activeTab, section }) =>
    section === activeTab
      ? css`
          color: ${theme.palette.white};
          & span:nth-child(2) {
            width: 50px;
            background-color: ${theme.palette.white};
          }
        `
      : css`
          color: ${theme.palette.grey};
          & span:nth-child(2) {
            width: 25px;
            background-color: ${theme.palette.grey};
          }
        `}
  &:hover span {
    color: ${({ theme }) => theme.palette.white};
    &:nth-child(2) {
      width: 50px;
      background-color: ${({ theme }) => theme.palette.white};
    }
  }
`;

const StyledNavigationSpan = styled.span`
  font-size: 1.2rem;
  text-transform: uppercase;
  transition: all .3s ease-in-out;

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
      <ul>
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
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;
