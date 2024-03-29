import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

/*
 ** Commonly used styles
 */

//Vertically: Aligned to center
//Horizontally: flexed and aligned with space-between + Left/Right padding
export const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: ${(props) => props.direction || "row"}; //"Passed Props"
  justify-content: ${(props) => props.justify || "space-between"};
  align-items: center;
  padding: 0 10% 0 10%;
  margin-bottom: 60px; //To give space between each Figma Frame
`;

export const Highlight = styled.span`
  font-weight: bold;
  background: -webkit-linear-gradient(45deg, #3d5aae, #00babc);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: white;
`;

export const BigHighlight = styled.h1`
  margin: 0px;
  font-size: ${(props) => props.fontSize || "8vw"} !important;
  user-select: none;
  font-weight: bold;
  background: #00babc;
  background: -webkit-radial-gradient(
    circle farthest-corner at center center,
    #00babc 14%,
    #3d5aae 100%
  );
  background: -moz-radial-gradient(
    circle farthest-corner at center center,
    #00babc 14%,
    #3d5aae 100%
  );
  background: radial-gradient(
    circle farthest-corner at center center,
    #00babc 14%,
    #3d5aae 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const RectangularButton = styled((props) => <Link {...props} />)`
  display: flex;
  align-items: center;
  border: 6px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to bottom, #00babc, #3d5aae);
  padding: 1% 6%;
  color: #fff;
  text-decoration: none;
  font-size: 2vw;
`;
