module.exports = {
  siteMetadata: {
    title: `new`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-emotion", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
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
      token: 'eyJhcGlfa2V5IjoiVlliZDh5MmNOMUljcm4xaGNKZUtBM0xFTGRURThnSFdrZE1PcUV4Y0hJYz0ifQ==',
      podcastId: '3efcc19a-e279-40af-9726-47a519956c3f',
    },
  },
]
};