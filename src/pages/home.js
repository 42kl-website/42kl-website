import * as React from "react";
import LayoutHomePage from "../components/layout-homepage";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Section, Highlight, BigHighlight } from "../style/common-styles";
import "../style/index.css";

/* styles */
const WelcomeText = styled.div`
  position: absolute;
  bottom: 3%;
  left: 5%;
`;

//"Extending Styles"
const Introduction = styled(Section)`
  p {
    padding-left: 4.5vw;
    width: 38vw;
  }
`;

const Beliefs = styled.div`
  position: relative;
  height: 100vh;
  width: 33vw;
`;

const Skills = styled(Section)`
  text-align: ${(props) => props.alignment || "left"};

  h2 {
    margin: 0;
  }
`;

const Zero = styled.div`
  width: 100%;
  display: flex;

  h4 {
    margin: 0;
  }
  .right {
    margin-left: auto;
    padding-bottom: 60px;
  }
  .left {
    align-self: flex-end;
  }
  #classes {
    margin-left: 5%;
  }
  #requirements {
    margin-right: 10%;
  }
  #tuition {
    margin-left: 12%;
  }
`;

const Learning = styled(Section)`
  padding-top: 10%;
  #context {
    text-align: right;
    width: 28vw;
  }
  p {
    color: #00babc;
  }
`;

//markup
const HomePage = () => {
  return (
    <LayoutHomePage>
      <StaticImage
        src="../images/iMacs-on-campus.png"
        alt="Home page background image"
        className="background"
      />
      <WelcomeText>
        <h1>
          &lt;/Welcome to
          <br />
          42 Kuala Lumpur&gt;
        </h1>
      </WelcomeText>
      <Introduction>
        <div style={{ marginRight: "60px" }}>
          <h3>42KL</h3>
          <p>
            42 KL offers an{" "}
            <Highlight>unparalleled computing education opportunity</Highlight>{" "}
            to any Malaysian, regardless of socioeconomic and educational
            background. It is an innovative educational model that was designed
            to develop the skills needed to jumpstart a career as a software
            engineer using various approaches. The concept has received
            tremendous traction in countries around the world, including{" "}
            <Highlight>Silicon Valley</Highlight>, and we are now ready to
            pioneer this{" "}
            <Highlight>tech talent development game changer</Highlight> in
            Malaysia.
          </p>
        </div>
        <Beliefs>
          <StaticImage
            src="../images/beliefs-excellence.png"
            alt="Belief in pursuit of excellence"
            style={{ width: "10vw", position: "absolute", top: "17%" }}
          />
          <StaticImage
            src="../images/beliefs-innovative.png"
            alt="Belief in innovative and questioning"
            style={{
              width: "9vw",
              position: "absolute",
              top: "30%",
              right: "5%",
            }}
          />
          <StaticImage
            src="../images/beliefs-creativity.png"
            alt="Belief in creativity and passion"
            style={{
              width: "10vw",
              position: "absolute",
              top: "50%",
              left: "31%",
            }}
          />
          <StaticImage
            src="../images/beliefs-community.png"
            alt="Belief in commitment to community"
            style={{
              width: "9vw",
              position: "absolute",
              bottom: "7%",
              left: "0px",
            }}
          />
          <StaticImage
            src="../images/beliefs-equal-opportunities.png"
            alt="Belief in equal opportunities"
            style={{
              width: "12vw",
              position: "absolute",
              bottom: "0px",
              right: "0px",
            }}
          />
        </Beliefs>
      </Introduction>
      <Section direction="column">
        <Zero style={{ marginTop: "8%" }}>
          <h4 class="left" id="classes">
            CLASSES
          </h4>
          <h4 class="right" id="requirements">
            REQUIREMENTS
          </h4>
        </Zero>
        <BigHighlight fontSize="16vw">&lt;/ZERO&gt;</BigHighlight>
        <Zero style={{ marginBottom: "8%" }}>
          <h4 class="left" id="tuition">
            TUITION
          </h4>
          <h4 class="right">TEACHERS</h4>
        </Zero>
      </Section>
      <Learning>
        <StaticImage
          src="../images/learning-project-based.png"
          alt="Portolio icon"
          style={{ width: "38vw" }}
        />
        <div id="context">
          <h4>
            Project Based
            <br />
            Learning
          </h4>
          <p>
            Imitates real-world work and encourages student to learn time
            management and build conceptual frameworks.
          </p>
        </div>
      </Learning>
      <Section>
        <BigHighlight fontSize="9vw">
          &lt;/WORK
          <br />
          READY
          <br />
          TALENT&gt;
        </BigHighlight>
      </Section>
      <Skills>
        <div>
          <h2>Tech Skills</h2>
          <h5>
            <Highlight>Blockchain</Highlight>
            <br />
            <Highlight>Cyber Security</Highlight>
            <br />
            <Highlight>Cloud Computing</Highlight>
            <br />
            <Highlight>Data Science</Highlight>
            <br />
            <Highlight>Machine Learning</Highlight>
            <br />
            <Highlight>Artificial Intelligence</Highlight>
            <br />
            <Highlight>Front-end Design</Highlight>
          </h5>
        </div>
        <StaticImage
          src="../images/skills-tech.png"
          atl="Editors modifying a website"
          style={{ width: "45vw" }}
        />
      </Skills>
      <Skills alignment="center">
        <StaticImage
          src="../images/skills-soft.png"
          atl="People of various professions on a stage"
          style={{ width: "30vw" }}
        />
        <div>
          <h2>Soft Skills</h2>
          <h5>
            <Highlight>Behavioral</Highlight>
            <br />
            <Highlight>Mindset</Highlight>
            <br />
            <Highlight>Attitude</Highlight>
            <br />
            <Highlight>Teamwork</Highlight>
            <br />
            <Highlight>Leadership</Highlight>
            <br />
            <Highlight>Learnability</Highlight>
          </h5>
        </div>
      </Skills>
      <Skills>
        <div>
          <h2>Right Fit</h2>
          <h5>
            <Highlight>Site Visits</Highlight>
            <br />
            <Highlight>Work Simulations</Highlight>
            <br />
            <Highlight>Company Assessment</Highlight>
            <br />
            <Highlight>Hackathons</Highlight>
            <br />
            <Highlight>Informal Meetings</Highlight>
            <br />
            <Highlight>Industry Challenges</Highlight>
          </h5>
        </div>
        <StaticImage
          src="../images/skills-right-fit.png"
          atl="Workers in a discussion"
          style={{ width: "40vw" }}
        />
      </Skills>
      <Section style={{ justifyContent: "center" }}>
        <BigHighlight>&lt;/OUR NETWORK&gt;</BigHighlight>
      </Section>
    </LayoutHomePage>
  );
};

export default HomePage;
