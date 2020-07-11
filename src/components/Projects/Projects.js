import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../SectionHeader';
import SectionWrapper from '../SectionWrapper';
import open from '../../assets/images/open.svg';
import breakpoint from 'styled-components-breakpoint';

const StyledProjectWrapper = styled.div`
  display: block;
  min-height: 186px;
  background: ${({ theme }) => theme.palette.black.light};
  margin-bottom: 5px;
  padding: 30px;
  border-radius: 3px;

  ${breakpoint('md')`
    transition: transform .3s ease-in-out;

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

const StyledProjectTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 500;
  margin: 15px 0;
`;

const StyledProjectDescription = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.palette.grey};
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

const StyledLinkIcon = styled.img`
  width: 14px;
`;

const Projects = (data) => (
  <SectionWrapper>
    <SectionHeader>Projekty</SectionHeader>
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
          <StyledLinkItem href={hrefGithub} target="_blank">
            <StyledLinkSpan>Github</StyledLinkSpan>
            <StyledLinkIcon src={open} />
          </StyledLinkItem>
          {hrefLive ? (
            <StyledLinkItem href={hrefLive} target="_blank">
              <StyledLinkSpan>Live</StyledLinkSpan>
              <StyledLinkIcon src={open} />
            </StyledLinkItem>
          ) : null}
        </StyledLinkWrapper>
      </StyledProjectWrapper>
    ))}
  </SectionWrapper>
);

export default Projects;
