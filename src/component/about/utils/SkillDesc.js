import React from "react";
import styled from "styled-components";

const SkillDesc = () => {
  return (
    <SkillDescContainer>
      <SkillTitleDiv>Front-Engineer가 되기 위하여..</SkillTitleDiv>
      <SkillInnerText>
        2022.02월 생활코딩 유튜브를 본후 프로그래밍에 흥미가 생겨 독학으로
        공부를 시작하였고, 2022.11월말 엘리스코딩에서 공부를 시작하며 더욱더
        프로그래밍이 좋아 졌습니다. 이제 코딩은 제 인생의 원동력이 되었습니다.
      </SkillInnerText>
      <SkillTitleDiv>Skills</SkillTitleDiv>
      <SkillInnerText>Html,javascript,Css,React,MongoDb,nodeJs</SkillInnerText>
      <SkillTitleDiv>Tools</SkillTitleDiv>
      <SkillInnerText>VScode, Github etc..</SkillInnerText>
    </SkillDescContainer>
  );
};

const SkillDescContainer = styled.div`
  padding: 30px;
  width: 27vw;
  height: 50vh;
  margin-left: 100px;
  border: 2px solid black;
  display: grid;
  place-items: start center;
  &:hover {
    background-color: black;
    color: white;
  }
`;
const SkillTitleDiv = styled.div`
  font-size: 30px;
  margin-top: 15px;
`;
const SkillInnerText = styled.div`
  font-size: 20px;
  margin-top: 20px;
  font-family: "KIMM_Bold";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2212@1.0/KIMM_Bold.woff2")
    format("woff2");
  font-weight: 700;
  font-style: normal;
`;

export default SkillDesc;
