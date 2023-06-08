import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PageHelmet from '../PageHelmet';
import Footer from '../Footer';
import Nav from '../Nav';
// import * as styles from './styled'

const Fraudster = (fraudsterData) => {
  const Bold = ({ children }) => <span className="bold">{children}</span>
  const Text = ({ children }) => <p className="align-center">{children}</p>
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { gatsbyImageData, description } = node.data.target
        if (!gatsbyImageData) return null
        return (
          <GatsbyImage
            image={getImage(gatsbyImageData)}
            alt={description}
          />
        )
    },
    },
  }

  // search by slug
  const data = useStaticQuery(graphql`
    {
      allContentfulPost {
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
    }`);

  const html = data.allContentfulPost.nodes.map(node => renderRichText(node.body, options))

  return (
    <div> stuff 
      {html}
    </div>
  )
}
export default Fraudster