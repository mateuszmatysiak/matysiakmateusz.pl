import React, { useRef } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';
import gsap from 'gsap';

const StyledFooter = styled.footer`
  margin-top: 50px;
`;

const StyledFooterParagraph = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.palette.secondary};
`;

const StyledFooterParagraphLink = styled.a`
  color: ${({ theme }) => theme.palette.primary};
  text-decoration: underline;
`;

const Footer = () => {
  const footerRef = useRef(null);
  const intersection = useIntersection(footerRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.8,
  });

  if (intersection && intersection?.intersectionRatio > 0.8) {
    gsap.to('footer', { duration: 0.5, opacity: 1, y: 0, ease: 'power4.out' });
  } else {
    gsap.to('footer', {
      duration: 0.5,
      opacity: 0,
      y: 30,
      ease: 'power4.out',
      stagger: {
        amount: 0.3,
      },
    });
  }

  return (
    <StyledFooter ref={footerRef}>
      <StyledFooterParagraph>
        Strona stworzona w{' '}
        <StyledFooterParagraphLink href="https://www.gatsbyjs.org/" target="_blank">
          Gatsby
        </StyledFooterParagraphLink>
        .
      </StyledFooterParagraph>
    </StyledFooter>
  );
};

export default Footer;
