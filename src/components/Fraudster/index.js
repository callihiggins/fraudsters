import * as React from 'react';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PageHelmet from '../PageHelmet';
import Footer from '../Footer';
import Nav from '../Nav';
// import * as styles from './styled'

const Fraudster = ({fraudsterData, description, name, photo}) => {
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
      [INLINES.HYPERLINK]: (node) => {
        debugger;
        if((node.data.uri).includes('player.simplecast.com')){
          return <iframe height='250px' width="100%" frameBorder="no" scrolling="no" seamless src={`${node.data.uri}?dark=true&amp;show=true&amp;color=000000`}></iframe>

        } else if((node.data.uri).includes('youtube.com/embed')) {
          return <iframe src={node.data.uri} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" frameBorder="0" allowFullScreen></iframe>
        }
      }
    },
  }
  const html = fraudsterData.allContentfulPost.nodes.map(node => renderRichText(node.body, options))

  return (
    <div>  
      {html}
    </div>
  )
}
export default Fraudster