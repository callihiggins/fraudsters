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
              contentful_id
            }
          }
          description {
						description
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
      allContentfulPost {
        nodes {
          title
          body {
            raw
            references {
              ... on ContentfulAsset {
                contentful_id
                description
                gatsbyImageData(layout: CONSTRAINED, quality: 80, formats: [WEBP, AUTO], placeholder: BLURRED)
                __typename
              }
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
  const postTemplate = path.resolve(`src/templates/postPage.js`);
  const theFraudsters = fraudstersQueryResults?.data.allContentfulFraudster.nodes;
  const posts = fraudstersQueryResults?.data.allContentfulPost.nodes;

  createPage({
    path: `/thefraudsters`,
    component: fraudstersTemplate,
    context: {
      fraudstersData: theFraudsters
    },
  })

  theFraudsters.forEach((node, index) => {
    if (node.metadata?.tags[0]?.contentful_id) {
      createPage({
        path: `/fraudster/${node.metadata.tags[0].contentful_id}`,
        component: fraudsterTemplate,
        context: {
          tag: node.metadata.tags[0].contentful_id,
          description: node.description,
          photo: node.photo,
          name: node.name
        },
      })
    }
  })

  const convertToSlug = text => 
    text.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
  
  posts.forEach((node, index) => {
    const slug = convertToSlug(node.title)
    console.log('slug', slug)
    createPage({
      path: `/blog/${slug}`,
      component: postTemplate,
      context: {
        postData: node,
      },
    })
  })

}

exports.createSchemaCustomization = ({
  actions,
  schema
}) => {
  actions.createTypes(`type SimplecastPodcastEpisode implements Node {
      image: File @link(from: "image___NODE")
    }`);
};