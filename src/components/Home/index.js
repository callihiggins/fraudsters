import * as React from 'react';
import { Link } from 'gatsby';
import PageHelmet from '../PageHelmet';
import Footer from '../Footer';
import isolatedDrawing from '../../images/isolatedDrawing.png';
import * as styles from './styled';

const Home = () => {

  return (
    <>
      <PageHelmet />
      <main className={styles.mainContainerClass}>
        <div className={styles.headerClass}>
          <h1 className={styles.titleClass}>Fraudsters</h1>
          <div className={styles.mobileImageClass}>
            <img src={isolatedDrawing} alt="Fraudsters Cover Art"/>
          </div>
        </div>
        <nav className={styles.navClass}>
          <Link to="/episodes">Episodes</Link>
          <Link to="/merch">Merch</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <h2 className={styles.subTitleClass}>Fraudsters is an all-you-can-eat podcast buffet of liars, cheaters, and scammers. Hosts Seena Ghaznavi and Justin Williams cover every flavor of fraud you can imagine from fake psychic hotlines to corporations cookin’ the books.</h2>
        <div className={styles.playerClass}>
          <iframe title="Fraudsters Episodes" frameborder="no" scrolling="no" seamless="" src="https://player.simplecast.com/3efcc19a-e279-40af-9726-47a519956c3f?dark=true&amp;show=true&amp;color=000000"></iframe>
        </div>
        <div className={styles.drawingClass}>
          <img src={isolatedDrawing} alt="Seena and Justin" />
        </div>
      </main>
      <Footer />
    </>


  )
}

export default Home;