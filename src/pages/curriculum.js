import * as React from "react";
import LayoutHomePage from "../components/layout-homepage";
import styled from "styled-components";
// import { Section, Highlight, BigHighlight } from "../style/common-styles";
import { StaticImage } from "gatsby-plugin-image";

const Section = styled.div`
  /* display: flex; */
  flex-direction: ${(props) => props.direction || "row"}; //"Passed Props"
  height: 100vh;
  /* width: 100%; */
  /* margin: 16px; */
  /* align-items: center; */
  /* justify-content: center; */
  /* justify-content: space-between; */
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 100px;
  /* width: 100%; */
  /* padding-bottom: 60px; */
  position: relative;
`;

const Container = styled.div`
  height: 100vh;
  border-style: solid;
  border-color: #fff;
`;
const Curriculum = () => {
  return (
    <LayoutHomePage>
      <Section>
        Curriculum Page: THIS PAGE IS CURRENTLY BEING USED AS A TEST SITE BY
        ISAAC!!!
      </Section>
      <Container>
        <svg
          // fill="none"
          width="50vw"
          viewBox="0 0 60 60"
          style={{
            border: "1px solid #FFF",
          }}
          // preserveAspectRatio="xMaxYMax meet"
        >
          <circle cx="30" cy="30" r="20" fill="#DEC4A8" />
        </svg>
      </Container>
    </LayoutHomePage>
  );
};

export default Curriculum;
