import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterItemDiv>Contact</FooterItemDiv>
      <FooterItemDiv>
        <FooterText>phone:010-7284-0216</FooterText>
      </FooterItemDiv>
      <FooterItemDiv>
        <FooterText>E-mail:dudgk0216@naver.com</FooterText>
      </FooterItemDiv>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100vw;
  height: 5vh;
  padding: 10px;
  background-color: rgb(252, 246, 244);
`;

const FooterItemDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.div`
  font-size: 15px;
`;

export default Footer;