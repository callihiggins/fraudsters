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
  ) {
    nodes {
      title
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            description
            gatsbyImageData(width: 1000)
            __typename
          }
        }
      }
    }
  }	
}`

const FraudsterPage = ({ data }) => {
  console.log(data)
  return (
    <Fraudster fraudsterData={data}/>
  )
}

export default FraudsterPage;
