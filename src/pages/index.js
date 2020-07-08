import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const StyledPage = styled.main`
  margin: 35px;
`;

const HomePage = ({ data }) => {
  return (
    <StyledPage>
      <Hero />
      <Projects {...data.allDatoCmsProject} />
      <Skills {...data.allDatoCmsSkill} />
      <Contact />
      <Footer />
    </StyledPage>
  );
};

export const query = graphql`
  query MyQuery {
    allDatoCmsProject {
      edges {
        node {
          description
          hrefGithub
          hrefLive
          title
          tags {
            name
          }
        }
      }
    }
    allDatoCmsSkill {
      edges {
        node {
          skills {
            skill
          }
        }
      }
    }
  }
`;

export default HomePage;
