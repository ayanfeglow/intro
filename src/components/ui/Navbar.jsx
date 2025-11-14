import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <header className='fixed min-w-[100%] bg-blue-400'>
            <nav className='h-[8vh] items-center flex justify-between bg-blue-400 max-w-6xl mx-auto'>
                <div className="">
                    <h2 className='text-xl font-semibold text-white'><Link to="/home">Logo</Link></h2>
                </div>
                <div className="">
                    <ul className='flex space-x-4 items-center'>
                        <li className='text-[#fff] text-md font-semibold'><Link to="/about">About</Link></li>
                        <li className='text-[#fff] text-md font-semibold'><Link to="/contact">Contact</Link></li>
                        <li className='text-[#fff] text-md font-semibold'><Link to="/career">Careers</Link></li>
                        <li><button className='bg-white text-blue-400 px-4 py-1 rounded-md font-semibold'>Login</button></li>
                        <li><button className='border border-white px-4 py-1 text-white font-semibold rounded-md'>Sign up</button></li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Navbar;