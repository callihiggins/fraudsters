const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const queryResults = await graphql(`
    query PodcastPageQuery {
      allSimplecastPodcastEpisode(sort: { fields: [publishedAt, number ], order: DESC }) {
        edges {
          node {
            id
            guid
            title
            description
            longDescription
            duration
            authors
            slug
            number
            simplecastId
            keywords
            publishedAt(formatString: "dddd, MMMM Do YYYY")
            imageUrl
            image {
              childImageSharp {
                fluid(quality: 100) {
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
            }
          }
        }
      }
    }
  `)

  const titles = queryResults.data.allSimplecastPodcastEpisode?.edges?.map(edge => edge.node.title);
  const filteredData =  queryResults.data.allSimplecastPodcastEpisode?.edges?.filter((edge, index) => !titles.includes(edge.node.title, index + 1))
  const episodeTemplate = path.resolve(`src/templates/episodePage.js`);
  const episodesTemplate = path.resolve(`src/templates/episodesPage.js`);

  createPage({
    path: `/episodes`,
    component: episodesTemplate,
    context: {
      episodesData: filteredData,
    },
  })
  
  filteredData.forEach((edge, index) => {
    let prevEpisode = null;
    let nextEpisode = null;
    if (index > 0) {
      nextEpisode = filteredData[index - 1].node
    };
    if (index < filteredData.length - 1) {
      prevEpisode = filteredData[index + 1].node;
    }
  
    const defaultAuthors = ['Seena Ghaznavi', 'Justin Williams'];
    if (!edge.node.authors || edge.node.authors.length === 0) edge.node.authors = [...defaultAuthors];
    createPage({
      path: `/episodes/${edge.node.slug}`,
      component: episodeTemplate,
      context: {
        episode: edge.node,
        prevEpisode,
        nextEpisode 
      },
    })
  })
}