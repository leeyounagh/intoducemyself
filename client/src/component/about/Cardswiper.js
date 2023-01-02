import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";
import SwiperCore, { Navigation } from "swiper";

import Card from "./Data/CardData";

const Cardswiper = () => {
  SwiperCore.use([Navigation]);

  return (
    <CardSwiperContainer>
      <StyledSwiper effect={"cards"} grabCursor={true} modules={[EffectCards]}>
        {Card.map((item, index) => {
          return (
            <CardDiv>
              <SwiperSlide
                key={item.id}
                style={{
                  backgroundImage: `url(${item.src})`,
                  backgroundSize: "cover",
                  borderRadius: "18px",
                }}
              >
                <SwiperTitle>{item.name}</SwiperTitle>
                <SwiperDesc>{item.desc}</SwiperDesc>
                <SwiperDesc>{item.desc1}</SwiperDesc>
                <SwiperDesc>{item.desc2}</SwiperDesc>
              </SwiperSlide>
            </CardDiv>
          );
        })}
      </StyledSwiper>
    </CardSwiperContainer>
  );
};
const SwiperTitle = styled.div`
  font-size: 40px;
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1;
  margin-bottom: 20px;
`;
const SwiperDesc = styled.div``;
const StyledSwiper = styled(Swiper)`
  width: 560px;
  height: 720px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: black;
  text-align: center;
  z-index: 0;

  &:nth-child(1n) {
  }
  &:nth-child(2n) {
  }
  &:nth-child(3n) {
  }
  &:nth-child(4n) {
  }
  &:nth-child(5n) {
  }
`;

const CardDiv = styled.div``;

const CardSwiperContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export default Cardswiper;
