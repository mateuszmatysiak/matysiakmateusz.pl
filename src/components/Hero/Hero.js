import React from 'react';
import styled from 'styled-components';
import profile from '../../assets/images/profile.jpg';
import github from '../../assets/images/github.svg';
import linkedin from '../../assets/images/linkedin.svg';
import open from '../../assets/images/open.svg';
import breakpoint from 'styled-components-breakpoint';
import Navigation from '../Navigation';

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
  color: ${({ theme }) => theme.palette.grey};

  ${breakpoint('lg')`
    line-height: 32px;
  `}
`;

const StyledParagraphLink = styled.a`
  color: ${({ theme }) => theme.palette.white};
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
  flex: 1 1;
  max-width: 305px;
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

const StyledSocialImg = styled.img`
  width: 48px;
  min-height: 48px;
  margin-right: 16px;
  border-radius: 50px;
`;

const StyledSocialIcon = styled.img`
  width: 16px;
`;

const Hero = () => {
  return (
    <StyledHeroWrapper>
      <StyledH1>Witaj, jestem Mateusz Matysiak.</StyledH1>
      <StyledParagraph>
        Jestem studentem III roku Informatyki Stosowanej na{' '}
        <StyledParagraphLink href="https://www.utp.edu.pl/pl/" target="_blank">
          Uniwersytecie Technologiczno-Przyrodniczym w Bydgoszczy
        </StyledParagraphLink>
        . Obecnie pracuję jako programista, tworząc oprogramowanie dla UTP w frameworku{' '}
        <StyledParagraphLink href="https://reactjs.org/" target="_blank">React</StyledParagraphLink>. Poza pracą
        tworzę projekty, w których wykorzystuję wiedzę z szeroko pojętego ekosystemu front-endu.
      </StyledParagraph>
      <Navigation />
      <StyledSocialContainer>
        <StyledSocialWrapper>
          <StyledSocialImg src={profile} />
          <StyledSocialItem href="https://www.linkedin.com/in/mateusz-matysiak/" target="_blank">
            <StyledSocialIcon src={linkedin} alt="Linkedin" />
            <StyledSocialSpan>Linkedin</StyledSocialSpan>
            <StyledSocialIcon src={open} alt="Open" />
          </StyledSocialItem>
          <StyledSocialItem href="https://github.com/mateuszmatysiak" target="_blank">
            <StyledSocialIcon src={github} alt="Github" />
            <StyledSocialSpan>Github</StyledSocialSpan>
            <StyledSocialIcon src={open} alt="Open" />
          </StyledSocialItem>
        </StyledSocialWrapper>
      </StyledSocialContainer>
    </StyledHeroWrapper>
  );
};

export default Hero;
