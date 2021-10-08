import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Navbar from "./navbar";

/*
Main layout for the homepage
Used in index.js (may need to be updated)
Styled to remove default page spacing
*/

/* styles */
//NOTE: MIGHT WANT TO REFACTOR THIS
//To create a fullscreen black webpage
const Global = createGlobalStyle`
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    overflow-x: hidden;
    font-family: sans-serif;
    background-color: black; //temporary
    color: white; //temporary
  }
`;

/*
Figma font-size equivalent
>=140px = h1
120px = h2
100px = h3
60px = h4
40px = h5
30px = p
*/
const Children = styled.main`
  h1 {
    font-size: 7vw;
  }
  h2 {
    font-size: 6.5vw;
  }
  h3 {
    font-size: 5.5vw;
  }
  h4 {
    font-size: 3vw;
    font-weight: bold;
    margin: 2vw 0;
  }
  h5 {
    font-size: 2vw;
    line-height: 4vw;
  }
  p {
    font-size: 1.5vw;
  }
`;

const LayoutHomePage = ({ children }) => {
  return (
    <div>
      <Global />
      <Navbar />
      <Children>{children}</Children>
    </div>
  );
};

export default LayoutHomePage;
