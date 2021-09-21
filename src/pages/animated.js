import React from "react";
import {
  PlasmicComponent,
  PlasmicRootProvider,
  initPlasmicLoader,
} from "@plasmicapp/loader-gatsby";
import { graphql } from 'gatsby';
import Meteor42 from '../components/Meteor42';

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

  const PLASMIC = initPlasmicLoader(plasmicOptions);

  PLASMIC.registerComponent(Meteor42, {
    name: 'Meteor42',
    props: {
      width: 'string',
    }
  })

  return (
    <PlasmicRootProvider
      loader={PLASMIC}
      prefetchedData={plasmicComponents}
    >
      <PlasmicComponent component="/animated" />
    </PlasmicRootProvider>
  );
};

export default Animated
