import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TbPlayerPlay } from "react-icons/tb";
import { TbPlayerSkipBack } from "react-icons/tb";
import { TbPlayerSkipForward } from "react-icons/tb";
import projectDesc from "./projectDesc";

const videoSrc = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/aijfhmPshjo/0.jpg;",
    title: "Vintage",
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/v9VVNtw5WBA/0.jpg;",
    title: "Hello Jeju",
  },
];

const ItemPage = (props) => {
  const [play, setPlay] = useState(false);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  useEffect(() => {
    setPlay(false);
  }, [props.page]);

  const handlePlay = () => {
    setPlay(!play);
  };
  const handleNextPlay = () => {
    setStart(start + 10);
    setEnd(end + 10);
  };
  const handlePrevPlay = () => {
    setStart(start - 10);
    setEnd(end - 10);
  };

  const PageRenderer = () => {
    if (props.page === 1 || props.page === 3) {
      let data = videoSrc.filter((item) => item.id === props.page);

      return (
        <>
          <VideoPageTitle>{data[0].title}</VideoPageTitle>
          {window.innerWidth <= 640 ? (
            <Iframe
              style={{
                width: "70vw",
                position: "absolute",
                left: "-20vw",
                top: "10vh",
              }}
              src={
                play
                  ? `${data[0].src}?autoplay=1&start=${start}&end=${end}`
                  : `${data[0].src}`
              }
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          ) : (
            <IframeDiv>
              <Iframe
                width="560"
                height="315"
                src={
                  play
                    ? `${data[0].src}?autoplay=1&start=${start}&end=${end}`
                    : `${data[0].src}`
                }
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </IframeDiv>
          )}

          {/* 비디오부분 */}
          <VideoIconContainer>
            <PlayButton onClick={handlePrevPlay}>
              <TbPlayerSkipBack size="50px" style={{ cursor: "pointer" }} />
            </PlayButton>

            <PlayButton>
              <TbPlayerPlay
                onClick={handlePlay}
                size="50px"
                style={{ cursor: "pointer" }}
              />
            </PlayButton>
            <PlayButton>
              <TbPlayerSkipForward
                onClick={handleNextPlay}
                size="50px"
                style={{ cursor: "pointer" }}
              />
            </PlayButton>
          </VideoIconContainer>
        </>
      );
    } else if (props.page === 2 || props.page === 4) {
      let data = projectDesc.filter((item) => item.id === props.page);
      return (
        <>
          <DescDiv id={props.page}>
            <DescTitle id={props.page}>{data[0].title}</DescTitle>

            <DescText>{data[0].desc1}</DescText>
            <DescText>{data[0].word}</DescText>
            <DescText>{data[0].desc2}</DescText>
            <DescText>{data[0].desc3}</DescText>
            <DescText>{data[0].desc4}</DescText>
            <AtagDiv>
              <a href={data[0].git} target="_blank" rel="noreferrer noopener">
                깃허브로 이동💕
              </a>
            </AtagDiv>
          </DescDiv>
        </>
      );
    }
  };

  return (
    <VideoDiv>
      <PageRenderer />
    </VideoDiv>
  );
};

const VideoDiv = styled.div`
  width: 30vw;
  height: 60vh;
  display: grid;
  place-items: start center;
  position: relative;
`;
const IframeDiv = styled.div`
  width: 100vw;
  border: 1px solid black;
`;
const Iframe = styled.iframe`
  width: 30vw;
  height: 40vh;
  @media (max-width: 640px) {
    position: absolute;
    left: 10%;
  }
`;
const VideoPageTitle = styled.div`
  color: black;
  font-size: 40px;
  text-align: center;
  display: flex;
  margin: 10px;
  font-family: "양진체";
  src: url("https://cdn.jsdelivr.net/gh/supernovice-lab/font@0.9/yangjin.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
  @media (max-width: 640px) {
    position: absolute;
    left: 10%;
  }
`;

const VideoIconContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const DescDiv = styled.div`
  width: 40vw;
  height: 40vh;
  position: absolute;
  top: 10%;
  font-family: "양진체";
  src: url("https://cdn.jsdelivr.net/gh/supernovice-lab/font@0.9/yangjin.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
  color: ${(props) => (props.id === 4 ? "white" : "black")};

  a {
    text-decoration: none;
    color: black;
    font-size: 25px;
    color: ${(props) => (props.id === 4 ? "white" : "black")};
  }
`;
const DescTitle = styled.div`
  font-size: 40px;
  color: black;
  text-align: center;
  margin-bottom: 50px;
  margin-top: 20px;
  color: ${(props) => (props.id === 4 ? "white" : "black")};
`;
const PlayButton = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;
const DescText = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 100;
`;
const AtagDiv = styled.div`
  margin-top: 20px;
  text-align: center;
`;
export default ItemPage;
