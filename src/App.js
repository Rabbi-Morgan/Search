import './App.css';

import React, { useState } from 'react'
import Rout from './Components/Routes';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={`${darkTheme ? 'dark' : ''} `}>
        <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
          <Rout/>
          <Footer/>
        </div>
    </div>
  )
}

export default App