import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Sidebar from "./sidebar";

//styles
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

const Children = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const LayoutHomePage = ({ children }) => {
  return (
    <div>
      <Global />
      <Sidebar />
      <Children>{children}</Children>
    </div>
  );
};

export default LayoutHomePage;
