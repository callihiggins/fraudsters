import * as React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {  faEnvelope } from '@fortawesome/free-solid-svg-icons'

import Contact from '../components/Contact';
import "./base.css"

library.add(fab, faEnvelope);

const ContactPage = () => {
  return (
    <Contact />
  )
}

export default ContactPage;
