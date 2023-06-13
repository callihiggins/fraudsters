import * as React from 'react';
import { graphql } from 'gatsby' 
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import Fraudster from '../components/Fraudster';

library.add(fab, faEnvelope);

const FraudsterPage = ({ pageContext } ) => {
  const { name, photo, description, posts, tag } = pageContext;
  const postsByTag = posts.filter(post => post.metadata.tags.map(postTag => postTag.contentful_id === tag))
  return (
    <Fraudster posts={postsByTag} name={name} photo={photo} description={description}/>
  )
}

export default FraudsterPage;
