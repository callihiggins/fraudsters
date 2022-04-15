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
  return (
    <>
      <PageHelmet />
      <div className={styles.pageContainer}>
        <Nav />
        <h1 className={styles.pageTitle}>Episodes</h1>
        <div className={styles.episodesContainer}>
          {data?.allSimplecastPodcastEpisode?.edges?.map(edge => 
            <Episode title={edge.node.title} description={edge.node.description} slug={edge.node.slug} />
          )}
        </div>
        <Footer />
      </div>
    </>
   
  )
}
export default Episodes