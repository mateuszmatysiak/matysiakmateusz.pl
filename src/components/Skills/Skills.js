import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../SectionHeader';
import SectionWrapper from '../SectionWrapper';
import breakpoint from 'styled-components-breakpoint';

const StyledSkillsContainer = styled.div`
  ${breakpoint('md')`
    &:hover > div {
      opacity: 0.5;
    }

    &:hover > div:hover {
      opacity: 1;
    }
  `}
`;

const StyledSkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 177px;
  margin-bottom: 5px;

  ${breakpoint('md')`
    height: 400px;
    background-color: unset;
    margin-bottom: unset;
    transition: all .2s ease-in-out;

    &:hover > div {
      opacity: .5;
    }

    &:hover > div:hover {
      opacity: 1;
    }
  `}
`;

const StyledSkillsItem = styled.div`
  flex: 1 1 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  letter-spacing: 4px;
  background-color: ${({ theme }) => theme.palette.black.normal};
  border-radius: 3px;
  cursor: default;

  ${({ childIndex, theme }) => getBackgroundColor(childIndex, theme)}

  ${breakpoint('md')`
    flex: auto;
    width: calc(50% - 10px);
    margin: 5px;
    font-size: 1.8rem;
    transition: all .2s ease-in-out;

    &:hover,
    &:nth-child(odd):hover {
      transform: scale(1.1);
    }

    &:nth-child(odd) {
      transform: translateY(-10px);
      margin: 5px 5px 5px 0;
    }

    &:nth-child(even) {
      margin: 5px 0 5px 5px;
    }
  `}
`;

function getBackgroundColor(childIndex, theme) {
  if (childIndex % 2 === 0) {
    return `
      &:not(:nth-child(3n+1)) {
        background-color: ${theme.palette.black.light};
      }
    `;
  } else
    return `
      &:nth-child(3n+1) {
      background-color: ${theme.palette.black.light};
      }
    `;
}

const Skills = (data) => {
  return (
    <SectionWrapper id="skills">
      <SectionHeader>Umiejętności</SectionHeader>
      <StyledSkillsContainer>
        {data.edges.map(({ node: { skills } }, index) => (
          <StyledSkillsWrapper key={index}>
            {skills.map(({ skill }) => (
              <StyledSkillsItem childIndex={index} key={skill}>
                {skill}
              </StyledSkillsItem>
            ))}
          </StyledSkillsWrapper>
        ))}
      </StyledSkillsContainer>
    </SectionWrapper>
  );
};

export default Skills;
