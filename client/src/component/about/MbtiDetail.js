import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import ParticlesComponent from "./utils/ParticlesComponent";
const MbtiDetail = () => {
  const { id } = useParams();
  const [mbti, setMbti] = useState([]);

  useEffect(() => {
    axios.get("/MbtiData.json").then((res) => {
      const { mbti } = res.data;
      setMbti(mbti);
    });
  }, []);

  const result = mbti.filter((item) => id === item.id.toLowerCase());

  const MbtiResultRender = () => {
    return result.map((item) => {
      return (
        <>
          <MbtiInnerTitle>당신의 Mbti는 {item.id} 입니다.</MbtiInnerTitle>
          <MbtiInnerSubTitle>{item.title}</MbtiInnerSubTitle>
          <MbtiInnerText>{item.desc}</MbtiInnerText>
        </>
      );
    });
  };
  return (
    <>
      <MbtiResultContainer>
        {window.innerWidth <= 640 ? null : <ParticlesComponent />}

        <MbtiResultDiv>
          <MbtiResultTitle>
            당신과 이수연의 협업시너지는 최고 입니다!!😍
          </MbtiResultTitle>
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

  @media (max-width: 640px) {
    margin-top: 100px;
  }
`;
const MbtiResultDiv = styled.div`
  position: relative;
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
  @media (max-width: 640px) {
    width: 100%;
    height: 80%;
    position: relative;
  }
`;
const MbtiResultTitle = styled.div`
  font-size: 1.5rem;
  position: absolute;
  left: 30%;
  border: 1ps solid black;
  margin-top: 80px;
  @media (max-width: 640px) {
    font-size: 30px;
    position: absolute;
    left: 5px;
    margin-top: 30px;
  }
`;

const MbtiInnerText = styled.div`
  font-size: 1.2rem;
  margin-top: 50px;
  position: absolute;
  top: 45%;
  left: 5px;

  @media (max-width: 640px) {
    font-size: 20px;
    position: absolute;
    top: 40%;
    left: 5px;
  }
`;

const MbtiInnerTitle = styled.div`
  font-size: 1.5rem;
  position: absolute;
  top: 23%;
  left: 35%;
  margin-top: 50px;
  @media (max-width: 640px) {
    font-size: 25px;
    margin-top: 25px;
    position: absolute;
    top: 23%;
    left: 15%;
  }
`;

const MbtiInnerSubTitle = styled.div`
  font-size: 1.5rem;
  position: absolute;
  top: 45%;
  left: 30%;
  @media (max-width: 640px) {
    font-size: 25px;
    position: absolute;
    top: 35%;
  }
`;
const MbtiResultInnerContainer = styled.div`


  }
`;
export default MbtiDetail;
