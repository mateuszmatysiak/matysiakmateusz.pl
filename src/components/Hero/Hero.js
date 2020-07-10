import React from 'react';
import styled from 'styled-components';
import profile from '../../assets/images/profile.jpg';
import github from '../../assets/images/github.svg';
import linkedin from '../../assets/images/linkedin.svg';
import open from '../../assets/images/open.svg';
import breakpoint from 'styled-components-breakpoint';

const StyledH1 = styled.h1`
  font-size: 3.2rem;

  ${breakpoint('sm')`
    font-size: 4.2rem;
  `}
`;

const StyledParagraph = styled.p`
  font-size: 1.4rem;
  line-height: 26px;
  margin-top: 30px;
  color: ${({ theme }) => theme.palette.grey};
`;

const StyledParagraphLink = styled.a`
  color: ${({ theme }) => theme.palette.white};
  text-decoration: underline;
`;

const StyledSocialContainer = styled.div`
  display: flex;
  margin-top: 30px;
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
    <section>
      <StyledH1>Witaj, jestem Mateusz Matysiak</StyledH1>
      <StyledParagraph>
        Jestem studentem III roku Informatyki Stosowanej na{' '}
        <StyledParagraphLink href="https://www.utp.edu.pl/pl/">
          Uniwersytecie Technologiczno-Przyrodniczym w Bydgoszczy
        </StyledParagraphLink>
        . Obecnie pracuję jako programista, tworząc oprogramowanie dla UTP w frameworku{' '}
        <StyledParagraphLink href="https://reactjs.org/">React</StyledParagraphLink>. Poza pracą
        tworzę projekty, w których wykorzystuję wiedzę z szeroko pojętego ekosystemu front-endu.
      </StyledParagraph>
      <StyledSocialContainer>
        <StyledSocialWrapper>
          <StyledSocialImg src={profile} />
          <StyledSocialItem href="https://www.linkedin.com/in/mateusz-matysiak/">
            <StyledSocialIcon src={linkedin} alt="Linkedin" />
            <StyledSocialSpan>Linkedin</StyledSocialSpan>
            <StyledSocialIcon src={open} alt="Open" />
          </StyledSocialItem>
          <StyledSocialItem href="https://github.com/mateuszmatysiak">
            <StyledSocialIcon src={github} alt="Github" />
            <StyledSocialSpan>Github</StyledSocialSpan>
            <StyledSocialIcon src={open} alt="Open" />
          </StyledSocialItem>
        </StyledSocialWrapper>
      </StyledSocialContainer>
    </section>
  );
};

export default Hero;
