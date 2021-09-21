import * as React from 'react';
import { PlasmicCanvasHost } from '@plasmicapp/host';
import Helmet from 'react-helmet';

export default function Host() {
  return (
    <>
      <Helmet>
        {/* Optional: */}
        <script src="https://static1.plasmic.app/preamble.js" />
      </Helmet>
      <PlasmicCanvasHost />
    </>
  );
}
