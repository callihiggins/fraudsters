import * as React from 'react';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from './renderStyles.js'

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
        debugger;
        if (!gatsbyImageData) return null
        return (
          <GatsbyImage
            image={getImage(gatsbyImageData)}
            alt={description}
            // css={styles.embedPhotoClass}
          />
        )
      },
      [INLINES.HYPERLINK]: (node) => {
        if((node.data.uri).includes('player.simplecast.com')){
          return (
            <div css={styles.embedContainerClass}>
              <iframe css={styles.embedClass} height='250px' width="100%" frameBorder="no" scrolling="no" seamless src={`${node.data.uri}?dark=true`}></iframe>
            </div>
          )
        } else if((node.data.uri).includes('youtube.com/embed')) {
          return (
            <div css={styles.embedContainerClass}>
              <iframe css={[styles.embedClass, styles.youTubeClass]} src={node.data.uri} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" frameBorder="0" allowFullScreen width="560px" height="315px"></iframe>
            </div>
          )
        }
      }
    },
  }

  export default options;