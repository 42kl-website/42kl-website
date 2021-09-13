import * as React from "react";
import LayoutHomePage from "../components/layout-homepage";
import { StaticImage } from "gatsby-plugin-image";
import "../../index.css";
import styled from "styled-components";

//styles
const WelcomeText = styled.div`
  position: absolute;
  bottom: 24px;
  left: 92px;

  h1 {
    font-size: 100px;
    margin: 24px 0px;
  }
`;

const Introduction = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  /* position: absolute; */
  h2 {
    font-size: 80px;
  }
  p {
    width: 480px;
    font-size: larger;
  }
`;

const Highlight = styled.span`
  font-weight: bold;
  background: -webkit-linear-gradient(45deg, #3d5aae, #00babc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Beliefs = styled.div`
  /* position: absolute; */
`;

const Skills = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  /* position: absolute; */
  h2 {
    font-size: 120px;
  }
  p {
    width: 480px;
    font-size: 40px;
  }
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
          />
          <StaticImage
            src="../images/beliefs-creativity.png"
            alt="Belief in creativity and passion"
            width={200}
          />
          <StaticImage
            src="../images/beliefs-equal-opportunities.png"
            alt="Belief in equal opportunities"
            width={200}
          />
          <StaticImage
            src="../images/beliefs-excellence.png"
            alt="Belief in pursuit of excellence"
            width={200}
          />
          <StaticImage
            src="../images/beliefs-innovative.png"
            alt="Belief in innovative and questioning"
            width={200}
          />
        </Beliefs>
      </Introduction>
		  <Skills>
			  <div>
				  <h2>Tech Skills</h2>
				  <p><Highlight>Blockchain</Highlight></p>
				  <p><Highlight>Cyber Security</Highlight></p>
				  <p><Highlight>Cloud Computing</Highlight></p>
				  <p><Highlight>Data Science</Highlight></p>
				  <p><Highlight>Machine Learning</Highlight></p>
				  <p><Highlight>Artificial Intelligence</Highlight></p>
				  <p><Highlight>Front-end Design</Highlight></p>
			  </div>
			  <StaticImage
				  src="../images/skills-tech.png"
				  width={850}
			  />
		  </Skills>
		  <Skills className="alignment">
			  <StaticImage
				  src="../images/skills-soft.png"
				  width={700}
			  />
			   <div style={{ padding: `10em` }}>
				  <h2>Soft Skills</h2>
				  <p><Highlight>Behavioral</Highlight></p>
				  <p><Highlight>Mindset</Highlight></p>
				  <p><Highlight>Attitude</Highlight></p>
				  <p><Highlight>Teamwork</Highlight></p>
				  <p><Highlight>Leadership</Highlight></p>
				  <p><Highlight>Learnability</Highlight></p>
			  </div>
		  </Skills>
		  <Skills>
			  <div style={{ padding: `10em`}}>
				  <h2>Right Fit</h2>
				  <p><Highlight>Site Visits</Highlight></p>
				  <p><Highlight>Work Simulations</Highlight></p>
				  <p><Highlight>Company Assessment</Highlight></p>
				  <p><Highlight>Hackathons</Highlight></p>
				  <p><Highlight>Informal Meetings</Highlight></p>
				  <p><Highlight>Industry Challenges</Highlight></p>
			  </div>
			  <StaticImage
				  src="../images/skills-right-fit.png"
				  width={700}
			  />
		  </Skills>
    </LayoutHomePage>

  );
};

export default IndexPage;
