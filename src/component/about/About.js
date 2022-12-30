import React from "react";
import styled from "styled-components";
import Chart from "./utils/Chart";
import Cardswiper from "./Cardswiper";

const About = () => {
  return (
    <>
      <AboutSection>
        <Chart />
      </AboutSection>
      <AboutSection>
        <Cardswiper />
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
