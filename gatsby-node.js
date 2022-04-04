const path = require("path")

console.log('hello from gatsby-node');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const queryResults = await graphql(`
    query PodcastPageQuery {
      allSimplecastPodcastEpisode {
        edges {
          node {
            id
            guid
            title
            description
            slug
            simplecastId
            keywords
          }
        }
      }
    }
  `)

  const episodeTemplate = path.resolve(`src/templates/episodePage.js`);
  queryResults.data.allSimplecastPodcastEpisode.edges.forEach(edge => {
    console.log(edge.node.slug)
    createPage({
      path: `/episodes/${edge.node.slug}`,
      component: episodeTemplate,
      context: {
        episode: edge.node,
      },
    })
  })
}