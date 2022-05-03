import * as React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSpinner, faPlus, faMinus, faEnvelope, faTimes } from '@fortawesome/free-solid-svg-icons'

import Merch from '../components/Merch';
import "./base.css"

library.add(fab, faSpinner, faPlus, faMinus, faEnvelope, faTimes);


const MerchPage = () => {
  return (
    <Merch />
  )
}

export default MerchPage;
