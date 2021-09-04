import * as React from "react";
import Sidebar from "./sidebar";

//styles

const LayoutHomePage = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default LayoutHomePage;
