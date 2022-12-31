import React from "react";
import ParticlesComponent from "./utils/ParticlesComponent";
import Chart from "./utils/Chart";
import Cardswiper from "./Cardswiper";
import styled from "styled-components";

const About = () => {
  return (
    <>
      <AboutSection>
        <Chart />
      </AboutSection>
      <AboutSection>
        <Cardswiper />
      </AboutSection>
      <ParticlesComponent />
    </>
  );
};

const AboutSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  margin-bottom: 5vh;
`;
export default About;
