import styled from "styled-components";

/*
 ** Commonly used styles
 */

export const Section = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Highlight = styled.span`
  font-weight: bold;
  background: -webkit-linear-gradient(45deg, #3d5aae, #00babc);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: white;
`;
