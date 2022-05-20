import * as React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Episodes from '../components/Episodes';


library.add(fab, faEnvelope);

const EpisodesPage = ({ pageContext }) => {
  const { episodesData } = pageContext;

  return (
    <Episodes episodesData={episodesData}/>
  )
}

export default EpisodesPage;
