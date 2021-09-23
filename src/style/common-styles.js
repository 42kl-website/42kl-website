import styled from "styled-components";

export const WelcomeText = styled.div`
  position: absolute;
  bottom: 24px;
  left: 92px;

  h1 {
    font-size: 100px;
    margin: 24px 0px;
  }
`

export const Introduction = styled.div`
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
`

export const Highlight = styled.span`
  font-weight: bold;
  background: -webkit-linear-gradient(45deg, #3d5aae, #00babc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const Beliefs = styled.div`
  /* position: absolute; */
`

export const Skills = styled.div`
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
`