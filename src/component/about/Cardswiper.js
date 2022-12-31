import React from "react";
import styled from "styled-components";

const Card = [
  { id: 1, name: "자기소개", src: "테스트1.jpg" },
  { id: 2, name: "장점", src: "테스트2.jpg" },
  { id: 3, name: "단점", src: "테스트1.jpg" },
  { id: 4, name: "좋아하는것", src: "테스트2.jpg" },
  { id: 5, name: "싫어하는것", src: "테스트1.jpg" },
];

const Cardswiper = () => {
  return (
    <CardSwiperContainer>
      <CardDiv />
      <DescDiv />
    </CardSwiperContainer>
  );
};

const CardSwiperContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 247, 255);
`;

const CardDiv = styled.div`
  width: 360px;
  height: 540px;
  border-radius: 10px;
  box-shadow: 5px 5px 26px 5px gray;
  /* offset-x | offset-y | blur-radius | spread-radius | color */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: none;
  touch-action: none;
  user-select: none;
  margin-right: 100px;
`;

const DescDiv = styled.div`
  width: 400px;
  height: 540px;
  border: 1px solid black;
`;
export default Cardswiper;
