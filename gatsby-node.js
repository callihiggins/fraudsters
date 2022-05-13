const path = require("path")

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
            longDescription
            duration
            slug
            simplecastId
            keywords
            publishedAt(formatString: "dddd, MMMM Do YYYY")
          }
        }
      }
    }
  `)

  const titles = queryResults.data.allSimplecastPodcastEpisode?.edges?.map(edge => edge.node.title);
  const filteredData =  queryResults.data.allSimplecastPodcastEpisode?.edges?.filter((edge, index) => !titles.includes(edge.node.title, index + 1))

  const episodeTemplate = path.resolve(`src/templates/episodePage.js`);
  
  filteredData.forEach((edge, index) => {
    let prevEpisode = null;
    let nextEpisode = null;
    if (index > 0) {
      nextEpisode = filteredData[index - 1].node
    };
    if (index < filteredData.length - 1) {
      prevEpisode = filteredData[index + 1].node;
    }
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