import * as React from "react";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import useSelector from "../hooks/useSelector";
import { ScrollTrigger } from "gsap/ScrollTrigger.js"

gsap.registerPlugin(ScrollTrigger);

/*
Fading in component
customization can add in vars
*/
const FadeIn = ({ children, vars }) => {

  const [q, ref] = useSelector();

  // useLayoutEffect(() => {
  //   gsap.from(q(".fade-in"), {
  //     scrollTrigger: {
  //       trigger: ref.current,
  //       start: "top 80%",
  //       end: "bottom 80%",
  //       scrub: 2,
  //       markers:true,
  //     },
  //     opacity: 0,
  //     stagger: 0.5,
  //     ...vars,
  //   });
  // }, []);

  return <div ref={ref}>{ children }</div>;
}

export default FadeIn;

