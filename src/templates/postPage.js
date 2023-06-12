import * as React from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import options from '../shared/renderOptions';
import PageHelmet from '../components/PageHelmet';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import * as styles from '../components/Post/styled'
import PostPageComponent from '../components/Post';

library.add(fab, faEnvelope);

const PostPage = ({ pageContext }) => {
  const { body, title } = pageContext.postData;
  const renderedBody = renderRichText(body, options);
  return (
    <>
    <div css={styles.pageContainerClass}>
      <PageHelmet title={title} keywords={title} />
      <Nav />
      <PostPageComponent body={renderedBody} title={title}/>
    </div>
    <Footer></Footer>
    </>
  )
}

export default PostPage;
