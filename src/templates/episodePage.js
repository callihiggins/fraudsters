import * as React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import EpisodePageComponent from '../components/EpisodePage';

library.add(fab, faEnvelope);

const EpisodePage = ({ pageContext }) => {

  return (
    <EpisodePageComponent pageContext={pageContext}/>
  )
}

export default EpisodePage;
