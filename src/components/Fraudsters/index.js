import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import PageHelmet from '../PageHelmet';
import Footer from '../Footer';
import Fraudster from './Fraudster';
import Nav from '../Nav';
import * as styles from './styled';

const Fraudsters = ({ pageContext }) => {

  const { fraudstersData } = pageContext;
  return (
    <>
      <PageHelmet />
      <div css={styles.pageContainerClass}>
        <Nav />
        <h1 css={styles.pageTitleClass}>Meet the Fraudsters</h1>
        <div css={styles.fraudsterContainerClass}>
          {fraudstersData.map((fraudster, idx) => (
            <Fraudster key={idx} name={fraudster.name} photo={fraudster.photo} slug={fraudster.metadata.tags[0].contentful_id}/>
          ))}
        </div>
      </div>
      <Footer />
    </>
   
  )
}
export default Fraudsters