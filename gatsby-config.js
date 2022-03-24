require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Apkomatic`,
    siteUrl: `https://www.apkomatic.com`,
    description: `Apkomatic is a web development company specializing in building websites and web applications.`,
    author: `@apkomatic`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-101945546-1',
        head: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Apkomatic Website`,
        short_name: `apkomatic`,
        start_url: `/`,
        background_color: `#070918`,
        theme_color: `#070918`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/images/favicon.gif`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ['Poppins:400,700', 'Open Sans:400'],
        },
      },
    },
    // sanity CMS
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: 'jibd5p3x',
        dataset: 'production',
        // Dev: get updates without having to manually restart the build process
        watchMode: true,
      },
    },
    // Sitemap
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: process.env.INSTAGRAM_ACCESS_TOKEN,
      },
    },
  ],
};
