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

const LayoutHomePage = ({ children }) => {
  return (
    <div>
      <Global />
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default LayoutHomePage;
