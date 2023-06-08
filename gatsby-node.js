const path = require("path")
// const { createRemoteFileNode } = require('gatsby-source-filesystem')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const podcastQueryResults = await graphql(`
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

  const fraudstersQueryResults = await graphql(`
    query FraudsterPageQuery {
      allContentfulFraudster {
        nodes {
          name
          metadata {
            tags {
              name
            }
          }
          photo {
            fluid(quality: 100) {
              aspectRatio
              src
              srcSet
              sizes
            } 
          }
        } 
      }
    }`);


  const titles = podcastQueryResults?.data?.allSimplecastPodcastEpisode?.edges?.map(edge => edge.node.title);
  const filteredData =  podcastQueryResults?.data?.allSimplecastPodcastEpisode?.edges?.filter((edge, index) => !titles.includes(edge.node.title, index + 1))
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

  const fraudstersTemplate = path.resolve(`src/templates/theFraudstersPage.js`);
  const fraudsterTemplate = path.resolve(`src/templates/fraudsterPage.js`);
  const theFraudsters = fraudstersQueryResults?.data.allContentfulFraudster.nodes;

  createPage({
    path: `/thefraudsters`,
    component: fraudstersTemplate,
    context: {
      fraudstersData: theFraudsters
    },
  })

  theFraudsters.forEach((node, index) => {
    console.log(node.metadata.tags[0].name)
    createPage({
      path: `/fraudster/${node.metadata.tags[0].name}`,
      component: fraudsterTemplate,
      context: {
        fraudsterData: node.metadata.tags[0].name,
      },
    })
  })
}

// const nodeWithImage = ['SimplecastPodcastEpisode'];

// exports.onCreateNode = async ({
//   node,
//   actions: { createNode, createNodeField },
//   createNodeId,
//   getCache,
// }) => {

//   if (nodeWithImage.includes(node.internal.type) && node.imageUrl) {
//     console.log('img url', node.imageUrl)
//     const fileNode = await createRemoteFileNode({
//       url: node.imageUrl,
//       parentNodeId: node.id,
//       createNode,
//       createNodeId,
//       getCache,
//     });

//     if (fileNode) {
//       node.image___NODE = fileNode.id;
//    //   createNodeField({ node, name: 'image', value: fileNode.id })
//       console.log('modified node', node)
//     }
//   }
// };

exports.createSchemaCustomization = ({
  actions,
  schema
}) => {
  actions.createTypes(`type SimplecastPodcastEpisode implements Node {
      image: File @link(from: "image___NODE")
    }`);
};