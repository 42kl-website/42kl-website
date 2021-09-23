import React, { useRef, useEffect } from "react";
import {
  PlasmicComponent,
  PlasmicRootProvider,
  initPlasmicLoader,
} from "@plasmicapp/loader-gatsby";
import { graphql } from 'gatsby';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Statically fetch the data needed to render Plasmic pages or components.
// You can pass in multiple page paths or component names.
export const query = graphql`
  query {
    plasmicComponents(componentNames: ["Animated"])
    plasmicOptions
  }
`;

// Render the page or component from Plasmic.
const Animated = ({ data }) => {
  const { plasmicComponents, plasmicOptions } = data;

  gsap.registerPlugin(ScrollTrigger)
  const ref = useRef(null)
  useEffect(() => {
    if (ref.current) {
      const element = ref.current;
      gsap.to(
        element.querySelector('.forty-two'),
        {
          scale: 6,
          scrollTrigger: {
            trigger: element.querySelector('.frame-140'),
            start: "top bottom",
            end: "+=300",
            scrub: true,
          }
        }
      )
    }
  })

  return (
    <PlasmicRootProvider
      loader={initPlasmicLoader(plasmicOptions)}
      prefetchedData={plasmicComponents}
    >
      <PlasmicComponent
        component="/animated"
        componentProps={{
          root: {
            props: {
              ref,
            }
          }
        }}
      />
    </PlasmicRootProvider>
  );
};

export default Animated
