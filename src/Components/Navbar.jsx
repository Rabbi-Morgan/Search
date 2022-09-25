import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
const Navbar = (props) => {
    const {darkTheme, setDarkTheme} = props
  return (
    <div className='p-5 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 shadow-md' >
    <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to='/'>
            <p className="text-2xl bg-blue-500 font-bold py-2 px-4 text-gray-100 dark:text-gray-800 dark:bg-gray-400" >
                Search.
            </p>
        </Link>
        <button className='py-2 px-4 rounded text-gray-800 bg-gray-200 dark:bg-gray-700
         shadod-sm hover:shadow-md dark:text-gray-100' onClick={()=>setDarkTheme(!darkTheme)}>{darkTheme ? 'Light 💡' : 'Dark 🌑'}</button>
    </div>
    {/* <Search/> */}
    </div>
  )
}

export default Navbar