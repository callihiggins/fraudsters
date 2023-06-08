import * as React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import Fraudster from '../components/Fraudster';

library.add(fab, faEnvelope);

const FraudsterPage = ({ pageContext }) => {
  const { fraudsterData } = pageContext;
  return (
    <Fraudster fraudstesData={fraudsterData}/>
  )
}

export default FraudsterPage;
