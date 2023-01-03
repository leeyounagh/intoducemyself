import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import MbtiData from "./Data/MbtiData";
import ParticlesComponent from "./utils/ParticlesComponent";
const MbtiDetail = (props) => {
  const { id } = useParams();
  const result = MbtiData.filter((item) => id === item.id.toLowerCase());

  const MbtiResultRender = () => {
    return result.map((item) => {
      return (
        <MbtiResultInnerContainer>
          <MbtiInnerTitle>당신의 Mbti는 {item.id} 입니다.</MbtiInnerTitle>
          <MbtiInnerSubTitle>{item.title}</MbtiInnerSubTitle>

          <MbtiInnerText>{item.desc}</MbtiInnerText>
        </MbtiResultInnerContainer>
      );
    });
  };
  return (
    <>
      <MbtiResultContainer>
        <ParticlesComponent />
        <MbtiResultDiv>
          <MbitResultTitle>
            당신과 이수연의 협업시너지는 최고 입니다!!😍
          </MbitResultTitle>
          <MbtiResultRender></MbtiResultRender>
        </MbtiResultDiv>
      </MbtiResultContainer>
    </>
  );
};
const MbtiResultContainer = styled.section`
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MbtiResultDiv = styled.div`
  width: 50%;
  height: 70%;
  border: 2px solid black;
  background-color: rgb(252, 246, 244);
  text-align: center;
  border-radius: 15px;
  padding: 20px;
  &:hover {
    background-color: black;
    color: white;
  }
`;
const MbitResultTitle = styled.div`
  font-size: 40px;

  margin-top: 80px;
`;

const MbtiInnerText = styled.div`
  font-size: 25px;
  margin-top: 50px;
`;

const MbtiInnerTitle = styled.div`
  font-size: 30px;

  margin-top: 50px;
`;

const MbtiInnerSubTitle = styled.div`
  font-size: 30px;
`;
const MbtiResultInnerContainer = styled.div`
  position: relative;
`;
export default MbtiDetail;
