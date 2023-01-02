import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TbPlayerPlay } from "react-icons/tb";
import { TbPlayerSkipBack } from "react-icons/tb";
import { TbPlayerSkipForward } from "react-icons/tb";

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
const projectdesc = [
  { id: 2, title: "Vintage", desc: "" },
  { id: 4, title: "Hello Jeju", desc: "" },
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
      let data = projectdesc.filter((item) => item.id === props.page);
      return (
        <>
          <DescDiv>
            <DescTitle>{data[0].title}</DescTitle>
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
`;
const Iframe = styled.iframe``;
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
`;

const VideoIconContainer = styled.div`
  margin-top: 10px;
  width: 600px;
  display: flex;
  justify-content: space-between;
`;
const DescDiv = styled.div``;
const DescTitle = styled.div`
  font-family: "양진체";
  src: url("https://cdn.jsdelivr.net/gh/supernovice-lab/font@0.9/yangjin.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
  font-size: 40px;
  color: black;
`;
const PlayButton = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;
export default ItemPage;
