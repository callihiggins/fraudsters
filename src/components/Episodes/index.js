import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import PageHelmet from '../PageHelmet';
import Footer from '../Footer';
import Episode from './Episode';
import Nav from '../Nav';
import * as styles from './styled';

const Episodes = ({ episodesData }) => {
  return (
    <>
      <PageHelmet />
      <div className={styles.pageContainerClass}>
        <Nav />
        <h1 className={styles.pageTitleClass}>Episodes</h1>
        <div className={styles.episodesContainerClass}>
          {episodesData.map(({ node: { title, publishedAt, image, slug, description }}, idx) => 
            <Episode key={idx} title={title} publishedAt={publishedAt} description={description} slug={slug} image={image} />
          )}
        </div>
        <Footer />
      </div>
    </>
   
  )
}
export default Episodes