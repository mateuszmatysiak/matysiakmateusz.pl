import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.section`
  margin-top: 50px;
`;

const StyledFooterParagraph = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.palette.grey};
`;

const StyledFooterParagraphLink = styled.a`
  color: ${({ theme }) => theme.palette.white};
  text-decoration: underline;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterParagraph>
        Strona stworzona w{' '}
        <StyledFooterParagraphLink href="https://www.gatsbyjs.org/">
          Gatsby
        </StyledFooterParagraphLink>
        .
      </StyledFooterParagraph>
    </StyledFooter>
  );
};

export default Footer;
