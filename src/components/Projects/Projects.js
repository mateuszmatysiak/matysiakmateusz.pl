import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../SectionHeader';
import SectionWrapper from '../SectionWrapper';
import OpenIcon from '../../assets/images/open.svg';
import breakpoint from 'styled-components-breakpoint';
import Icon from '../Icon';

const StyledProjectContainer = styled.div`
  ${breakpoint('md')`
    &:hover > div {
      opacity: 0.5;
    }

    &:hover > div:hover {
      opacity: 1;
    }
  `}
`;

const StyledProjectWrapper = styled.div`
  display: block;
  min-height: 186px;
  background: ${({ theme }) => theme.palette.light};
  margin-bottom: 5px;
  padding: 30px;
  border-radius: 3px;

  ${breakpoint('md')`
    transition: transform .2s ease-in-out, opacity .2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  `}

  ${breakpoint('lg')`
    margin-bottom: 10px;
  `}
`;

const StyledProjectTagWrapper = styled.div`
  display: flex;
`;

const StyledProjectTag = styled.p`
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 12px;
  letter-spacing: 3px;
  margin-right: 10px;
`;

const StyledProjectTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 500;
  margin: 15px 0;
`;

const StyledProjectDescription = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.palette.secondary};
`;

const StyledLinkWrapper = styled.div`
  display: flex;
  margin-top: 15px;
`;

const StyledLinkItem = styled.a`
  display: flex;
  align-items: center;
  margin-right: 16px;
`;

const StyledLinkSpan = styled.span`
  font-size: 1.4rem;
  margin-right: 5px;
`;

const StyledLinkIcon = styled.span`
  display: block;
  &,
  svg {
    width: 16px;
    height: 16px;
    fill: ${({ theme }) => theme.palette.primary};
    transition: fill 0.1s ease-in-out;
  }
`;

const Projects = (data) => (
  <SectionWrapper id="projects">
    <SectionHeader>Projekty</SectionHeader>
    <StyledProjectContainer>
      {data.edges.map(({ node: { title, description, hrefGithub, hrefLive, tags } }) => (
        <StyledProjectWrapper key={title}>
          <StyledProjectTagWrapper>
            {tags.map(({ name }) => (
              <StyledProjectTag key={name}>{name}</StyledProjectTag>
            ))}
          </StyledProjectTagWrapper>
          <StyledProjectTitle>{title}</StyledProjectTitle>
          <StyledProjectDescription>{description}</StyledProjectDescription>
          <StyledLinkWrapper>
            <StyledLinkItem href={hrefGithub} target="_blank" rel="noopener noreferrer">
              <StyledLinkSpan>Github</StyledLinkSpan>
              <Icon StyledIcon={StyledLinkIcon}>
                <OpenIcon />
              </Icon>
            </StyledLinkItem>
            {hrefLive ? (
              <StyledLinkItem href={hrefLive} target="_blank" rel="noopener noreferrer">
                <StyledLinkSpan>Live</StyledLinkSpan>
                <Icon StyledIcon={StyledLinkIcon}>
                  <OpenIcon />
                </Icon>
              </StyledLinkItem>
            ) : null}
          </StyledLinkWrapper>
        </StyledProjectWrapper>
      ))}
    </StyledProjectContainer>
  </SectionWrapper>
);

export default Projects;
