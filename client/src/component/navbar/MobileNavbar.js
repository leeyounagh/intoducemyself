import React from "react";
import styled from "styled-components";
import MobilenavbarItems from "./MobileNavbarData";
import ShareKakaotalk from "../main/ShareKakaotalk";
import navbarItems from "./navbarData";
import { AiOutlineClose } from "react-icons/ai";

const MobileNavbar = (props) => {
  const SetModalClose = () => {
    props.ismodal = false;
  };

  return (
    <MobileContainer>
      <CloseDiv onClick={SetModalClose}>
        <AiOutlineClose size="50"></AiOutlineClose>
      </CloseDiv>

      <MobileInnerDiv>
        {navbarItems.map((item) => {
          return (
            <>
              <MobileNavbarText>
                <a href={item.link}> {item.title}</a>
              </MobileNavbarText>
            </>
          );
        })}
        {MobilenavbarItems.map((item) => {
          return (
            <>
              <MobileNavbarText>
                <a href={item.link} target="_blank" rel="noreferrer noopener">
                  {" "}
                  {item.title}
                </a>
              </MobileNavbarText>
            </>
          );
        })}
        <MobileNavbarText>
          <ShareKakaotalk />
        </MobileNavbarText>
      </MobileInnerDiv>
    </MobileContainer>
  );
};
const CloseDiv = styled.div``;
const MobileContainer = styled.div`
  position: fixed;
  padding: 50px;
  left: 0px;
  top: 0px;
  width: 300px;
  height: 1000px;
  //   border: 3px solid lightgray;
  background-color: rgb(252, 246, 244);

  z-index: 50;
  animation: modal_ani 0.5s linear;

  @keyframes modal_ani {
    0% {
      width: 0%;
    }
    100% {
      width: 300px;
    }
  }
`;
const MobileNavbarText = styled.div``;
const MobileInnerDiv = styled.div`
  margin-top: 50px;
  height: 100%;
  display: grid;
  place-items: start center;

  a {
    text-decoration: none;
    color: black;
    font-size: 2rem;
  }
`;
export default MobileNavbar;
