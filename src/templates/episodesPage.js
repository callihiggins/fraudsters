import * as React from 'react';
import Episodes from '../components/Episodes';

const EpisodesPage = ({ pageContext }) => {
  const { episodesData } = pageContext;

  return (
    <Episodes episodesData={episodesData}/>
  )
}

export default EpisodesPage;
