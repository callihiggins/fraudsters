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
      <div css={styles.pageContainerClass}>
        <Nav />
        <h1 css={styles.pageTitleClass}>Episodes</h1>
        <div css={styles.episodesContainerClass}>
          {episodesData.map(({ node: { title, publishedAt, image, imageUrl, slug, description }}, idx) => 
            <Episode key={idx} title={title} publishedAt={publishedAt} imageUrl={imageUrl} description={description} slug={slug} image={image} />
          )}
        </div>
        <Footer />
      </div>
    </>
   
  )
}
export default Episodes