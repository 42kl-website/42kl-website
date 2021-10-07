import * as React from "react";
import LayoutHomePage from "../components/layout-homepage";
import styled from "styled-components";
// import { Section, Highlight, BigHighlight } from "../style/common-styles";

export const Section = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"}; //"Passed Props"
  height: 100vh;
  /* width: 100%; */
  /* margin: 16px; */
  align-items: center;
  /* justify-content: center; */
  justify-content: space-between;
  padding-left: 10%;
  padding-right: 10%;
  /* padding-bottom: 60px; */
`;

const Curriculum = () => {
  return (
    <LayoutHomePage>
      <Section>
        Curriculum Page
        <div>HELLO</div>
      </Section>
    </LayoutHomePage>
  );
};

export default Curriculum;
