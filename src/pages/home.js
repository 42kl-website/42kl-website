import * as React from "react";
import LayoutHomePage from "../components/layout-homepage";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Section, Highlight, BigHighlight } from "../style/common-styles";
import "../style/index.css";

/*
 ** Home page
 */

/* styles */
const WelcomeText = styled.div`
  position: absolute;
  bottom: 24px;
  left: 92px;

  h1 {
    font-size: 100px;
    margin: 24px 0px;
  }
`;

const Introduction = styled(Section)`
  h2 {
    font-size: 80px;
  }
  p {
    width: 500px;
    font-size: 1.5em;
  }
`;

const Beliefs = styled.div`
  height: 60%;
  width: 40%;
  /* display: inline; */
`;

const Skills = styled(Section)`
  h2 {
    font-size: 120px;
  }
  p {
    width: 480px;
    font-size: 40px;
    line-height: 1.8;
  }
`;

const Zero = styled.div`
  width: 70%;
  display: flex;
  margin: 20px 0px;

  p {
    font-size: 2.5em;
    font-weight: bold;
  }
  #right {
    margin-left: auto;
    padding-bottom: 60px;
  }
  #left {
    align-self: flex-end;
  }
`;

//markup
const HomePage = () => {
  return (
    <LayoutHomePage>
      <StaticImage
        src="../images/sample.jpg"
        alt="Home page background image"
        className="background"
      />
      <WelcomeText>
        <h1>&lt;/Welcome to</h1>
        <h1>42 Kuala Lumpur&gt;</h1>
      </WelcomeText>
      <Introduction>
        <div>
          <h2>42KL</h2>
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
            src="../images/beliefs-community.png"
            alt="Belief in commitment to community"
            width={200}
            style={{ top: "10px", left: "10px" }}
          />
          <StaticImage
            src="../images/beliefs-creativity.png"
            alt="Belief in creativity and passion"
            width={200}
            style={{ top: "40px", left: "170px" }}
          />
          <br />
          <StaticImage
            src="../images/beliefs-equal-opportunities.png"
            alt="Belief in equal opportunities"
            width={200}
            style={{ top: "20px", left: "180px" }}
          />
          <br />
          <StaticImage
            src="../images/beliefs-excellence.png"
            alt="Belief in pursuit of excellence"
            width={200}
            style={{ top: "40px", left: "50px" }}
          />
          <StaticImage
            src="../images/beliefs-innovative.png"
            alt="Belief in innovative and questioning"
            width={200}
            style={{ top: "40px", left: "150px" }}
          />
        </Beliefs>
      </Introduction>
      <Section direction="column">
        <Zero>
          <p id="left">CLASSES</p>
          <p id="right">REQUIREMENT</p>
        </Zero>
        <BigHighlight fontSize="13em">&lt;/ZERO&gt;</BigHighlight>
        <Zero>
          <p id="left">TUITION</p>
          <p id="right">TEACHER</p>
        </Zero>
      </Section>
      <Section>
        <div style={{ position: "absolute", left: "10%" }}>
          <BigHighlight>
            &lt;/WORLD
            <br />
            READY
            <br />
            TALENT&gt;
          </BigHighlight>
        </div>
      </Section>
      <Skills>
        <div>
          <h2>Tech Skills</h2>
          <p>
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
          </p>
        </div>
        <StaticImage src="../images/skills-tech.png" width={850} />
      </Skills>
      <Skills className="alignment">
        <StaticImage src="../images/skills-soft.png" width={700} />
        <div style={{ padding: `10em` }}>
          <h2>Soft Skills</h2>
          <p>
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
          </p>
        </div>
      </Skills>
      <Skills>
        <div style={{ padding: `10em` }}>
          <h2>Right Fit</h2>
          <p>
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
          </p>
        </div>
        <StaticImage src="../images/skills-right-fit.png" width={700} />
      </Skills>
      <Section>
        <BigHighlight>&lt;/OUR NETWORK&gt;</BigHighlight>
      </Section>
    </LayoutHomePage>
  );
};

export default HomePage;
