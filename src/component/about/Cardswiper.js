import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./swiperStyles.scss";
// import required modules
import { EffectCards } from "swiper";

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
      {/* <CardDiv /> */}

      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <CardDiv>
          <SwiperSlide>Slide 1</SwiperSlide>
        </CardDiv>
        <CardDiv>
          <SwiperSlide>Slide 2</SwiperSlide>
        </CardDiv>
        <CardDiv>
          <SwiperSlide>Slide 3</SwiperSlide>
        </CardDiv>
        <CardDiv>
          <SwiperSlide>Slide 4</SwiperSlide>
        </CardDiv>
        <CardDiv>
          <SwiperSlide>Slide 5</SwiperSlide>
        </CardDiv>
      </Swiper>

      <DescDiv />
    </CardSwiperContainer>
  );
};

const CardDiv = styled.div`
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
`;

const CardSwiperContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 247, 255);
  position: relative;
`;

const DescDiv = styled.div`
  width: 400px;
  height: 540px;
  border: 1px solid black;
`;
export default Cardswiper;
