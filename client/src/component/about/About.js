import React, { useEffect } from "react";
import ParticlesComponent from "./utils/ParticlesComponent";
import Chart from "./utils/Chart";
import Cardswiper from "./Cardswiper";
import Recommendation from "./Recommendation";
import styled from "styled-components";

const About = () => {
  useEffect(() => {
    <ParticlesComponent />;
  }, []);
  return (
    <>
      <ParticlesComponent />
      <AboutSection>
        <Chart />
      </AboutSection>
      <AboutSection>
        <Cardswiper />
      </AboutSection>
      <AboutSection>
        <Recommendation />
      </AboutSection>
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
