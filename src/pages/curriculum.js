import * as React from "react";
import LayoutHomePage from "../components/layout-homepage";
import styled from "styled-components";
// import { Section, Highlight, BigHighlight } from "../style/common-styles";
import { StaticImage } from "gatsby-plugin-image";
import Meteor from "../images/meteor.png";

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
  border-color: red;
  position: relative;
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
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="60vw"
          viewBox="0 0 60 60"
          style={{
            border: "1px solid #FFF",
            position: "absolute",
          }}
          // preserveAspectRatio="xMaxYMax meet"
        >
          <circle cx="30" cy="30" r="20" fill="#DEC4A8" />
          <defs>
            <clipPath id="clipping" transform="scale(0.8)">
              <path
                d="M683.929 1.99884L232.155 451.737H687.439V860H456.788L457.791 636.63H0V449.739L454.783 0L683.929 1.99884ZM1239.5 225.369V0H1011.85H782.708V225.369L1011.85 0V223.37L782.207 452.737V678.605H1011.85H1241V452.737L1011.85 678.605V452.737L1239.5 225.369Z"
                fill="#FF4F4F"
                fill-opacity="0.6"
              />
            </clipPath>
          </defs>
        </svg>
        <div style={{ clipPath: "url(#clipping)" }}>
          <img
            src={Meteor}
            alt="Meteor shower background"
            style={{ width: "60vw", height: "100vh" }}
          />
        </div>
      </Container>
    </LayoutHomePage>
  );
};

export default Curriculum;
