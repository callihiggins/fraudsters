import * as React from 'react';
import PageHelmet from '../PageHelmet';
import Footer from '../Footer';
import Nav from '../Nav';
import * as styles from './styled';

export const About = () => 
  <>
    <PageHelmet />
    <Nav />
    <div className={styles.pageContainerClass}>
      <h1 className={styles.pageTitleClass}>Meet your friendly, neighborhood Fraudbusters</h1>
      <div className={styles.containerClass}>

      </div>
    </div>
    <Footer />
  </>

export default About;