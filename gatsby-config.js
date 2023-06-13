require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Fraudsters`,
    siteUrl: `https://fraudsters.fm`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-fontawesome-css", 
    "gatsby-plugin-recaptcha",
    "gatsby-plugin-netlify",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-fix-fouc",
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://fraudsters.fm',
        sitemap: 'https://fraudsters.fm/sitemap.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/",
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-simplecast',
      options: {
        token: process.env.SIMPLECAST_TOKEN,
        podcastId: process.env.SIMPLECAST_ID,
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        mode: `render-blocking`,
        preconnect: [`https://use.typekit.net`],
        web: [
          {
            name: `dunbar-tall`,
            file: `https://use.typekit.net/${process.env.TYPEKIT_ID}.css`,
          },
          {
            name: `itc-avant-garde-gothic-pro`,
            file: `https://use.typekit.net/${process.env.TYPEKIT_ID}.css`,
          },
        ],
      },
    },
    {
    resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GA_TRACKING_ID],
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        enableTags: true
      },
    },
  ]
};