import * as React from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import options from '../../shared/renderOptions';
import Img from 'gatsby-image';
import Post from '../Post';
import PageHelmet from '../PageHelmet';
import Footer from '../Footer';
import Nav from '../Nav';
import * as styles from './styled'

const Fraudster = ({posts, description, name, photo}) => {
  const renderedPosts = posts?.map(node => {
    const body = renderRichText(node.body, options);
    return <Post body={body} title={node.title} />
  });
  const fraudsterDescription = description.description
  return (
    <>  
      <div css={styles.pageContainerClass}>
        <PageHelmet description={description} title={name} keywords={name} />
        <Nav />
        <div css={styles.headerClass}>
          <div css={styles.nameAndDetailsClass}>
            <div css={styles.nameClass}>{name}</div>
            <div css={styles.descriptionClass}>
              {fraudsterDescription}
            </div>
          </div>
          <div css={styles.photoClass}>
            <Img fluid={photo.fluid} width="100%" alt={name} /> 
          </div>
        </div> 
        <div css={styles.postsClass}>
          {renderedPosts}
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Fraudster