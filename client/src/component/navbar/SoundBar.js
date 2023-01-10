import { useEffect, useRef, useState } from "react";

import styled, { keyframes } from "styled-components";

const SoundBar = () => {
  const [click, setClick] = useState(false);

  useEffect(() => {
    setClick(true);
  }, []);
  const ref = useRef(null);

  const handleClick = () => {
    setClick((click) => !click);
    if (!click) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  return (
    <>
      <Box id={window.innerWidth} onClick={() => handleClick()}>
        {[1, 2, 3, 4, 5].map((idx) => (
          <Line key={idx} click={click} delay={idx * 0.1 + 0.1} />
        ))}

        <audio src="good.mp3" ref={ref} autoPlay />
      </Box>
    </>
  );
};
const Box = styled.div`
  display: flex;
  cursor: pointer;

  position: fixed;
  left: ${(props) => (props.id <= 640 ? "18rem" : "8rem")};

  top: ${(props) => (props.id <= 640 ? "2rem" : "3rem")};
  z-index: 10;
`;

const play = keyframes`
0%{
    transform:scaleY(1);
}
50%{
    transform:scaleY(2);
}
100%{
    transform:scaleY(1);
}
`;

const Line = styled.span`
  border: 1px solid ${(props) => props.theme.body};

  animation: ${play} 1s ease infinite;
  animation-play-state: ${(props) => (props.click ? "running" : "paused")};
  animation-delay: ${({ delay }) => `${delay}s`};
  height: 2rem;
  width: 3px;
  background-color: black;
  margin: 0 0.1rem;
`;

export default SoundBar;
