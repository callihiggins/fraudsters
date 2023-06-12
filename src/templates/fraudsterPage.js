import * as React from 'react';
import { graphql } from 'gatsby' 
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import Fraudster from '../components/Fraudster';

library.add(fab, faEnvelope);

export const query = graphql`query GetBlogPostsByTag($tag: String!) {
  allContentfulPost (
    filter: {
      metadata: {
        tags: { 
          elemMatch: { 
            contentful_id: { 
              eq: $tag
            } 
          } 
        }
      }
    }
    sort: { fields: [createdAt], order: DESC }
  ) {
    nodes {
      createdAt
      title
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            description
            gatsbyImageData(quality: 50)
            __typename
          }
        }
      }
    }
  }	
}`

const FraudsterPage = ({ data, pageContext } ) => {
  const { name, photo, description} = pageContext;
  return (
    <Fraudster fraudsterData={data} name={name} photo={photo} description={description}/>
  )
}

export default FraudsterPage;
