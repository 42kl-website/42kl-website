import * as React from "react";
import LayoutHomePage from "../components/layout-homepage";
import { StaticImage } from "gatsby-plugin-image";
import "../../index.css";
import styled from "styled-components";

//styles
const Text = styled.div`
  position: absolute;
  bottom: 8px;
  left: 16px;
`;

//markup
const IndexPage = () => {
  return (
    <LayoutHomePage>
      <StaticImage
        src="../images/sample.jpg"
        alt="Home page background image"
        className="background"
      />
      <Text>Home page3</Text>
    </LayoutHomePage>
  );
};

export default IndexPage;
