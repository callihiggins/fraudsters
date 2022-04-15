import * as React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSpinner, faPlus, faMinus, faEnvelope, faTimes } from '@fortawesome/free-solid-svg-icons'

import Episodes from '../components/Episodes';
import "./base.css"

library.add(fab, faSpinner, faPlus, faMinus, faEnvelope, faTimes);


const EpisodesPage = () => {
  return (
    <Episodes />
  )
}

export default EpisodesPage;
