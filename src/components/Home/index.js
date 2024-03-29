import * as React from 'react';
import { Link } from 'gatsby';
import { CSSTransition } from "react-transition-group";
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';
import ReactFullpage from '@fullpage/react-fullpage';
import Footer from '../Footer';
import Nav from '../Nav';
import * as styles from './styled';

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
    }`
  )
  return (
    <>
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
            <section css={styles.mainContainerClass} className='section'>
              <div css={styles.headerClass}>
                <h1 css={styles.titleClass}>Fraudsters</h1>
                <div css={styles.mobileImageClass}>
                  <Img fluid={data.image.childImageSharp.fluid} width="100%" alt="Seena and Justin" />
                </div>
              </div>
              <nav css={styles.navClass}>
                {/* <Link to="/thefraudsters">The Fraudsters</Link> */}
                <Link to="/episodes">Episodes</Link>
                <Link to="/merch">Merch</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
              </nav>
              <h2 css={styles.subTitleClass}>Comedians <strong>Seena Ghaznavi, JD</strong>, <strong>Justin Williams, PhD</strong>, and <strong>Ariel Leaty</strong> bring you the scams you love from the fraudsters we hate. Our show takes a humorous look at fraudsters that abuse trust, distort reality, and take advantage of vulnerable people financially.</h2>
              <div css={styles.playerClass}>
                <iframe title="Fraudsters Episodes" frameborder="no" scrolling="no" seamless="" src="https://player.simplecast.com/3efcc19a-e279-40af-9726-47a519956c3f?dark=true&amp;show=true&amp;color=000000"></iframe>
              </div>
              <div css={styles.drawingClass}>
                <Img fluid={data.image.childImageSharp.fluid} width="100%" alt="Seena and Justin" />
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