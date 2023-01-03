import React, { useState } from "react";
import styled from "styled-components";
import LovelyHeartAni from "../../animation/LovelyHeartAni";
import MbtiData from "./Data/MbtiData";
import MbtiDetail from "./MbtiDetail";

const Mbti = () => {
  const [MbtiCheck, setMbtiCheck] = useState(false);
  const [mbtiValue, setMbtiValue] = useState("");
  let Mbti = [];
  const OnSubmit = (e) => {
    e.preventDefault();
    Mbti = MbtiData.filter(
      (item) => item.id.toLowerCase() === mbtiValue.toLowerCase()
    );
    if (Mbti.length === 0) {
      alert("MBTI를 다시 확인해주세요");
      setMbtiValue("");
      setMbtiCheck(false);
    }
    if (Mbti.length === 1) {
      setMbtiCheck(true);
    }
  };

  const MbtiResult = () => {
    return (
      <>
        <MbtiDiv>
          <MbtiResultText>당신의 mbti는 {mbtiValue}입니다.</MbtiResultText>

          {/* 여기에 a태그 넣어서 페이지 이동 */}
          <MbtiResultAtagDiv>
            <a href={`/${mbtiValue}`}>결과 확인하기</a>
          </MbtiResultAtagDiv>

          <a href="/about">다시하기</a>
        </MbtiDiv>
      </>
    );
  };
  return (
    <MbtiContainer>
      {MbtiCheck === false ? (
        <MbtiDiv>
          <MbtiTitle>당신과 수연이와의 협업 시너지는?</MbtiTitle>
          <MbtiText>당신의 Mbti를 입력해주세요.</MbtiText>
          <MbtiInput
            value={mbtiValue}
            type="text"
            onChange={(e) => {
              e.preventDefault();
              setMbtiValue(e.target.value);
            }}
            placeholder="당신의 mbti를 입력해주세요...😘"
          />
          <Form>
            <SubmitButton
              onClick={(e) => {
                OnSubmit(e);
              }}
              type="submit"
            >
              제출
            </SubmitButton>
          </Form>
        </MbtiDiv>
      ) : (
        <MbtiResult />
      )}
    </MbtiContainer>
  );
};
const MbtiContainer = styled.div`
  width: 100vw;
  height: 80vh;
  position: relative;
`;
const Form = styled.form``;
const MbtiDiv = styled.div`
  border: 2px solid black;
  border-radius: 15px;
  width: 60%;
  height: 60%;
  position: absolute;
  left: 20vw;
  top: 10vh;
  background-color: rgb(252, 246, 244);
`;
const MbtiTitle = styled.div`
  text-align: center;
  margin-top: 50px;
  font-size: 40px;
`;
const MbtiText = styled.div`
  font-size: 30px;
  position: absolute;
  top: 35%;
  left: 35%;
`;

const MbtiInput = styled.input`
  width: 40%;
  height: 10%;
  position: absolute;
  top: 47%;
  left: 30%;
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;
const SubmitButton = styled.button`
  width: 30%;
  height: 10%;
  position: absolute;
  top: 70%;
  left: 35%;
`;

const BackButton = styled.button`
  width: 15%;
  height: 10%;
  position: absolute;
  top: 55%;
  left: 34%;
`;
const MbtiResultText = styled.div`
  font-size: 40px;
  position: absolute;
  top: 35%;
  left: 35%;
`;

const MbtiResultAtagDiv = styled.div`
  border: 1px solid black;
  width: 15%;
  height: 10%;
  position: absolute;
  top: 55%;
  left: 53%;
  a {
    text-decoration: none;
    color: black;
  }
`;
export default Mbti;
