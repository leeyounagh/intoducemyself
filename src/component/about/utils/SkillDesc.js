import React from "react";
import styled from "styled-components";
import AboutDescData from "./AboutDescData";

const SkillDesc = () => {
  return (
    <SkillDescContainer>
      <SkillTitleDiv>Front-Engineer가 되기 위하여..</SkillTitleDiv>
      {AboutDescData.map((item) => {
        return (
          <>
            <SkillInnerText>
              {item.date} {item.desc}
            </SkillInnerText>
          </>
        );
      })}

      <SkillTitleDiv>Skills</SkillTitleDiv>
      <SkillInnerText>Html,javascript,Css,React,MongoDb,nodeJs</SkillInnerText>
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
  background-color: rgb(252, 246, 244);
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
