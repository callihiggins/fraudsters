import * as React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import FraudstesPageComponent from '../components/Fraudsters';

library.add(fab, faEnvelope);

const TheFraudstersPage = ({ pageContext }) => {

  return (
    <FraudstesPageComponent pageContext={pageContext}/>
  )
}

export default TheFraudstersPage;
