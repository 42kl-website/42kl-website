import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "gatsby";
import { Section } from "../style/common-styles";
import Meteor from "../images/meteor.png";

/* styles */
//NOTE: MIGHT WANT TO REFACTOR THIS
//To create a full screen black webpage
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

const Description = styled.div`
  position: relative;
  bottom: -6vh;
  max-width: 520px;
  margin-left: 20px;

  h1 {
    font-size: 40px;
  }
  p {
    font-size: 24px;
    color: #00babc;
  }
`;

const Options = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GradientBtn = styled((props) => <Link {...props} />)`
  display: flex;
  align-items: center;
  border: 6px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to bottom, #00babc, #3d5aae);
  padding: 16px 32px;
  color: #fff;
  text-decoration: none;
  font-size: 32px;
`;

const IndexPage = () => {
  return (
    <>
      <Global />
      <Section>
        {/* <StaticImage
          src="../images/logo-fortytwo-white.png"
          alt="Logo as the number 42"
          width={1000}
        /> */}
        <svg
          // width="1241" height="860"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute" }}
        >
          <defs>
            <clipPath id="clipping" transform="scale(0.8)">
              <path
                d="M683.929 1.99884L232.155 451.737H687.439V860H456.788L457.791 636.63H0V449.739L454.783 0L683.929 1.99884ZM1239.5 225.369V0H1011.85H782.708V225.369L1011.85 0V223.37L782.207 452.737V678.605H1011.85H1241V452.737L1011.85 678.605V452.737L1239.5 225.369Z"
                fill="#FF4F4F"
                fill-opacity="0.6"
              />
            </clipPath>
          </defs>
        </svg>
        <div style={{ clipPath: "url(#clipping)" }}>
          <img
            src={Meteor}
            alt="Meteor shower background"
            width="1000"
            height="700"
          />
        </div>
        <Description>
          <h1>
            &lt;/STEP INTO 42KL
            <br />
            AND GET AN EXCLUSIVE
            <br />
            EXPERIENCE&gt;
          </h1>
          <p>BEST EXPERIENCED ON COMPUTERS</p>
          <Options>
            <GradientBtn to="/home">STUDENT</GradientBtn>
            <GradientBtn to="#">INVESTOR</GradientBtn>
          </Options>
        </Description>
      </Section>
    </>
  );
};

export default Main;
