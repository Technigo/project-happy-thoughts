import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 0px;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: auto;
    border-top: 1px solid #e6e6e6;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
`;

const FooterText = styled.p`
    font-size: 12px;
    color: #4d4d4d;
 
    text-align: center;
    display: flex;
    align-items: flex-start

`;

const FooterLink = styled.a`
    text-decoration: none;
    color: #4d4d4d;
    font-weight: bold;
    &:hover {
        color: #4d4d4d;


    }
`;
const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
  
    justify-content: center;
    align-items: flex-start;
    margin-left: 10px;

`;

const FooterImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 50px;
    display: flex;
    justify-content: center;
    align-items: flex-start;


`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>
        <FooterImage src="/annika.jpg" alt="annika portrait" />
        <LinksWrapper>
          <FooterText>Created by Annika Lindberg</FooterText>
          <FooterLink href="https://www.annikalindberg-portfolio.netlify.app/">Portfolio</FooterLink>
          <FooterLink href="https://www.linkedin.com/in/annika-lindberg-a3398b263/">LinkedIn Profile</FooterLink>
          <FooterLink href="https://www.github.com/annikalindberg">Github profile</FooterLink>
        </LinksWrapper>
      </FooterText>
    </FooterWrapper>
  );
};
