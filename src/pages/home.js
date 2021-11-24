import * as React from "react";
import LayoutHomePage from "../components/layout-homepage";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import {
  Section,
  Highlight,
  BigHighlight,
  RectangularButton,
} from "../style/common-styles";
// import FadeIn from "../animations/FadeIn";
import LayerPin from "../animations/LayerPin";
// import "../style/index.css"; //Unused

/* styles */
const Welcome = styled.div`
  position: relative;
  height: 100vh;
`;

//Used on Text over an image background
const OverImageText = styled.div`
  position: absolute;
  bottom: 13%;
  left: 5%;

  h1 {
    margin: 0;
  }
`;

//"Extending Styles"
const Introduction = styled(Section)`
  section {
    background-color: black;
  }
  p {
    padding-left: 4.5vw;
    width: 38vw;
  }
`;

const Beliefs = styled.div`
  position: relative;
  height: 80vh;
  width: 50%;
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

const Options = styled.div`
  width: 40vw;
  display: flex;
  justify-content: space-between;
`;

//markup
const HomePage = () => {
  
  return (
    <LayoutHomePage>
      <LayerPin>
      <Welcome className="welcome-container">
        <StaticImage
          src="../images/iMacs-on-campus.png"
          alt="iMacs on 42KL campus"
          style={{ height: "100vh" }}
          imgStyle={{ objectPosition: "center center" }}
          class="parallax1" 
        />
        <OverImageText>
          <h1 class="parallax2">
            &lt;/Welcome to
            <br />
            42 Kuala Lumpur&gt;
          </h1>
        </OverImageText>
      </Welcome>
      {/* <FadeIn vars={{ x:200 }}> fade in animation from right */}
      <Introduction className="fixed-section-content">
        <div style={{ marginRight: "60px" }}>
          <h3 className="fade-in">42KL</h3>
          <p className="fade-in">
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
        <Beliefs className="fade-in">
          <StaticImage
            src="../images/beliefs-excellence.png"
            alt="Belief in pursuit of excellence"
            style={{ 
              width: "10vw",
              position: "absolute",
              top: "17%" 
            }}
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
      {/* </FadeIn> */}
      {/* <FadeIn vars={{ x:-200 }}> fade in animation from left */}
      <Section className="container fixed-section-content" direction="column">
        <Zero className="fade-in" style={{ marginTop: "8%" }}>
          <h4 class="left" id="classes">
            CLASSES
          </h4>
          <h4 class="right" id="requirements">
            REQUIREMENTS
          </h4>
        </Zero>
        <BigHighlight className="fade-in" fontSize="16vw">&lt;/ZERO&gt;</BigHighlight>
        <Zero className="fade-in" style={{ marginBottom: "8%" }}>
          <h4 class="left" id="tuition">
            TUITION
          </h4>
          <h4 class="right">TEACHERS</h4>
        </Zero>
      </Section>
      {/* </FadeIn> */}
      <Learning className="fixed-section-content" style={{ paddingTop: "10%" }}>
        <StaticImage
          src="../images/learning-project-based.png"
          alt="Portolio icon"
          style={{ width: "38vw" }}
          class="fade-in"
        />
        <div id="project-based" class="fade-in">
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
      <Learning className="fixed-section-content" style={{ position: "relative", alignItems: "flex-start" }}>
        <div id="peer-to-peer" class="fade-in">
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
          class="fade-in"
        />
      </Learning>
      <Learning className="fixed-section-content" 
        style={{ flexDirection: "column", justifyContent: "space-evenly" }}
      >
        <StaticImage
          src="../images/learning-gamification.png"
          alt="42 butterfly graph"
          style={{ width: " 28vw" }}
          class="fade-in"
        />
        <div id="gamification" class="fade-in">
          <h4>"Gamification"</h4>
          <p>
            Progress is accounted for using experience points through completion
            of each project.
          </p>
        </div>
      </Learning>
      <Section justify="center" className="fixed-section-content">
        <StaticImage
          src="../images/roadmap.png"
          alt="Roadmap of 42 program"
          style={{ width: "66vw" }}
          class="fade-in"
        />
      </Section>
      {/* <FadeIn vars={{ x:-200 }}> */}
      <Section className="container fixed-section-content">
        <BigHighlight className="fade-in" fontSize="9vw">
          &lt;/WORK
          <br />
          READY
          <br />
          TALENT&gt;
        </BigHighlight>
      </Section>
      {/* </FadeIn> */}
      <Skills className="fixed-section-content" >
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
      <Skills className="fixed-section-content" alignment="center">
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
      {/* <FadeIn vars={{ x:200 }}> */}
      <Section className="fixed-section-content" justify="center">
        <BigHighlight className="fade-in">&lt;/OUR NETWORK&gt;</BigHighlight>
      </Section>
      {/* </FadeIn> */}
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
      <Campus>
        <StaticImage
          src="../images/campus-building.png"
          alt="42KL building"
          style={{ width: "100vw", height: "100vh" }}
          imgStyle={{ objectPosition: "10% 35%" }}
        />
        <OverImageText>
          <h3 style={{ marginBottom: "3%" }}>BE PART OF US NOW</h3>
          <Options>
            <RectangularButton to="#">TRY IT OUT</RectangularButton>
            <RectangularButton to="#">OF COURSE!</RectangularButton>
          </Options>
        </OverImageText>
      </Campus>
      </LayerPin>
    </LayoutHomePage>
  );
};

export default HomePage;
