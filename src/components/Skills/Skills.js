import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../SectionHeader';
import SectionWrapper from '../SectionWrapper';

const StyledSkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 177px;
  margin-bottom: 5px;
  background-color: ${({ theme }) => theme.palette.black.normal};
`;

const StyledSkillsItem = styled.div`
  flex: 1 1 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  letter-spacing: 4px;

  ${({ childIndex, theme }) => getBackgroundColor(childIndex, theme)}
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
    <SectionWrapper>
      <SectionHeader>Umiejętności</SectionHeader>
      {data.edges.map(({ node: { skills } }, index) => (
        <StyledSkillsWrapper key={index}>
          {skills.map(({ skill }) => (
            <StyledSkillsItem childIndex={index} key={skill}>
              {skill}
            </StyledSkillsItem>
          ))}
        </StyledSkillsWrapper>
      ))}
    </SectionWrapper>
  );
};

export default Skills;
