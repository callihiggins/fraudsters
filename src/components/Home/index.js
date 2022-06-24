import * as React from 'react';
import { useState } from 'react';
import { Link } from 'gatsby';
import { CSSTransition } from "react-transition-group";
import { useInView } from 'react-intersection-observer'
import { useDebouncedCallback } from 'use-lodash-debounce'
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';
import { StaticImage } from "gatsby-plugin-image"
import ReactFullpage from '@fullpage/react-fullpage';
import YouTube from './YouTube';
import IGPhoto from './IGPhoto';
import Footer from '../Footer';
import Nav from '../Nav';
import * as styles from './styled';

const Home = () => {
  const [activeMenu, updateActive] = useState('home');
  const igStep = 12;
  const ytStep = 12;
  const [numOfIgToShow, updatenumOfIgToShow] = useState(igStep);
  const [numOfYTToShow, updatenumOfYTToShow] = useState(ytStep);

  const updateActiveCallback = useDebouncedCallback(active => {
    if (activeMenu !== active) {
      updateActive(active);
    }
  }, 100); 

  const [socialRef, socialInView] = useInView({
    threshold: .5,
  })

  const [homeRef, homeInView] = useInView({
    threshold: .5,
  })

  if (socialInView) {
    updateActiveCallback('social')
  }

  if (homeInView) {
    updateActiveCallback('home')
  }

  const showMoreIg = () => {
    updatenumOfIgToShow(numOfIgToShow + igStep)
  }

  const showMoreYT = () => {
    updatenumOfYTToShow(numOfIgToShow + ytStep)
  }

  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "isolatedDrawing.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1800) {
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
      allYoutubeVideo(sort: { fields: [publishedAt], order: DESC }) {
        edges {
          node {
            title
            videoId
            publishedAt
          }
        }
      }
      allInstagramContent(sort: { fields: [timestamp], order: DESC }) {
        edges {
          node {
            caption
            permalink
            caption
            timestamp(formatString: "MMMM Do, YYYY")
            localFile {
              childImageSharp {
                fluid(maxWidth: 200) {
                  aspectRatio
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    }`
  )
  return (
    <>
      <div css={styles.hideMobile}>
        <CSSTransition
          in={activeMenu !== 'home'}
          timeout={1000}
          classNames="nav"
        >
          <Nav fadedNav={activeMenu === 'home'}/>
        </CSSTransition>
      </div>
      <div css={styles.hideDesktop}>
        <Nav css={styles.hideDesktop}/>
      </div>
      <ReactFullpage
        licenseKey={process.env.FULLPAGE_LICENSE}
        // scrollBar
        scrollOverflow={true}
        responsiveWidth={800}
        credits={{ enabled: false }}
        // normalScrollElements='.socialContainerClass'
        render={() => (
          <ReactFullpage.Wrapper>
            <section css={styles.mainContainerClass} className='section' ref={homeRef}>
              <div css={styles.headerClass}>
                <h1 css={styles.titleClass}>Fraudsters</h1>
                <div css={styles.mobileImageClass}>
                  <Img fluid={data.image.childImageSharp.fluid} width="100%" alt="Seena and Justin" />
                </div>
              </div>
              <nav css={styles.navClass}>
                <Link to="/episodes">Episodes</Link>
                <Link to="/merch">Merch</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
              </nav>
              <h2 css={styles.subTitleClass}>Fraudsters is an all-you-can-eat podcast buffet of <strong>liars</strong>, <strong>cheaters</strong>, and <strong>scammers</strong>. Hosts <strong>Seena Ghaznavi</strong> and <strong>Justin Williams</strong> cover every flavor of fraud you can imagine from fake psychic hotlines to corporations cookin’ the books.</h2>
              <div css={styles.playerClass}>
                <iframe title="Fraudsters Episodes" frameborder="no" scrolling="no" seamless="" src="https://player.simplecast.com/3efcc19a-e279-40af-9726-47a519956c3f?dark=true&amp;show=true&amp;color=000000"></iframe>
              </div>
              <div css={styles.drawingClass}>
                <Img fluid={data.image.childImageSharp.fluid} width="100%" alt="Seena and Justin" />
              </div>
            </section>
            <section className="section" css={styles.socialSetionClass} ref={socialRef}>
              <div css={styles.socialSectionHeaderClass}>
                <div css={styles.lineClass}/>
                <h2>Social Round Up</h2>
                <div css={styles.lineClass}/>
              </div>
              <div css={styles.socialContainerClass}>
                <div css={styles.socialHeaderClass}>
                  <OutboundLink href="https://www.youtube.com/channel/UCQwl8sDTVEAxhwJdYgm-yrg" target="_blank">
                    <StaticImage src="https://yt3.ggpht.com/ytc/AKedOLSRLqhqp_Gu7ctLsiEHIN8lco0aDHvojtypI8OO=s176-c-k-c0x00ffffff-no-rj" alt="youtube profile" />
                    <div css={styles.socialUserClass}>Fraudsters LPN on YouTube</div>
                  </OutboundLink>
                </div>
                <div css={styles.socialThumbnailContainerClass}>
                  {data.allYoutubeVideo.edges.slice(0, numOfYTToShow).map(({node}) =>
                    <YouTube videoId={node.videoId} videoTitle={node.title} />
                  )}
                </div>
                  {data.allYoutubeVideo.edges.length > numOfYTToShow && (
                    <button role="button" onClick={showMoreYT} css={styles.showMoreButtonClass}>Show More</button>
                  )}
              </div>
              <div css={[styles.socialContainerClass, styles.igContainerClass]}>
                <div css={styles.socialHeaderClass}>
                  <OutboundLink href="https://www.instagram.com/fraudsterslpn/" target="_blank">
                    <StaticImage src="https://scontent-lga3-1.cdninstagram.com/v/t51.2885-19/272545685_2797333237234143_8322330572383383566_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=EzqNvvbvt0AAX8Fkid7&tn=CzCX7oqjnvjNPo7t&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT8W4RQIhgVwaa7ds5dNr88pBzOuBCy21wlGa9o-NO2lXQ&oe=62B4495B&_nc_sid=8fd12b" alt="instagram profile" />
                    <div css={styles.socialUserClass}>Fraudsters LPN on Instagram</div>
                  </OutboundLink>
                </div>
                <div css={styles.igThumbnailContainerClass}>
                  {data.allInstagramContent.edges.slice(0, numOfIgToShow).map(({node}) =>
                    <IGPhoto
                      image={node.localFile.childImageSharp.fluid}
                      caption={node.caption}
                      permalink={node.permalink}
                      timestamp={node.timestamp}
                    />
                  )}
                </div>
                {data.allInstagramContent.edges.length > numOfIgToShow && (
                  <button role="button" onClick={showMoreIg} css={styles.showMoreButtonClass}>Show More</button>
                )}
              </div>
            </section>
          </ReactFullpage.Wrapper>
        )}
      />
      <div css={styles.footerClass}>
        <Footer />
      </div>
    </>
  )
}

export default Home;