import React from 'react';
import { initPlasmicLoader, PlasmicComponent, PlasmicRootProvider } from '@plasmicapp/loader-gatsby';
import { graphql } from 'gatsby';

export const query = graphql`
  query ($path: String) {
    plasmicComponents(componentNames: [$path])
    plasmicOptions
  }
`;

const PlasmicGatsbyPage = ({ location, data }) => {
  const { plasmicComponents, plasmicOptions } = data;
  return (
    <PlasmicRootProvider loader={initPlasmicLoader(plasmicOptions)} prefetchedData={plasmicComponents}>
      <PlasmicComponent component={location.pathname} />
    </PlasmicRootProvider>
  );
};

export default PlasmicGatsbyPage;
