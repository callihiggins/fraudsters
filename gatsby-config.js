require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Fraudssters`,
    siteUrl: `https://fraudsters.fm`
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-fontawesome-css", 
    "gatsby-plugin-recaptcha",
    "gatsby-plugin-netlify",
    "gatsby-plugin-react-helmet",
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
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    {
      resolve: `gatsby-source-youtube-v3`,
      options: {
        channelId: ['UCQwl8sDTVEAxhwJdYgm-yrg'],
        apiKey: process.env.YOUTUBE_KEY,
        maxVideos: 50 // Defaults to 50
      },
    },
    {
    resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GA_TRACKING_ID],
      }
    }
  ]
};