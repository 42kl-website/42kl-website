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
  object-fit: contain;
  object-position: 50% 50%;
`;
const Curriculum = () => {
  return (
    <LayoutHomePage>
      <Section>
        Curriculum Page: THIS PAGE IS CURRENTLY BEING USED AS A TEST SITE BY
        ISAAC!!!
      </Section>
      <Container>
        <StaticImage
          src="../images/iMacs-on-campus.png"
          style={{
            height: "100vh",
          }}
          imgStyle={{
            objectFit: "cover",
            objectPosition: "center bottom",
          }}
        />
      </Container>
    </LayoutHomePage>
  );
};

export default Curriculum;
