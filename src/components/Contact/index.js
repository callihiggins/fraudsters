import * as React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' 
import Modal from 'react-modal';
import * as theme from '../../theme';
import PageHelmet from '../PageHelmet';
import Footer from '../Footer';
import Nav from '../Nav';
import ContactForm from './ContactForm';
import * as styles from './styled';
import './modal.css';

export const Contact = () => {
  
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  
  return (
    <>
      <PageHelmet />
      <Nav />
      <div className={styles.pageContainerClass}>
        <h1 className={styles.pageTitleClass}>Say Hi</h1>
        <div className={styles.aboutContainerClass}>
          <section>
            <h2>Who should we cover next? Tell us!</h2>
            <button onClick={openModal}>Fraudster Referral Form</button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Fraudster Referral Form"
              // className="Modal"
              overlayClassName='overlayClass'
              className='contentClass'
            >
              <button className={styles.closeButton} onClick={closeModal}><FontAwesomeIcon icon={solid('x')} /> </button>
              <ContactForm />
            </Modal>
          </section>
          <section>
            <h2>Contact</h2>
            <div>
              <a href="mailto:fraudsterslpn@gmail.com">fraudsterslpn@gmail.com</a><br /><br />
              LPN LA<br />
              PO Box 470<br />
              North Hollywood, CA 91603
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}
  

export default Contact;