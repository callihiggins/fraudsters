import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import PageHelmet from '../PageHelmet';
import Footer from '../Footer';
import Episode from './Episode';
import Nav from '../Nav';
import * as styles from './styled';

const Episodes = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      allSimplecastPodcastEpisode(sort: { fields: [publishedAt, number ], order: DESC }) {
        edges {
          node {
            id
            guid
            title
            description
            slug
            simplecastId
            keywords
            publishedAt(formatString: "MMMM DD, YYYY")
            image {
            childImageSharp {
              fixed(width: 300) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          }
        }
      }
    }
  `)
  
  const titles = data?.allSimplecastPodcastEpisode?.edges?.map(edge => edge.node.title);
  const filteredData =  data?.allSimplecastPodcastEpisode?.edges?.filter((edge, index) => !titles.includes(edge.node.title, index + 1))

  return (
    <>
      <PageHelmet />
      <div className={styles.pageContainerClass}>
        <Nav />
        <h1 className={styles.pageTitleClass}>Episodes</h1>
        <div className={styles.episodesContainerClass}>
          {filteredData.map((edge, idx) => 
            <Episode key={idx} title={edge.node.title} publishedAt={edge.node.publishedAt} description={edge.node.description} slug={edge.node.slug} image={edge.node.image?.childImageSharp?.fixed} />
          )}
        </div>
        <Footer />
      </div>
    </>
   
  )
}
export default Episodes