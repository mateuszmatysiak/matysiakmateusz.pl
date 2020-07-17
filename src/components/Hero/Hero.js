import React from 'react';
import styled, { css } from 'styled-components';
import GithubIcon from '../../assets/images/github.svg';
import LinkedinIcon from '../../assets/images/linkedin.svg';
import ContrastIcon from '../../assets/images/contrast.svg';
import OpenIcon from '../../assets/images/open.svg';
import breakpoint from 'styled-components-breakpoint';
import Navigation from '../Navigation';
import { useSelector } from 'react-redux';
import { themeSelector } from '../../state/selectors';
import { useWindowSize } from 'react-use';
import Img from 'gatsby-image';
import Icon from '../Icon';

const StyledHeroWrapper = styled.section`
  ${breakpoint('md')`
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 400px;
    height: 100vh;
    padding: 35px 0 20px 35px;
  `}

  ${breakpoint('lg')`
    width: 500px;
    padding: 90px 0 70px 90px;
  `}
`;

const StyledH1 = styled.h1`
  font-size: 3.2rem;

  ${breakpoint('sm')`
    font-size: 3.8rem;
  `}

  ${breakpoint('lg')`
    font-size: 4.4rem;
  `}
`;

const StyledParagraph = styled.p`
  font-size: 1.4rem;
  line-height: 26px;
  margin-top: 30px;
  color: ${({ theme }) => theme.palette.secondary};

  ${breakpoint('lg')`
    line-height: 32px;
  `}
`;

const StyledParagraphLink = styled.a`
  color: ${({ theme }) => theme.palette.primary};
  text-decoration: underline;
`;

const StyledSocialContainer = styled.div`
  display: flex;
  margin-top: 30px;

  ${breakpoint('md')`
    flex: 1 1;
    display: flex;
    align-items: flex-end;
  `}
`;

const StyledSocialWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1;
  max-width: 335px;
`;

const StyledSocialItem = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1;
`;

const StyledSocialSpan = styled.span`
  margin: 0 5px 0 10px;
  font-size: 1.2rem;
`;

const StyledSocialImg = styled(Img)`
  width: 48px;
  min-height: 48px;
  margin-right: 16px;
  border-radius: 50px;
`;

const StyledIcon = styled.span`
  display: block;

  ${({ mobile }) =>
    mobile &&
    css`
      margin-top: 16px;
    `}
  &,
  svg {
    width: 16px;
    height: 16px;
    fill: ${({ theme }) => theme.palette.primary};
    transition: fill 0.1s ease-in-out;

    ${({ contrastIcon }) =>
      contrastIcon &&
      css`
        width: 25px;
        height: 25px;
        cursor: pointer;
      `}
  }
`;

const Hero = ({ childImageSharp: { fluid } }) => {
  const { handleChangeTheme } = useSelector(themeSelector);
  const { width } = useWindowSize();
  const desktop = width > 450;
  const mobile = width < 450;

  return (
    <StyledHeroWrapper>
      <StyledH1>Witaj, jestem Mateusz Matysiak.</StyledH1>
      <StyledParagraph>
        Jestem studentem III roku Informatyki Stosowanej na{' '}
        <StyledParagraphLink href="https://www.utp.edu.pl/pl/" target="_blank">
          Uniwersytecie Technologiczno-Przyrodniczym w Bydgoszczy
        </StyledParagraphLink>
        . Obecnie pracuję jako programista, tworząc oprogramowanie dla UTP w frameworku{' '}
        <StyledParagraphLink href="https://reactjs.org/" target="_blank">
          React
        </StyledParagraphLink>
        . Poza pracą tworzę projekty, w których wykorzystuję wiedzę z szeroko pojętego ekosystemu
        front-endu.
      </StyledParagraph>
      <Navigation />
      {mobile && (
        <Icon StyledIcon={StyledIcon} onClick={handleChangeTheme} mobile contrastIcon>
          <ContrastIcon />
        </Icon>
      )}
      <StyledSocialContainer>
        <StyledSocialWrapper>
          <StyledSocialImg fluid={fluid} alt="profile" />
          <StyledSocialItem href="https://www.linkedin.com/in/mateusz-matysiak/" target="_blank">
            <Icon StyledIcon={StyledIcon}>
              <LinkedinIcon />
            </Icon>
            <StyledSocialSpan>Linkedin</StyledSocialSpan>
            <Icon StyledIcon={StyledIcon}>
              <OpenIcon />
            </Icon>
          </StyledSocialItem>
          <StyledSocialItem href="https://github.com/mateuszmatysiak" target="_blank">
            <Icon StyledIcon={StyledIcon}>
              <GithubIcon />
            </Icon>
            <StyledSocialSpan>Github</StyledSocialSpan>
            <Icon StyledIcon={StyledIcon}>
              <OpenIcon />
            </Icon>
          </StyledSocialItem>
          {desktop && (
            <Icon StyledIcon={StyledIcon} onClick={handleChangeTheme} contrastIcon>
              <ContrastIcon />
            </Icon>
          )}
        </StyledSocialWrapper>
      </StyledSocialContainer>
    </StyledHeroWrapper>
  );
};

export default Hero;
