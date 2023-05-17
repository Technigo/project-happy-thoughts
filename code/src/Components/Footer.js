/* eslint-disable max-len */

import React from 'react';
import styled from 'styled-components';
/* import { Link } from 'react-router-dom'; */

const FooterWrapper = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    padding: 20px;
    margin-top: 20px;
    margin-bottom: 0px;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    border-top: 1px solid #e6e6e6;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
`;

const FooterText = styled.p`
    font-size: 12px;
    color: #4d4d4d;
    margin: 0px;
`;

/* const FooterLink = styled(Link)`
    text-decoration: none;
    color: #4d4d4d;
    font-weight: bold;
    &:hover {
        color: #4d4d4d;
    }
`; */

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>© 2021 Happy Thoughts</FooterText>
      <FooterText>Created by Annika Lindberg</FooterText>
      {/*       <FooterText>Powered by <FooterLink to="https://annikalindberg-portfolio.netlify.app/">Annikas portfolio</FooterLink></FooterText> */}
    </FooterWrapper>
  );
};
