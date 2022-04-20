require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `new`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-emotion", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sass", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
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
]
};