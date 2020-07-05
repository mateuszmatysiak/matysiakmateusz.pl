import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../SectionHeader';
import SectionWrapper from '../SectionWrapper';

const StyledProjectWrapper = styled.a`
  display: block;
  min-height: 186px;
  background: ${({ theme }) => theme.palette.black.light};
  margin-bottom: 5px;
  padding: 30px;
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
  font-size: 14px;
  color: ${({ theme }) => theme.palette.grey};
`;

const Projects = (data) => (
  <SectionWrapper>
    <SectionHeader>Projekty</SectionHeader>
    {data.edges.map(({ node: { title, description, href, tags } }) => (
      <StyledProjectWrapper key={title} href={href}>
        <StyledProjectTagWrapper>
          {tags.map(({ name }) => (
            <StyledProjectTag key={name}>{name}</StyledProjectTag>
          ))}
        </StyledProjectTagWrapper>
        <StyledProjectTitle>{title}</StyledProjectTitle>
        <StyledProjectDescription>{description}</StyledProjectDescription>
      </StyledProjectWrapper>
    ))}
  </SectionWrapper>
);

export default Projects;
