import * as React from "react";
import { gsap } from "gsap";
import useSelector from "../hooks/useSelector";
import { ScrollTrigger } from "gsap/ScrollTrigger.js"
import { useLayoutEffect } from "react";

// This is more like animation for home.js now
gsap.registerPlugin(ScrollTrigger);

const LayerPin = ({ children }) => {

  const [q,ref] = useSelector();


  useLayoutEffect(() => {
    gsap.utils.toArray(q(".fixed-section-content")).forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top", 
        pin: true, 
        pinSpacing: false,
      });

      const elems = panel.querySelectorAll(".fade-in");

      gsap.set(elems, {
        opacity:0,
        y: 100,
        duration: 1,
        ease: "power3.out"
      })
      ScrollTrigger.create({
        trigger: panel,
        start: "top 40%",
        end: "bottom 70%",
        markers: true,
        onEnter: () => gsap.to(elems, {
          y: 0,
          opacity: 1,
          stagger: 0.2,
        }),
        onLeave: () => gsap.to(elems, {
          y: -500,
          opacity: 0,
          stagger: 0.2,
        }),
        onEnterBack: () => gsap.to(elems, {
          y: 0,
          opacity: 1,
          stagger: -0.2,
        }),
        onLeaveBack: () => gsap.to(elems, {
          y: 50,
          opacity: 0,
          stagger: -0.2,
        }),
      });

    });
  },[]);

  useLayoutEffect = (() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: q(".welcome-container"),
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: true,
      }
    })

    tl.to(q(".parallax1"), {y: 10, ease: "none"},0)
      .to(q(".parallax2"), {y: 150, ease:"none"}, 0);

  });



    
    // ScrollTrigger.create({
    //   snap: 1 / 4 // snap whole page to the closest section!
    // });

  return <span ref={ref}>{ children }</span>
};

export default LayerPin;