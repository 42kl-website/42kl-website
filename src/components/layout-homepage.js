import * as React from "react";
import Sidebar from "./sidebar";

//styles
const container = {
  fontFamily: "sans-serif",
};

const LayoutHomePage = ({ children }) => {
  return (
    <div style={container}>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default LayoutHomePage;
