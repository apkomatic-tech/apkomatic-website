module.exports = {
  siteMetadata: {
    title: `Apkomatic`,
    description: `Apkomatic is a Los Angeles based web development company specializing in building websites and web applications.`,
    author: `@apkomatic-tech`,
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
        background_color: `#5d2c8d`,
        theme_color: `#5d2c8d`,
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
  ],
};
