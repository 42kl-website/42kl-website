import React from 'react';
import { initPlasmicLoader, PlasmicComponent, PlasmicRootProvider } from '@plasmicapp/loader-gatsby';
import { graphql } from 'gatsby';
import Meteor42 from '../components/Meteor42';

export const query = graphql`
  query ($path: String) {
    plasmicComponents(componentNames: [$path])
    plasmicOptions
  }
`;

const PlasmicGatsbyPage = ({ location, data }) => {
  const { plasmicComponents, plasmicOptions } = data;

  const PLASMIC = initPlasmicLoader(plasmicOptions);

  PLASMIC.registerComponent(Meteor42, {
    name: 'Meteor42',
    props: {
      width: 'string',
    }
  })

  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicComponents}>
      <PlasmicComponent component={location.pathname} />
    </PlasmicRootProvider>
  );
};

export default PlasmicGatsbyPage;
