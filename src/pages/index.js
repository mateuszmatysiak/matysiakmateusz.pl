import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import breakpoint from 'styled-components-breakpoint';
import { graphql } from 'gatsby';

const StyledPage = styled.main`
  position: relative;
  margin: 35px;

  &::before,
  &::after {
    content: '';
    display: block;
    position: fixed;
    left: 0;
    right: 0;
    box-shadow: ${({ theme }) => `0px 10px 40px 20px ${theme.palette.dark}`};
    z-index: 2;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }

  ${breakpoint('md')`
    max-width: 1440px;
    margin: 0 auto;
  `}
`;

const StyledSectionsContainer = styled.div`
  ${breakpoint('md')`
    position: absolute;
    top: 0;
    right: 0;
    width: 600px;
    padding: 35px 35px 20px 35px;
  `}

  ${breakpoint('lg')`
    width: auto;
    padding: 90px 90px 70px 0;
  `}
`;

const HomePage = ({ data }) => {
  return (
    <>
      <StyledPage>
        <Hero {...data.file} />
        <StyledSectionsContainer>
          <Projects {...data.allDatoCmsProject} />
          <Skills {...data.allDatoCmsSkill} />
          <Contact {...data.allDatoCmsContactObj} />
          <Footer />
        </StyledSectionsContainer>
      </StyledPage>
    </>
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
    allDatoCmsContactObj {
      edges {
        node {
          value
          name
        }
      }
    }
    file(name: { eq: "profile" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default HomePage;
