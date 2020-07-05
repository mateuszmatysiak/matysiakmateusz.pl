import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const StyledPage = styled.main`
  margin: 35px;
`;

const HomePage = ({ data }) => {
  return (
    <StyledPage>
      <Hero />
      <Projects {...data.allDatoCmsProject} />
      <Skills />
    </StyledPage>
  );
};

export const query = graphql`
  query MyQuery {
    allDatoCmsProject {
      edges {
        node {
          description
          href
          title
          tags {
            name
          }
        }
      }
    }
  }
`;

export default HomePage;
