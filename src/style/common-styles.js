import styled from "styled-components";

/*
 ** Commonly used styles
 */

export const Section = styled.div`
  display: flex;
  flex-direction: ${ props => props.direction || "row" };
  height: 100vh;
  /* width: 100%; */
  margin: 16px;
  align-items: center;
  justify-content: center;
  padding-bottom: 60px;
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
  font-size: ${ props => props.fontSize || "10em" };
  user-select: none;
  font-weight: bold;
  background: #00BABC;
  background: -webkit-radial-gradient(circle farthest-corner at center center, #00BABC 14%, #3D5AAE 100%);
  background: -moz-radial-gradient(circle farthest-corner at center center, #00BABC 14%, #3D5AAE 100%);
  background: radial-gradient(circle farthest-corner at center center, #00BABC 14%, #3D5AAE 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;