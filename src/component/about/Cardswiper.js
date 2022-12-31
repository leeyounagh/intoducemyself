import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./swiperStyles.scss";
// import required modules
import { EffectCards } from "swiper";
import SwiperCore, { Navigation } from "swiper";

const Card = [
  {
    id: 0,
    name: "자기소개",
    src: "테스트1.jpg",
    desc: "이름:이수연 \n 전공:관광학과 \n Mbti:ESFP \n ",
  },
  {
    id: 1,
    name: "장점",
    src: "테스트2.jpg",
    desc: "이름:이수연 \n 전공:관광학과 \n Mbti:ESFP \n ",
  },
  {
    id: 2,
    name: "단점",
    src: "테스트1.jpg",
    desc: "이름:이수연 \n 전공:관광학과 \n Mbti:ESFP \n ",
  },
  {
    id: 3,
    name: "좋아하는것",
    src: "테스트2.jpg",
    desc: "이름:이수연 \n 전공:관광학과 \n Mbti:ESFP \n ",
  },
  {
    id: 4,
    name: "싫어하는것",
    src: "테스트1.jpg",
    desc: "이름:이수연 \n 전공:관광학과 \n Mbti:ESFP \n ",
  },
];

const Cardswiper = () => {
  SwiperCore.use([Navigation]);

  return (
    <CardSwiperContainer>
      <StyledSwiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {Card.map((item, index) => {
          return (
            <div>
              <CardDiv>
                <SwiperSlide
                  key={item.id}
                  style={{
                    backgroundImage: `url(${item.src})`,
                    backgroundSize: "cover",
                  }}
                >
                  {item.name}
                </SwiperSlide>
              </CardDiv>
            </div>
          );
        })}
      </StyledSwiper>
    </CardSwiperContainer>
  );
};
const StyledSwiper = styled(Swiper)`
  width: 30vw;
  height: 70vh;
  display: flex;
  justify-content: center;
`;

const CardDiv = styled.div`
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  position: relative;
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
  height: 420px;
  // border: 1px solid black;
  // margin-left: 100px;
`;
export default Cardswiper;
