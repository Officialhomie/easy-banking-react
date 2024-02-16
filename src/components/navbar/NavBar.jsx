import React from 'react'
import myLogo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between px-20 py-5 bg-[#fff]'>
        <Link to="/"><img src={myLogo}/></Link>
        <ul className='flex items-center gap-[100px] text-[#A7A7A7]'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/blog">Blog</Link>
            </li>
        </ul>
        <button className='py-3 px-7 bg-gradient-to-r from-green-400 to-blue-500 rounded-full text-white border hover:border-black'>Contact Us</button>
    </div>
  )
}

export default NavBar