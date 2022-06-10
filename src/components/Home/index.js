import * as React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from "gatsby"
import { cx } from '@emotion/css';
import Img from 'gatsby-image';
import ReactFullpage from '@fullpage/react-fullpage'; 
import YouTube from './YouTube';
import Footer from '../Footer';
import MobileNav from '../Nav/MobileNav';
import * as styles from './styled';
import { socialMediaIconsClass } from '../Footer/styled';

const Home = () => {

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
      allYoutubeVideo {
        edges {
          node {
            title
            videoId
          }
        }
      }
    }`
  )
  return (
    <>
      <ReactFullpage
        debug
        licenseKey={process.env.FULLPAGE_LICENSE}
        scrollBar
        render={() => (    
          <ReactFullpage.Wrapper>
            <section css={styles.mainContainerClass} className='section'>
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
              <div css={styles.hideDesktop}>
                <MobileNav css={styles.hideDesktop}/>
              </div>
              <h2 css={styles.subTitleClass}>Fraudsters is an all-you-can-eat podcast buffet of <strong>liars</strong>, <strong>cheaters</strong>, and <strong>scammers</strong>. Hosts <strong>Seena Ghaznavi</strong> and <strong>Justin Williams</strong> cover every flavor of fraud you can imagine from fake psychic hotlines to corporations cookin’ the books.</h2>
              <div css={styles.playerClass}>
                <iframe title="Fraudsters Episodes" frameborder="no" scrolling="no" seamless="" src="https://player.simplecast.com/3efcc19a-e279-40af-9726-47a519956c3f?dark=true&amp;show=true&amp;color=000000"></iframe>
              </div>
              <div css={styles.drawingClass}>
                <Img fluid={data.image.childImageSharp.fluid} width="100%" alt="Seena and Justin" />
              </div>
            </section>
            <section className="section" css={styles.socialSetionClass}>
              <div className={styles.youtubeContainer}>
                {data.allYoutubeVideo.edges.map(({node}) =>
                  <YouTube videoId={node.videoId} videoTitle={node.title} />
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