require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "42KL Website",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "@plasmicapp/loader-gatsby",
      options: {
        projects: [
          {
            id: process.env.PLASMIC_ID,
            token: process.env.PLASMIC_TOKEN
          },
        ],
        // defaultPlasmicPage: require.resolve('./src/templates/default.tsx'),
        // Fetches the latest revisions, whether or not they were unpublished!
        // Disable for production to ensure you render only published changes.
        preview: true
      },
    },
  ],
};
