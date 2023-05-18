import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
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
    text-align: center; /* Center align the text */
`;

const FooterLink = styled.a`
    text-decoration: none;
    color: #4d4d4d;
    font-weight: bold;
    &:hover {
        color: #4d4d4d;
    }
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <img src="/annika.jpg" alt="annika portrait" width={50} />
      <FooterText>Created by Annika Lindberg</FooterText>
      <FooterText><FooterLink href="https://annikalindberg-portfolio.netlify.app/" /></FooterText><FooterText><FooterLink href="https://www.linkedin.com/in/annika-lindberg-a3398b263/">Annikas LinkedIn Profile</FooterLink></FooterText><FooterText> <FooterLink href="https://github.com/annikalindberg">Annikas Github profile</FooterLink></FooterText>
    </FooterWrapper>
  );
};
