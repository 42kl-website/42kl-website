import * as React from "react";
import LayoutHomePage from "../components/layout-homepage";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Section, Highlight, BigHighlight } from "../style/common-styles";
import "../style/index.css";

/* styles */
const Welcome = styled.div`
  position: relative;
`;

//Used on Text over an image background
const OverImageText = styled.div`
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
  p {
    color: #00babc;
  }
  #project-based {
    text-align: right;
    width: 28vw;
  }
  #peer-to-peer {
    width: 26vw;
    padding-top: 10%;
  }
  #gamification {
    text-align: center;
    width: 36vw;
  }
`;

const Campus = styled.div`
  position: relative;
`;
//markup
const HomePage = () => {
  return (
    <LayoutHomePage>
      <Welcome>
        <StaticImage
          src="../images/iMacs-on-campus.png"
          alt="iMacs on 42KL campus"
          style={{ height: "100vh" }}
          imgStyle={{ objectPosition: "center bottom" }}
        />
        <OverImageText>
          <h1>
            &lt;/Welcome to
            <br />
            42 Kuala Lumpur&gt;
          </h1>
        </OverImageText>
      </Welcome>
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
      <Learning style={{ paddingTop: "10%" }}>
        <StaticImage
          src="../images/learning-project-based.png"
          alt="Portolio icon"
          style={{ width: "38vw" }}
        />
        <div id="project-based">
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
      <Learning style={{ position: "relative", alignItems: "flex-start" }}>
        <div id="peer-to-peer">
          <h4>
            Peer-to-peer
            <br />
            Learning
          </h4>
          <p>
            Students are in charge of their own success and that of their
            classmates.
          </p>
        </div>
        <StaticImage
          src="../images/learning-peer-to-peer.png"
          alt="Peers talking illustration"
          style={{
            width: "56vw",
            position: "absolute",
            bottom: "6%",
            right: "10%",
          }}
        />
      </Learning>
      <Learning
        style={{ flexDirection: "column", justifyContent: "space-evenly" }}
      >
        <StaticImage
          src="../images/learning-gamification.png"
          alt="42 butterfly graph"
          style={{ width: " 28vw" }}
        />
        <div id="gamification">
          <h4>"Gamification"</h4>
          <p>
            Progress is accounted for using experience points through completion
            of each project.
          </p>
        </div>
      </Learning>
      <Section justify="center">
        <StaticImage
          src="../images/roadmap.png"
          alt="Roadmap of 42 program"
          style={{ width: "66vw" }}
        />
      </Section>
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
      <Section justify="center">
        <BigHighlight>&lt;/OUR NETWORK&gt;</BigHighlight>
      </Section>
      <Section justify="center">
        <StaticImage
          src="../images/networks.png"
          alt="World map showing 42 global networks"
          style={{ width: "76vw" }}
        />
      </Section>
      <Campus>
        <StaticImage
          src="../images/campus-building.png"
          alt="42KL building"
          style={{ width: "100vw", height: "100vh" }}
          imgStyle={{ objectPosition: "10% 35%" }}
        />
        <OverImageText>
          <h2>Our Campus</h2>
        </OverImageText>
      </Campus>
    </LayoutHomePage>
  );
};

export default HomePage;
