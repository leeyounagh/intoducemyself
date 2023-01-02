import React from "react";
import styled from "styled-components";
import Sidebar from "./sideBar/Sidebar";

const Main = () => {
  return (
    <MainContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <MainImgDiv>
        <MainCdImg src="cd.png" alt="커버" width="430px" height="450px" />
      </MainImgDiv>
      <MainImgDiv>
        <MainCoverContainer>
          <MainCoverLeft>
            <MainCoverImg
              src="cover.png"
              alt="커버"
              width="430px"
              height="450px"
            />
          </MainCoverLeft>
          <MainCoverRight>
            <MainCoverText>
              Suyoen
              <br /># fall in love with coding
            </MainCoverText>
          </MainCoverRight>
        </MainCoverContainer>
      </MainImgDiv>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  width: 100vw;
  height: 79vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const MainCoverContainer = styled.div`
  position: relative;
  z-index: 10;
`;
const MainCoverLeft = styled.div``;
const MainCoverRight = styled.div`
  position: absolute;
  left: 75%;
  top: 15%;
`;
const MainImgDiv = styled.div``;
const MainCoverImg = styled.img`
  z-index: 10;
  box-shadow: 5px 5px 26px 5px gray;
`;

const MainCoverText = styled.h1`
  writing-mode: vertical-rl;
  font-family: "양진체";
  src: url("https://cdn.jsdelivr.net/gh/supernovice-lab/font@0.9/yangjin.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
  font-size: 25px;
`;
const MainCdImg = styled.img`
  z-index: 5;
  position: absolute;
  left: 50%;
  top: 20%;

  animation: rotate_image 6s linear infinite;
  transform-origin: 50% 50%;

  @keyframes rotate_image {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const SidebarContainer = styled.div`
  position: absolute;
  left: 50px;
  top: 25%;
`;
export default Main;
