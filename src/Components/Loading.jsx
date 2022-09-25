import React from 'react'
import * as Loader from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
        <Loader.Circles color="#000BFF" height={550} width={80} />
    </div>
  )
}

export default Loading