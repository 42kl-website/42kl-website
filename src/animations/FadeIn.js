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

  useLayoutEffect(() => {
    gsap.from(q(".fade-in"), {
      scrollTrigger: {
        trigger: q(".container"),
        start: "top bottom-=200",
        end: "+=500",
        scrub: 2,
      },
      opacity: 0,
      stagger: 0.5,
      ...vars,
    });
  }, []);

  return <span ref={ref}>{ children }</span>;
}

export default FadeIn;

