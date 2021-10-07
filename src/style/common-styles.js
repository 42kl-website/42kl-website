import styled from "styled-components";

/*
 ** Commonly used styles
 */

//Vertically: Aligned to center
//Horizontally: flexed and aligned with space-between + Left/Right padding
export const Section = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"}; //"Passed Props"
  height: 100vh;
  /* width: 100%; */
  margin: 16px;
  align-items: center;
  justify-content: space-between;
  padding: 0 10% 0 10%;
  padding-bottom: 60px; //To give space between each Figma Frame
`;

export const Highlight = styled.span`
  font-weight: bold;
  background: -webkit-linear-gradient(45deg, #3d5aae, #00babc);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: white;
`;

export const BigHighlight = styled.p`
  margin: 0px;
  font-size: ${(props) => props.fontSize || "10em"};
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
