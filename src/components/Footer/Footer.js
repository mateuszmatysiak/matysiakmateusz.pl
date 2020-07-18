import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';
import gsap from 'gsap';

const StyledFooter = styled.footer`
  display: flex;
  margin-top: 50px;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.palette.secondary};
`;

const StyledFooterLink = styled.a`
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

  useEffect(() => {
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
  }, [intersection]);

  return (
    <StyledFooter ref={footerRef}>
      <p>Strona stworzona w&nbsp;</p>
      <p>
        <StyledFooterLink
          href="https://www.gatsbyjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby.
        </StyledFooterLink>
      </p>
    </StyledFooter>
  );
};

export default Footer;
