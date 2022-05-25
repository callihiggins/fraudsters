import * as React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSpinner, faPlus, faMinus, faEnvelope, faTimes } from '@fortawesome/free-solid-svg-icons'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import Home from '../components/Home';
import PageHelmet from '../components/PageHelmet';
import "./base.css"

library.add(fab, faSpinner, faPlus, faMinus, faEnvelope, faTimes);


const IndexPage = () => {
  return (
    <>
      <PageHelmet/>
      <Home />
    </>
  )
}

export default IndexPage
