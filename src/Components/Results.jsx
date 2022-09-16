import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Loading from './Loading';

import { useResultContext } from './Context/ResultContextProvider';
const Results = () => {
    const { results, isLoading, getResults, searchTerm} = useResultContext();
    const location = useLocation();

    if(isLoading) return <Loading />
  return (
    <div>

    </div>
  )
}

export default Results