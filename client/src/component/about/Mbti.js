import React, { useState } from "react";
import styled from "styled-components";
const Mbti = () => {
  const [MbtiCheck, setMbtiCheck] = useState(false);

  const OnSubmit = (e) => {
    e.preventDefault();
    setMbtiCheck(true);
  };

  const MbtiResult = () => {
    return (
      <>
        <MbtiDiv>
          <MbtiResultText>당신의 mbti는...~입니다.</MbtiResultText>

          {/* 여기에 a태그 넣어서 페이지 이동 */}
          <MbtiResultAtagDiv>
            <a href="/"></a>
          </MbtiResultAtagDiv>

          <BackButton>다시하기</BackButton>
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
          <Form>
            <MbtiInput placeholder="당신의 mbti를 입력해주세요...😘" />
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
  top: 45%;
  left: 30%;
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
`;
export default Mbti;
