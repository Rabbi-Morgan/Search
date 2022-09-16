import React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'
import Results from './Results'
const Rout = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Navigate to='/search'/>}/>
        <Route exact path="/search" element={<Results/>}/>
        <Route exact path="/videos" element={<Results/>}/>
        <Route exact path="/news" element={<Results/>}/>
        <Route exact path="/images" element={<Results/>}/>
      </Routes>
    </div>
  )
}

export default Rout