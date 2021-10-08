import * as React from "react";
import LayoutHomePage from "../components/layout-homepage";
import styled from "styled-components";
// import { Section, Highlight, BigHighlight } from "../style/common-styles";

export const Section = styled.div`
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

const Curriculum = () => {
  return (
    <LayoutHomePage>
      <Section>
        Curriculum Page
        <div style={{ position: "absolute", right: "10%", bottom: "15%" }}>
          HELLO
        </div>
      </Section>
    </LayoutHomePage>
  );
};

export default Curriculum;
