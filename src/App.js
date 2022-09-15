import './App.css';

import React, { useState } from 'react'
import Routes from './Components/Routes';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <div>
      <Routes/>
      <Navbar/>
      <Footer/>
    </div>
  )
}

export default App